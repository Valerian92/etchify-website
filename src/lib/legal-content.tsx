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
      <p>Valerian Huber<br />Einzelunternehmen<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Deutschland</p>
      <h2>Kontakt</h2>
      <p>E-Mail: <a href="mailto:help@etchify.app">help@etchify.app</a></p>
      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />DE453549559</p>
      <h2>Verantwortlich für den Inhalt</h2>
      <p>Valerian Huber<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Deutschland</p>
      <h2>Marke</h2>
      <p>Etchify ist eine Marke von <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer">Alpin-Code</a> (alpin-code.de).</p>
    </>
  ),
  privacy: (
    <>
      <h1>Datenschutzerklärung</h1>
      <p><strong>Stand:</strong> März 2026</p>
      <h2>1. Verantwortlicher</h2>
      <p>Valerian Huber<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Deutschland<br />E-Mail: help@etchify.app</p>
      <h2>2. Rechtsgrundlagen</h2>
      <p>Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO:</p>
      <ul>
        <li><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> — Vertragserfüllung (App-Bereitstellung, Design-Erstellung, Bestellabwicklung)</li>
        <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> — Berechtigtes Interesse (Server-Logs, Sicherheit, Fehleranalyse)</li>
        <li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> — Einwilligung (Analytics, sofern zugestimmt)</li>
      </ul>
      <h2>3. Erhobene Daten</h2>
      <p>Bei der Nutzung unserer App werden folgende Daten verarbeitet:</p>
      <ul>
        <li>Shop-Domain und Shopify-Shop-Daten (für die App-Funktionalität)</li>
        <li>Design-Daten (Texte, Bilder, Positionen auf dem Canvas)</li>
        <li>Bestelldaten (sofern eine Bestellung über den Konfigurator erfolgt)</li>
        <li>Server-Logs (IP-Adresse, Zeitstempel, Browser-Typ)</li>
      </ul>
      <h2>4. Zweck der Verarbeitung</h2>
      <p>Die Daten werden ausschließlich zur Bereitstellung der Etchify-App-Funktionalität verarbeitet (Design-Erstellung, Produktionsdatei-Export, Bestellverwaltung).</p>
      <h2>5. Authentifizierung</h2>
      <p>Für die Anmeldung nutzen wir den Dienst <strong>Clerk</strong> (clerk.com). Bei der Registrierung oder Anmeldung (auch via Google OAuth) werden Ihre E-Mail-Adresse und Profilinformationen von Clerk verarbeitet. Clerk ist nach SOC 2 Typ II zertifiziert und nimmt am EU-US Data Privacy Framework teil.</p>
      <h2>6. Webanalyse (Google Analytics 4)</h2>
      <p>Diese Website nutzt Google Analytics 4 (GA4) zur Analyse der Websitenutzung. GA4 verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen. Die erzeugten Informationen werden an einen Server von Google in den USA übertragen. Wir nutzen die IP-Anonymisierung, sodass Ihre IP-Adresse gekürzt wird. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können die Erfassung durch Google Analytics verhindern, indem Sie Cookies in Ihrem Browser deaktivieren.</p>
      <h2>7. Speicherung</h2>
      <p>Design-Daten werden auf Servern in der EU gespeichert (Supabase, Hetzner). Geteilte Design-Links sind standardmäßig 30 Tage gültig.</p>
      <h2>8. Drittlandtransfers</h2>
      <p>Einige unserer Dienstleister verarbeiten Daten in den USA:</p>
      <ul>
        <li><strong>Vercel</strong> (Website-Hosting) — EU-US Data Privacy Framework</li>
        <li><strong>Clerk</strong> (Authentifizierung) — EU-US Data Privacy Framework, SOC 2 Typ II</li>
        <li><strong>Google</strong> (Analytics) — EU-US Data Privacy Framework</li>
      </ul>
      <p>Alle genannten Anbieter sind unter dem EU-US Data Privacy Framework zertifiziert, das ein angemessenes Datenschutzniveau gewährleistet.</p>
      <h2>9. Ihre Rechte</h2>
      <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten. Kontaktieren Sie uns unter help@etchify.app.</p>
      <h2>10. Cookies</h2>
      <p>Etchify verwendet technisch notwendige Cookies für die Session-Verwaltung, Spracheinstellungen und Authentifizierung. Darüber hinaus setzt Google Analytics Analyse-Cookies ein (siehe Abschnitt 6).</p>
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
      <p>Valerian Huber<br />Sole proprietorship<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Germany</p>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:help@etchify.app">help@etchify.app</a></p>
      <h2>VAT ID</h2>
      <p>VAT identification number according to § 27a UStG:<br />DE453549559</p>
      <h2>Responsible for content</h2>
      <p>Valerian Huber<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Germany</p>
      <h2>Brand</h2>
      <p>Etchify is a brand of <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer">Alpin-Code</a> (alpin-code.de).</p>
    </>
  ),
  privacy: (
    <>
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> March 2026</p>
      <h2>1. Data Controller</h2>
      <p>Valerian Huber<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Germany<br />Email: help@etchify.app</p>
      <h2>2. Legal Basis</h2>
      <p>Personal data is processed on the basis of Art. 6 GDPR:</p>
      <ul>
        <li><strong>Art. 6(1)(b) GDPR</strong> — Performance of contract (app provision, design creation, order processing)</li>
        <li><strong>Art. 6(1)(f) GDPR</strong> — Legitimate interest (server logs, security, error analysis)</li>
        <li><strong>Art. 6(1)(a) GDPR</strong> — Consent (analytics, where applicable)</li>
      </ul>
      <h2>3. Data Collected</h2>
      <p>The following data is processed when you use our app:</p>
      <ul>
        <li>Store domain and Shopify store data (for app functionality)</li>
        <li>Design data (texts, images, positions on the canvas)</li>
        <li>Order data (if an order is placed via the configurator)</li>
        <li>Server logs (IP address, timestamp, browser type)</li>
      </ul>
      <h2>4. Purpose of Processing</h2>
      <p>The data is processed exclusively for the provision of the Etchify app functionality (design creation, production file export, order management).</p>
      <h2>5. Authentication</h2>
      <p>We use <strong>Clerk</strong> (clerk.com) for sign-in and registration. When you sign up or log in (including via Google OAuth), your email address and profile information are processed by Clerk. Clerk is SOC 2 Type II certified and participates in the EU-US Data Privacy Framework.</p>
      <h2>6. Web Analytics (Google Analytics 4)</h2>
      <p>This website uses Google Analytics 4 (GA4) to analyse website usage. GA4 uses cookies that enable analysis of your use of the website. The information generated is transferred to a Google server in the USA. We use IP anonymisation so that your IP address is truncated. The legal basis is Art. 6(1)(a) GDPR (consent). You can prevent collection by Google Analytics by disabling cookies in your browser.</p>
      <h2>7. Storage</h2>
      <p>Design data is stored on servers in the EU (Supabase, Hetzner). Shared design links are valid for 30 days by default.</p>
      <h2>8. International Data Transfers</h2>
      <p>Some of our service providers process data in the USA:</p>
      <ul>
        <li><strong>Vercel</strong> (website hosting) — EU-US Data Privacy Framework</li>
        <li><strong>Clerk</strong> (authentication) — EU-US Data Privacy Framework, SOC 2 Type II</li>
        <li><strong>Google</strong> (analytics) — EU-US Data Privacy Framework</li>
      </ul>
      <p>All providers listed are certified under the EU-US Data Privacy Framework, which ensures an adequate level of data protection.</p>
      <h2>9. Your Rights</h2>
      <p>You have the right to information, correction, deletion and restriction of the processing of your data. Contact us at help@etchify.app.</p>
      <h2>10. Cookies</h2>
      <p>Etchify uses technically necessary cookies for session management, language settings and authentication. In addition, Google Analytics sets analytics cookies (see section 6).</p>
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
      <p>Valerian Huber<br />Entreprise individuelle<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Allemagne</p>
      <h2>Contact</h2>
      <p>E-mail : <a href="mailto:help@etchify.app">help@etchify.app</a></p>
      <h2>Numéro de TVA</h2>
      <p>Numéro d{"'"}identification TVA conformément au § 27a UStG :<br />DE453549559</p>
      <h2>Responsable du contenu</h2>
      <p>Valerian Huber<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Allemagne</p>
      <h2>Marque</h2>
      <p>Etchify est une marque de <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer">Alpin-Code</a> (alpin-code.de).</p>
    </>
  ),
  privacy: (
    <>
      <h1>Politique de confidentialité</h1>
      <p><strong>Dernière mise à jour :</strong> Mars 2026</p>
      <h2>1. Responsable</h2>
      <p>Valerian Huber<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Allemagne<br />E-mail : help@etchify.app</p>
      <h2>2. Bases juridiques</h2>
      <p>Le traitement des données personnelles est fondé sur l{"'"}art. 6 du RGPD :</p>
      <ul>
        <li><strong>Art. 6(1)(b) RGPD</strong> — Exécution du contrat (fourniture de l{"'"}application, création de designs, traitement des commandes)</li>
        <li><strong>Art. 6(1)(f) RGPD</strong> — Intérêt légitime (journaux serveur, sécurité, analyse des erreurs)</li>
        <li><strong>Art. 6(1)(a) RGPD</strong> — Consentement (analytics, le cas échéant)</li>
      </ul>
      <h2>3. Données collectées</h2>
      <p>Lors de l{"'"}utilisation de notre application, les données suivantes sont traitées :</p>
      <ul>
        <li>Domaine de la boutique et données de la boutique Shopify (pour la fonctionnalité de l{"'"}app)</li>
        <li>Données de conception (textes, images, positions sur le canevas)</li>
        <li>Données de commande (si une commande est effectuée via le configurateur)</li>
        <li>Journaux du serveur (adresse IP, horodatage, type de navigateur)</li>
      </ul>
      <h2>4. Finalité du traitement</h2>
      <p>Les données sont traitées exclusivement pour fournir les fonctionnalités de l{"'"}application Etchify (création de design, exportation de fichiers de production, gestion des commandes).</p>
      <h2>5. Authentification</h2>
      <p>Nous utilisons <strong>Clerk</strong> (clerk.com) pour la connexion et l{"'"}inscription. Lors de votre inscription ou connexion (y compris via Google OAuth), votre adresse e-mail et vos informations de profil sont traitées par Clerk. Clerk est certifié SOC 2 Type II et participe au EU-US Data Privacy Framework.</p>
      <h2>6. Analyse web (Google Analytics 4)</h2>
      <p>Ce site utilise Google Analytics 4 (GA4) pour analyser l{"'"}utilisation du site. GA4 utilise des cookies qui permettent d{"'"}analyser votre utilisation du site. Les informations générées sont transférées à un serveur Google aux États-Unis. Nous utilisons l{"'"}anonymisation des IP. La base juridique est l{"'"}art. 6(1)(a) RGPD (consentement). Vous pouvez empêcher la collecte par Google Analytics en désactivant les cookies dans votre navigateur.</p>
      <h2>7. Stockage</h2>
      <p>Les données de design sont stockées sur des serveurs situés dans l{"'"}UE (Supabase, Hetzner). Les liens de design partagés sont valables 30 jours par défaut.</p>
      <h2>8. Transferts internationaux</h2>
      <p>Certains de nos prestataires traitent des données aux États-Unis :</p>
      <ul>
        <li><strong>Vercel</strong> (hébergement) — EU-US Data Privacy Framework</li>
        <li><strong>Clerk</strong> (authentification) — EU-US Data Privacy Framework, SOC 2 Type II</li>
        <li><strong>Google</strong> (analytics) — EU-US Data Privacy Framework</li>
      </ul>
      <p>Tous les prestataires mentionnés sont certifiés dans le cadre du EU-US Data Privacy Framework, garantissant un niveau de protection des données adéquat.</p>
      <h2>9. Vos droits</h2>
      <p>Vous avez un droit d{"'"}accès, de rectification, d{"'"}effacement et de limitation du traitement de vos données. Contactez-nous à l{"'"}adresse help@etchify.app.</p>
      <h2>10. Cookies</h2>
      <p>Etchify utilise des cookies techniquement nécessaires pour la gestion de la session, les paramètres de langue et l{"'"}authentification. De plus, Google Analytics utilise des cookies d{"'"}analyse (voir section 6).</p>
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
      <p>Valerian Huber<br />Empresa individual<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Alemania</p>
      <h2>Contacto</h2>
      <p>E-mail: <a href="mailto:help@etchify.app">help@etchify.app</a></p>
      <h2>Número de identificación fiscal</h2>
      <p>Número de identificación fiscal según § 27a UStG:<br />DE453549559</p>
      <h2>Responsable del contenido</h2>
      <p>Valerian Huber<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Alemania</p>
      <h2>Marca</h2>
      <p>Etchify es una marca de <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer">Alpin-Code</a> (alpin-code.de).</p>
    </>
  ),
  privacy: (
    <>
      <h1>Política de privacidad</h1>
      <p><strong>Última actualización:</strong> Marzo 2026</p>
      <h2>1. Responsable</h2>
      <p>Valerian Huber<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Alemania<br />E-mail: help@etchify.app</p>
      <h2>2. Bases jurídicas</h2>
      <p>El tratamiento de datos personales se basa en el art. 6 del RGPD:</p>
      <ul>
        <li><strong>Art. 6(1)(b) RGPD</strong> — Ejecución del contrato (provisión de la aplicación, creación de diseños, procesamiento de pedidos)</li>
        <li><strong>Art. 6(1)(f) RGPD</strong> — Interés legítimo (registros del servidor, seguridad, análisis de errores)</li>
        <li><strong>Art. 6(1)(a) RGPD</strong> — Consentimiento (analytics, cuando proceda)</li>
      </ul>
      <h2>3. Datos recogidos</h2>
      <p>Cuando utiliza nuestra aplicación, se procesan los siguientes datos:</p>
      <ul>
        <li>Dominio de la tienda y datos de la tienda Shopify (para la funcionalidad de la aplicación)</li>
        <li>Datos de diseño (textos, imágenes, posiciones en el lienzo)</li>
        <li>Datos del pedido (si se realiza un pedido a través del configurador)</li>
        <li>Registros del servidor (dirección IP, fecha y hora, tipo de navegador)</li>
      </ul>
      <h2>4. Finalidad del tratamiento</h2>
      <p>Los datos se procesan exclusivamente para la provisión de la funcionalidad de la app Etchify (creación de diseños, exportación de archivos de producción, gestión de pedidos).</p>
      <h2>5. Autenticación</h2>
      <p>Utilizamos <strong>Clerk</strong> (clerk.com) para el inicio de sesión y registro. Al registrarse o iniciar sesión (incluido a través de Google OAuth), su dirección de correo electrónico e información de perfil son procesadas por Clerk. Clerk cuenta con la certificación SOC 2 Tipo II y participa en el EU-US Data Privacy Framework.</p>
      <h2>6. Análisis web (Google Analytics 4)</h2>
      <p>Este sitio web utiliza Google Analytics 4 (GA4) para analizar el uso del sitio. GA4 utiliza cookies que permiten analizar su uso del sitio web. La información generada se transfiere a un servidor de Google en EE.UU. Utilizamos la anonimización de IP. La base jurídica es el art. 6(1)(a) RGPD (consentimiento). Puede impedir la recopilación por Google Analytics desactivando las cookies en su navegador.</p>
      <h2>7. Almacenamiento</h2>
      <p>Los datos de diseño se almacenan en servidores de la UE (Supabase, Hetzner). Los enlaces de diseño compartidos tienen una validez de 30 días.</p>
      <h2>8. Transferencias internacionales</h2>
      <p>Algunos de nuestros proveedores procesan datos en EE.UU.:</p>
      <ul>
        <li><strong>Vercel</strong> (alojamiento web) — EU-US Data Privacy Framework</li>
        <li><strong>Clerk</strong> (autenticación) — EU-US Data Privacy Framework, SOC 2 Tipo II</li>
        <li><strong>Google</strong> (analytics) — EU-US Data Privacy Framework</li>
      </ul>
      <p>Todos los proveedores mencionados están certificados en el EU-US Data Privacy Framework, lo que garantiza un nivel adecuado de protección de datos.</p>
      <h2>9. Sus derechos</h2>
      <p>Tiene derecho a la información, rectificación, supresión y limitación del tratamiento de sus datos. Contacte con nosotros en help@etchify.app.</p>
      <h2>10. Cookies</h2>
      <p>Etchify utiliza cookies técnicamente necesarias para la gestión de la sesión, la configuración del idioma y la autenticación. Además, Google Analytics utiliza cookies de análisis (véase la sección 6).</p>
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
      <p>Valerian Huber<br />Ditta individuale<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Germania</p>
      <h2>Contatto</h2>
      <p>E-mail: <a href="mailto:help@etchify.app">help@etchify.app</a></p>
      <h2>Partita IVA</h2>
      <p>Numero di identificazione IVA ai sensi del § 27a UStG:<br />DE453549559</p>
      <h2>Responsabile del contenuto</h2>
      <p>Valerian Huber<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Germania</p>
      <h2>Marchio</h2>
      <p>Etchify è un marchio di <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer">Alpin-Code</a> (alpin-code.de).</p>
    </>
  ),
  privacy: (
    <>
      <h1>Informativa sulla privacy</h1>
      <p><strong>Ultimo aggiornamento:</strong> Marzo 2026</p>
      <h2>1. Responsabile</h2>
      <p>Valerian Huber<br />Dahlienweg 11<br />83109 Großkarolinenfeld, Germania<br />E-mail: help@etchify.app</p>
      <h2>2. Basi giuridiche</h2>
      <p>Il trattamento dei dati personali si basa sull{"'"}art. 6 del GDPR:</p>
      <ul>
        <li><strong>Art. 6(1)(b) GDPR</strong> — Esecuzione del contratto (fornitura dell{"'"}app, creazione di design, elaborazione degli ordini)</li>
        <li><strong>Art. 6(1)(f) GDPR</strong> — Interesse legittimo (log del server, sicurezza, analisi degli errori)</li>
        <li><strong>Art. 6(1)(a) GDPR</strong> — Consenso (analytics, ove applicabile)</li>
      </ul>
      <h2>3. Dati raccolti</h2>
      <p>Quando utilizzate la nostra app, vengono elaborati i seguenti dati:</p>
      <ul>
        <li>Dominio del negozio e dati del negozio Shopify (per la funzionalità dell{"'"}app)</li>
        <li>Dati di progettazione (testi, immagini, posizioni sulla tela)</li>
        <li>Dati dell{"'"}ordine (se l{"'"}ordine viene effettuato tramite il configuratore)</li>
        <li>Log del server (indirizzo IP, data e ora, tipo di browser)</li>
      </ul>
      <h2>4. Finalità del trattamento</h2>
      <p>I dati vengono trattati esclusivamente per la fornitura delle funzionalità dell{"'"}app Etchify (creazione del design, esportazione del file di produzione, gestione degli ordini).</p>
      <h2>5. Autenticazione</h2>
      <p>Utilizziamo <strong>Clerk</strong> (clerk.com) per l{"'"}accesso e la registrazione. Al momento della registrazione o dell{"'"}accesso (anche tramite Google OAuth), il vostro indirizzo e-mail e le informazioni del profilo vengono elaborati da Clerk. Clerk è certificato SOC 2 Tipo II e partecipa al EU-US Data Privacy Framework.</p>
      <h2>6. Analisi web (Google Analytics 4)</h2>
      <p>Questo sito utilizza Google Analytics 4 (GA4) per analizzare l{"'"}utilizzo del sito. GA4 utilizza cookie che consentono di analizzare l{"'"}utilizzo del sito web. Le informazioni generate vengono trasferite a un server di Google negli USA. Utilizziamo l{"'"}anonimizzazione degli IP. La base giuridica è l{"'"}art. 6(1)(a) GDPR (consenso). Potete impedire la raccolta da parte di Google Analytics disattivando i cookie nel vostro browser.</p>
      <h2>7. Archiviazione</h2>
      <p>I dati di progettazione sono memorizzati su server nell{"'"}UE (Supabase, Hetzner). I link ai disegni condivisi hanno una validità di 30 giorni.</p>
      <h2>8. Trasferimenti internazionali</h2>
      <p>Alcuni dei nostri fornitori di servizi trattano dati negli USA:</p>
      <ul>
        <li><strong>Vercel</strong> (hosting del sito) — EU-US Data Privacy Framework</li>
        <li><strong>Clerk</strong> (autenticazione) — EU-US Data Privacy Framework, SOC 2 Tipo II</li>
        <li><strong>Google</strong> (analytics) — EU-US Data Privacy Framework</li>
      </ul>
      <p>Tutti i fornitori menzionati sono certificati nell{"'"}ambito del EU-US Data Privacy Framework, che garantisce un livello adeguato di protezione dei dati.</p>
      <h2>9. I vostri diritti</h2>
      <p>Avete diritto all{"'"}informazione, alla correzione, alla cancellazione e alla limitazione del trattamento dei vostri dati. Contattateci all{"'"}indirizzo help@etchify.app.</p>
      <h2>10. Cookies</h2>
      <p>Etchify utilizza cookie tecnicamente necessari per la gestione della sessione, le impostazioni della lingua e l{"'"}autenticazione. Inoltre, Google Analytics utilizza cookie di analisi (vedi sezione 6).</p>
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
