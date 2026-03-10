import { type Locale } from './i18n';
import { type ReactNode } from 'react';

type LegalContent = {
  impressum: ReactNode;
  privacy: ReactNode;
  terms: ReactNode;
};

const de: LegalContent = {
  impressum: (
    <>
      <h1>Impressum</h1>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>Valerian Huber<br />Einzelunternehmen<br />Großkarolinenfeld, Deutschland</p>
      <h2>Kontakt</h2>
      <p>E-Mail: <a href="mailto:help@etchify.app">help@etchify.app</a></p>
      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />DE453549559</p>
      <h2>Verantwortlich für den Inhalt</h2>
      <p>Valerian Huber<br />Großkarolinenfeld, Deutschland</p>
      <h2>Marke</h2>
      <p>Etchify ist eine Marke von <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer">Alpin-Code</a> (alpin-code.de).</p>
    </>
  ),
  privacy: (
    <>
      <h1>Datenschutzerklärung</h1>
      <p><strong>Stand:</strong> März 2026</p>
      <h2>1. Verantwortlicher</h2>
      <p>Valerian Huber<br />Großkarolinenfeld, Deutschland<br />E-Mail: help@etchify.app</p>
      <h2>2. Erhobene Daten</h2>
      <p>Bei der Nutzung unserer App werden folgende Daten verarbeitet:</p>
      <ul>
        <li>Shop-Domain und Shopify-Shop-Daten (für die App-Funktionalität)</li>
        <li>Design-Daten (Texte, Bilder, Positionen auf dem Canvas)</li>
        <li>Bestelldaten (sofern eine Bestellung über den Konfigurator erfolgt)</li>
        <li>Server-Logs (IP-Adresse, Zeitstempel, Browser-Typ)</li>
      </ul>
      <h2>3. Zweck der Verarbeitung</h2>
      <p>Die Daten werden ausschließlich zur Bereitstellung der Etchify-App-Funktionalität verarbeitet (Design-Erstellung, Produktionsdatei-Export, Bestellverwaltung).</p>
      <h2>4. Speicherung</h2>
      <p>Design-Daten werden auf Servern in der EU gespeichert (Supabase, Hetzner). Geteilte Design-Links sind standardmäßig 30 Tage gültig.</p>
      <h2>5. Ihre Rechte</h2>
      <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten. Kontaktieren Sie uns unter help@etchify.app.</p>
      <h2>6. Cookies</h2>
      <p>Etchify verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige Cookies für die Session-Verwaltung und Spracheinstellungen eingesetzt.</p>
    </>
  ),
  terms: (
    <>
      <h1>Allgemeine Geschäftsbedingungen</h1>
      <p><strong>Stand:</strong> März 2026</p>
      <h2>1. Geltungsbereich</h2>
      <p>Diese AGB gelten für die Nutzung der Etchify Shopify-App, bereitgestellt von Valerian Huber, Großkarolinenfeld.</p>
      <h2>2. Leistungsbeschreibung</h2>
      <p>Etchify stellt einen Produktkonfigurator als Shopify-App bereit. Shop-Owner können Produkte konfigurieren, Endkunden können individuelle Designs erstellen.</p>
      <h2>3. Preise und Zahlung</h2>
      <p>Die Abrechnung erfolgt über die Shopify Billing API. Preise sind auf der Pricing-Seite einsehbar. Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.</p>
      <h2>4. Haftung</h2>
      <p>Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Für die Qualität der erstellten Designs und deren Eignung für bestimmte Fertigungsverfahren übernehmen wir keine Gewähr.</p>
      <h2>5. Kündigung</h2>
      <p>Die App kann jederzeit über den Shopify App Store deinstalliert werden. Bei Deinstallation werden alle zugehörigen Daten nach 30 Tagen gelöscht.</p>
      <h2>6. Anwendbares Recht</h2>
      <p>Es gilt deutsches Recht. Gerichtsstand ist Rosenheim.</p>
    </>
  ),
};

const en: LegalContent = {
  impressum: (
    <>
      <h1>Legal Notice</h1>
      <h2>Information according to § 5 TMG</h2>
      <p>Valerian Huber<br />Sole proprietorship<br />Großkarolinenfeld, Germany</p>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:help@etchify.app">help@etchify.app</a></p>
      <h2>VAT ID</h2>
      <p>VAT identification number according to § 27a UStG:<br />DE453549559</p>
      <h2>Responsible for content</h2>
      <p>Valerian Huber<br />Großkarolinenfeld, Germany</p>
      <h2>Brand</h2>
      <p>Etchify is a brand of <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer">Alpin-Code</a> (alpin-code.de).</p>
    </>
  ),
  privacy: (
    <>
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> March 2026</p>
      <h2>1. Data Controller</h2>
      <p>Valerian Huber<br />Großkarolinenfeld, Germany<br />Email: help@etchify.app</p>
      <h2>2. Data Collected</h2>
      <p>The following data is processed when you use our app:</p>
      <ul>
        <li>Store domain and Shopify store data (for app functionality)</li>
        <li>Design data (texts, images, positions on the canvas)</li>
        <li>Order data (if an order is placed via the configurator)</li>
        <li>Server logs (IP address, timestamp, browser type)</li>
      </ul>
      <h2>3. Purpose of Processing</h2>
      <p>The data is processed exclusively for the provision of the Etchify app functionality (design creation, production file export, order management).</p>
      <h2>4. Storage</h2>
      <p>Design data is stored on servers in the EU (Supabase, Hetzner). Shared design links are valid for 30 days by default.</p>
      <h2>5. Your Rights</h2>
      <p>You have the right to information, correction, deletion and restriction of the processing of your data. Contact us at help@etchify.app.</p>
      <h2>6. Cookies</h2>
      <p>Etchify does not use tracking cookies. Only technically necessary cookies are used for session management and language settings.</p>
    </>
  ),
  terms: (
    <>
      <h1>Terms and Conditions</h1>
      <p><strong>Last updated:</strong> March 2026</p>
      <h2>1. Scope</h2>
      <p>These terms and conditions apply to the use of the Etchify Shopify app, provided by Valerian Huber, Großkarolinenfeld.</p>
      <h2>2. Service Description</h2>
      <p>Etchify provides a product configurator as a Shopify app. Store owners can configure products and end customers can create individual designs.</p>
      <h2>3. Prices and Payment</h2>
      <p>Billing takes place via the Shopify Billing API. Prices can be viewed on the pricing page. All prices are subject to VAT.</p>
      <h2>4. Liability</h2>
      <p>Liability is limited to intent and gross negligence. We accept no liability for the quality of designs created or their suitability for specific manufacturing processes.</p>
      <h2>5. Termination</h2>
      <p>The app can be uninstalled at any time via the Shopify App Store. Upon uninstallation, all associated data will be deleted after 30 days.</p>
      <h2>6. Applicable Law</h2>
      <p>German law applies. The place of jurisdiction is Rosenheim.</p>
    </>
  ),
};

const fr: LegalContent = {
  impressum: (
    <>
      <h1>Mentions légales</h1>
      <h2>Informations selon § 5 TMG</h2>
      <p>Valerian Huber<br />Entreprise individuelle<br />Großkarolinenfeld, Allemagne</p>
      <h2>Contact</h2>
      <p>E-mail : <a href="mailto:help@etchify.app">help@etchify.app</a></p>
      <h2>Numéro de TVA</h2>
      <p>Numéro d{"'"}identification TVA conformément au § 27a UStG :<br />DE453549559</p>
      <h2>Responsable du contenu</h2>
      <p>Valerian Huber<br />Großkarolinenfeld, Allemagne</p>
      <h2>Marque</h2>
      <p>Etchify est une marque de <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer">Alpin-Code</a> (alpin-code.de).</p>
    </>
  ),
  privacy: (
    <>
      <h1>Politique de confidentialité</h1>
      <p><strong>Dernière mise à jour :</strong> Mars 2026</p>
      <h2>1. Responsable</h2>
      <p>Valerian Huber<br />Großkarolinenfeld, Allemagne<br />E-mail : help@etchify.app</p>
      <h2>2. Données collectées</h2>
      <p>Lors de l{"'"}utilisation de notre application, les données suivantes sont traitées :</p>
      <ul>
        <li>Domaine de la boutique et données de la boutique Shopify (pour la fonctionnalité de l{"'"}app)</li>
        <li>Données de conception (textes, images, positions sur le canevas)</li>
        <li>Données de commande (si une commande est effectuée via le configurateur)</li>
        <li>Journaux du serveur (adresse IP, horodatage, type de navigateur)</li>
      </ul>
      <h2>3. Finalité du traitement</h2>
      <p>Les données sont traitées exclusivement pour fournir les fonctionnalités de l{"'"}application Etchify (création de design, exportation de fichiers de production, gestion des commandes).</p>
      <h2>4. Stockage</h2>
      <p>Les données de design sont stockées sur des serveurs situés dans l{"'"}UE (Supabase, Hetzner). Les liens de design partagés sont valables 30 jours par défaut.</p>
      <h2>5. Vos droits</h2>
      <p>Vous avez un droit d{"'"}accès, de rectification, d{"'"}effacement et de limitation du traitement de vos données. Contactez-nous à l{"'"}adresse help@etchify.app.</p>
      <h2>6. Cookies</h2>
      <p>Etchify n{"'"}utilise pas de cookies de suivi. Seuls les cookies techniquement nécessaires à la gestion de la session et aux paramètres de langue sont utilisés.</p>
    </>
  ),
  terms: (
    <>
      <h1>Conditions générales</h1>
      <p><strong>Dernière mise à jour :</strong> Mars 2026</p>
      <h2>1. Champ d{"'"}application</h2>
      <p>Les présentes conditions générales s{"'"}appliquent à l{"'"}utilisation de l{"'"}application Etchify Shopify, mise à disposition par Valerian Huber, Großkarolinenfeld.</p>
      <h2>2. Description des prestations</h2>
      <p>Etchify met à disposition un configurateur de produits sous forme d{"'"}application Shopify. Les propriétaires de boutiques peuvent configurer des produits, les clients finaux peuvent créer des designs personnalisés.</p>
      <h2>3. Prix et paiement</h2>
      <p>La facturation s{"'"}effectue via l{"'"}API Shopify Billing. Les prix peuvent être consultés sur la page de tarification. Tous les prix s{"'"}entendent hors TVA.</p>
      <h2>4. Responsabilité</h2>
      <p>La responsabilité est limitée aux cas de préméditation et de négligence grave. Nous ne garantissons pas la qualité des designs créés ni leur adéquation à certains procédés de fabrication.</p>
      <h2>5. Résiliation</h2>
      <p>L{"'"}application peut être désinstallée à tout moment via l{"'"}App Store Shopify. En cas de désinstallation, toutes les données associées sont supprimées après 30 jours.</p>
      <h2>6. Droit applicable</h2>
      <p>Le droit allemand est applicable. Le tribunal compétent est Rosenheim.</p>
    </>
  ),
};

const es: LegalContent = {
  impressum: (
    <>
      <h1>Aviso legal</h1>
      <h2>Información según § 5 TMG</h2>
      <p>Valerian Huber<br />Empresa individual<br />Großkarolinenfeld, Alemania</p>
      <h2>Contacto</h2>
      <p>E-mail: <a href="mailto:help@etchify.app">help@etchify.app</a></p>
      <h2>Número de identificación fiscal</h2>
      <p>Número de identificación fiscal según § 27a UStG:<br />DE453549559</p>
      <h2>Responsable del contenido</h2>
      <p>Valerian Huber<br />Großkarolinenfeld, Alemania</p>
      <h2>Marca</h2>
      <p>Etchify es una marca de <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer">Alpin-Code</a> (alpin-code.de).</p>
    </>
  ),
  privacy: (
    <>
      <h1>Política de privacidad</h1>
      <p><strong>Última actualización:</strong> Marzo 2026</p>
      <h2>1. Responsable</h2>
      <p>Valerian Huber<br />Großkarolinenfeld, Alemania<br />E-mail: help@etchify.app</p>
      <h2>2. Datos recogidos</h2>
      <p>Cuando utiliza nuestra aplicación, se procesan los siguientes datos:</p>
      <ul>
        <li>Dominio de la tienda y datos de la tienda Shopify (para la funcionalidad de la aplicación)</li>
        <li>Datos de diseño (textos, imágenes, posiciones en el lienzo)</li>
        <li>Datos del pedido (si se realiza un pedido a través del configurador)</li>
        <li>Registros del servidor (dirección IP, fecha y hora, tipo de navegador)</li>
      </ul>
      <h2>3. Finalidad del tratamiento</h2>
      <p>Los datos se procesan exclusivamente para la provisión de la funcionalidad de la app Etchify (creación de diseños, exportación de archivos de producción, gestión de pedidos).</p>
      <h2>4. Almacenamiento</h2>
      <p>Los datos de diseño se almacenan en servidores de la UE (Supabase, Hetzner). Los enlaces de diseño compartidos tienen una validez de 30 días.</p>
      <h2>5. Sus derechos</h2>
      <p>Tiene derecho a la información, rectificación, supresión y limitación del tratamiento de sus datos. Contacte con nosotros en help@etchify.app.</p>
      <h2>6. Cookies</h2>
      <p>Etchify no utiliza cookies de seguimiento. Solo se utilizan las cookies técnicamente necesarias para la gestión de la sesión y la configuración del idioma.</p>
    </>
  ),
  terms: (
    <>
      <h1>Términos y condiciones</h1>
      <p><strong>Última actualización:</strong> Marzo 2026</p>
      <h2>1. Ámbito de aplicación</h2>
      <p>Estos términos y condiciones se aplican al uso de la aplicación Etchify Shopify, proporcionada por Valerian Huber, Großkarolinenfeld.</p>
      <h2>2. Descripción del servicio</h2>
      <p>Etchify ofrece un configurador de productos como aplicación Shopify. Los propietarios de las tiendas pueden configurar los productos y los clientes finales pueden crear diseños personalizados.</p>
      <h2>3. Precios y pago</h2>
      <p>La facturación se realiza a través de la API de facturación de Shopify. Los precios se pueden ver en la página de precios. Todos los precios están sujetos al IVA legal.</p>
      <h2>4. Responsabilidad</h2>
      <p>La responsabilidad se limita a dolo y negligencia grave. No asumimos responsabilidad por la calidad de los diseños creados ni por su idoneidad para determinados procesos de fabricación.</p>
      <h2>5. Cancelación</h2>
      <p>La aplicación se puede desinstalar en cualquier momento a través de Shopify App Store. Tras la desinstalación, todos los datos asociados se eliminarán transcurridos 30 días.</p>
      <h2>6. Legislación aplicable</h2>
      <p>Se aplica la legislación alemana. El lugar de jurisdicción es Rosenheim.</p>
    </>
  ),
};

const it: LegalContent = {
  impressum: (
    <>
      <h1>Note legali</h1>
      <h2>Informazioni ai sensi del § 5 TMG</h2>
      <p>Valerian Huber<br />Ditta individuale<br />Großkarolinenfeld, Germania</p>
      <h2>Contatto</h2>
      <p>E-mail: <a href="mailto:help@etchify.app">help@etchify.app</a></p>
      <h2>Partita IVA</h2>
      <p>Numero di identificazione IVA ai sensi del § 27a UStG:<br />DE453549559</p>
      <h2>Responsabile del contenuto</h2>
      <p>Valerian Huber<br />Großkarolinenfeld, Germania</p>
      <h2>Marchio</h2>
      <p>Etchify è un marchio di <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer">Alpin-Code</a> (alpin-code.de).</p>
    </>
  ),
  privacy: (
    <>
      <h1>Informativa sulla privacy</h1>
      <p><strong>Ultimo aggiornamento:</strong> Marzo 2026</p>
      <h2>1. Responsabile</h2>
      <p>Valerian Huber<br />Großkarolinenfeld, Germania<br />E-mail: help@etchify.app</p>
      <h2>2. Dati raccolti</h2>
      <p>Quando utilizzate la nostra app, vengono elaborati i seguenti dati:</p>
      <ul>
        <li>Dominio del negozio e dati del negozio Shopify (per la funzionalità dell{"'"}app)</li>
        <li>Dati di progettazione (testi, immagini, posizioni sulla tela)</li>
        <li>Dati dell{"'"}ordine (se l{"'"}ordine viene effettuato tramite il configuratore)</li>
        <li>Log del server (indirizzo IP, data e ora, tipo di browser)</li>
      </ul>
      <h2>3. Finalità del trattamento</h2>
      <p>I dati vengono trattati esclusivamente per la fornitura delle funzionalità dell{"'"}app Etchify (creazione del design, esportazione del file di produzione, gestione degli ordini).</p>
      <h2>4. Archiviazione</h2>
      <p>I dati di progettazione sono memorizzati su server nell{"'"}UE (Supabase, Hetzner). I link ai disegni condivisi hanno una validità di 30 giorni.</p>
      <h2>5. I vostri diritti</h2>
      <p>Avete diritto all{"'"}informazione, alla correzione, alla cancellazione e alla limitazione del trattamento dei vostri dati. Contattateci all{"'"}indirizzo help@etchify.app.</p>
      <h2>6. Cookies</h2>
      <p>Etchify non utilizza cookie di tracciamento. Vengono utilizzati solo i cookie tecnicamente necessari per la gestione della sessione e le impostazioni della lingua.</p>
    </>
  ),
  terms: (
    <>
      <h1>Termini e condizioni</h1>
      <p><strong>Ultimo aggiornamento:</strong> Marzo 2026</p>
      <h2>1. Ambito di applicazione</h2>
      <p>I presenti termini e condizioni si applicano all{"'"}utilizzo dell{"'"}applicazione Etchify Shopify, fornita da Valerian Huber, Großkarolinenfeld.</p>
      <h2>2. Descrizione del servizio</h2>
      <p>Etchify offre un configuratore di prodotti come applicazione Shopify. I proprietari dei negozi possono configurare i prodotti e i clienti finali possono creare design personalizzati.</p>
      <h2>3. Prezzi e pagamenti</h2>
      <p>La fatturazione avviene tramite l{"'"}API di fatturazione di Shopify. I prezzi possono essere visualizzati nella pagina dei prezzi. Tutti i prezzi sono soggetti a IVA.</p>
      <h2>4. Responsabilità</h2>
      <p>La responsabilità è limitata al dolo e alla colpa grave. Non ci assumiamo alcuna responsabilità per la qualità dei disegni creati e per la loro idoneità a determinati processi produttivi.</p>
      <h2>5. Cancellazione</h2>
      <p>L{"'"}applicazione può essere disinstallata in qualsiasi momento tramite lo Shopify App Store. Al momento della disinstallazione, tutti i dati associati saranno cancellati dopo 30 giorni.</p>
      <h2>6. Legge applicabile</h2>
      <p>Si applica il diritto tedesco. Il foro competente è Rosenheim.</p>
    </>
  ),
};

const legalContent: Record<Locale, LegalContent> = { de, en, fr, es, it };

export function getLegalContent(locale: Locale) {
  return legalContent[locale];
}
