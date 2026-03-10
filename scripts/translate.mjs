/**
 * Translate all locale files and legal page content via DeepL API.
 * Usage: node scripts/translate.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const KEY = process.env.DEEPL_AUTH_KEY || 'a0f7d1e6-8f1a-4e6f-8bd2-590f2375bb63:fx';
const API = 'https://api-free.deepl.com/v2/translate';

const TARGETS = ['EN', 'FR', 'ES', 'IT'];
const TARGET_FILE_MAP = { EN: 'en', FR: 'fr', ES: 'es', IT: 'it' };

async function translateText(text, targetLang) {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: [text], target_lang: targetLang, source_lang: 'DE' }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DeepL ${res.status}: ${err}`);
  }
  const data = await res.json();
  return data.translations[0].text;
}

async function translateBatch(texts, targetLang) {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: texts, target_lang: targetLang, source_lang: 'DE' }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DeepL ${res.status}: ${err}`);
  }
  const data = await res.json();
  return data.translations.map(t => t.text);
}

// Flatten nested object to array of {path, value} pairs
function flatten(obj, prefix = '') {
  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      result.push(...flatten(value, path));
    } else if (typeof value === 'string') {
      result.push({ path, value });
    }
  }
  return result;
}

// Set nested value by dot-separated path
function setNested(obj, path, value) {
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!(parts[i] in current)) current[parts[i]] = {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

async function translateLocales() {
  const dePath = resolve(__dirname, '../src/locales/de.json');
  const de = JSON.parse(readFileSync(dePath, 'utf8'));
  const flat = flatten(de);
  const texts = flat.map(f => f.value);

  console.log(`Translating ${texts.length} strings to ${TARGETS.length} languages...`);

  for (const target of TARGETS) {
    console.log(`  → ${target}...`);

    // Batch in groups of 50 (DeepL limit)
    const translated = [];
    for (let i = 0; i < texts.length; i += 50) {
      const batch = texts.slice(i, i + 50);
      const results = await translateBatch(batch, target);
      translated.push(...results);
    }

    // Build translated object
    const result = {};
    flat.forEach((f, i) => {
      setNested(result, f.path, translated[i]);
    });

    const outPath = resolve(__dirname, `../src/locales/${TARGET_FILE_MAP[target]}.json`);
    writeFileSync(outPath, JSON.stringify(result, null, 2) + '\n', 'utf8');
    console.log(`    ✓ Wrote ${outPath}`);
  }
}

async function main() {
  console.log('=== DeepL Translation ===\n');
  await translateLocales();
  console.log('\n✅ All translations complete!');
}

main().catch(err => {
  console.error('❌', err.message);
  process.exit(1);
});
