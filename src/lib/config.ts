export const config = {
  company: {
    name: "Mustermann SHK GmbH",
    owner: "Max Mustermann",
    claim: "Ihr Meisterbetrieb für Sanitär, Heizung & Klima",
    foundedYear: 2005,
    phone: "0228 1234567",
    phoneEmergency: "0170 1234567",
    email: "info@mustermann-shk.de",
    address: { street: "Musterstraße 12", zip: "53111", city: "Bonn" },
    region: "Bonn und Umgebung",
    serviceRadius: "30km",
    openingHours: {
      weekdays: "Mo–Fr: 07:30–17:00 Uhr",
      saturday: "Sa: nach Vereinbarung",
      emergency: "24/7 erreichbar",
    },
  },
  colors: {
    // SHK Theme Colors
    primary: "#1a365d", // Dunkelblau
    primaryLight: "#2b5ea7",
    primaryLighter: "#e8f0fe",
    accent: "#d97706", // Amber
    accentLight: "#f59e0b",
  },
  seo: {
    title: "Mustermann SHK GmbH | Sanitär, Heizung & Klima in Bonn",
    description: "Ihr Meisterbetrieb für Sanitär, Heizung und Klima in Bonn und Umgebung. 24h Notdienst, Badsanierung und erneuerbare Energien.",
    keywords: ["SHK", "Sanitär", "Heizung", "Klima", "Badsanierung", "Notdienst", "Bonn"],
  },
  hero: {
    headline: "Ihre Heizung streikt? Wir sind in 60 Minuten bei Ihnen.",
    subline: "Seit 2005 Ihr verlässlicher Meisterbetrieb für Sanitär, Heizung & Klima in Bonn und Umgebung.",
    cta_primary: "Kostenlos Angebot anfragen",
    cta_secondary: "Notdienst anrufen"
  },
  features: {
    notdienst_banner: true,
    whatsapp_button: false,
    google_maps: false,
    analytics: false,
    cookie_consent: true,
    faq: true,
    galerie: true,
    team_sektion: false,
    blog: false,
  },
  socialProof: {
    googleRating: 4.8,
    googleReviewCount: 87,
    yearsExperience: 20,
    completedProjects: 2500,
    emergencyResponseMinutes: 60,
  },
  testimonials: [
    { text: "Schneller Notdienst am Wochenende! Das Team war in 45 Minuten da und hat unseren Rohrbruch professionell behoben. Absolut empfehlenswert!", name: "Familie K.", ort: "Bonn", sterne: 5, datum: "2025-01" },
    { text: "Unsere komplette Badsanierung wurde perfekt umgesetzt. Termintreu, sauber und das Ergebnis ist wunderschön.", name: "Herr S.", ort: "Bad Godesberg", sterne: 5, datum: "2024-11" },
    { text: "Faire Preise, kompetente Beratung und eine top Heizungsanlage. Wir sind rundum zufrieden.", name: "Frau M.", ort: "Beuel", sterne: 5, datum: "2024-09" },
    { text: "Von der Beratung bis zur Installation der Wärmepumpe – alles reibungslos. Die Förderung wurde gleich mit beantragt.", name: "Herr und Frau D.", ort: "Siegburg", sterne: 5, datum: "2025-02" }
  ],
  faqs: [
    { frage: "Was kostet eine Heizungswartung?", antwort: "Eine Standard-Heizungswartung kostet zwischen 120–180 € je nach Anlagentyp. Wir erstellen Ihnen vorab ein transparentes Angebot." },
    { frage: "Wie schnell sind Sie bei einem Notfall vor Ort?", antwort: "In unserem Einzugsgebiet sind wir in der Regel innerhalb von 60 Minuten bei Ihnen. Rufen Sie unseren Notdienst an: 0170 1234567." },
    { frage: "Bieten Sie kostenlose Angebote an?", antwort: "Ja, die Erstberatung und Angebotserstellung ist bei uns immer kostenlos und unverbindlich." },
    { frage: "Welche Förderungen gibt es für eine neue Heizung?", antwort: "Über die Bundesförderung für effiziente Gebäude (BEG) sind bis zu 70% Förderung möglich. Wir beraten Sie und übernehmen die Antragstellung." },
    { frage: "Wie lange dauert eine Badsanierung?", antwort: "Je nach Umfang rechnen Sie mit 2–4 Wochen. Bei der Erstberatung erstellen wir Ihnen einen realistischen Zeitplan." },
    { frage: "Sind Sie ein Innungsfachbetrieb?", antwort: "Ja, wir sind Mitglied der SHK-Innung und im Installateurverzeichnis eingetragen. Das bedeutet für Sie: geprüfte Qualifikation und regelmäßige Weiterbildung." }
  ],
  serviceLocations: [
    "Bonn", "Bad Godesberg", "Beuel", "Siegburg", "Troisdorf", "Sankt Augustin", "Königswinter", "Bornheim", "Alfter", "Meckenheim"
  ],
  navigation: [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Über uns", href: "/#ueber-uns" },
    { label: "Bewertungen", href: "/#bewertungen" },
    { label: "FAQ", href: "/#faq" },
    { label: "Kontakt", href: "/kontakt" },
  ],
};
