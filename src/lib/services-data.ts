export type ServiceData = {
  slug: string;
  titel: string;
  icon: string;
  kurz: string;
  beschreibung: string;
  kundenprobleme: string[];
  vorteile: { titel: string; text: string }[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string[];
};

export const services: ServiceData[] = [
  {
    slug: "heizung",
    titel: "Heizung",
    icon: "Flame",
    kurz: "Installation, Wartung & Modernisierung",
    beschreibung: "Von der Gasbrennwerttherme bis zur Wärmepumpe – wir planen, installieren und warten Ihre Heizungsanlage. Inklusive Förderberatung.",
    kundenprobleme: [
      "Ihre Heizung wird nicht mehr richtig warm?",
      "Die Energiekosten steigen jedes Jahr?",
      "Sie möchten auf eine klimafreundliche Heizung umsteigen?",
    ],
    vorteile: [
      { titel: "Alle Heizsysteme", text: "Gas, Öl, Wärmepumpe, Pellets, Solar – wir beraten herstellerunabhängig." },
      { titel: "Förderung sichern", text: "Wir übernehmen die komplette Förderantragsstellung für Sie." },
      { titel: "Festpreisgarantie", text: "Sie erhalten ein verbindliches Angebot ohne versteckte Kosten." },
    ],
    seo_title: "Heizung installieren & modernisieren in {stadt}",
    seo_description: "Heizungsinstallation und Heizungsmodernisierung in {region}. Wärmepumpe, Gas, Pellets – mit Förderberatung. Jetzt Angebot anfragen.",
    seo_keywords: ["Heizung installieren {stadt}", "Heizungsmodernisierung {region}", "Wärmepumpe {stadt}"],
  },
  {
    slug: "sanitaer",
    titel: "Sanitär & Bad",
    icon: "ShowerHead",
    kurz: "Badsanierung, Sanitärinstallation & barrierefreie Bäder",
    beschreibung: "Vom kleinen Reparaturauftrag bis zur kompletten Badsanierung – wir gestalten Ihr Traumbad mit Präzision und Leidenschaft.",
    kundenprobleme: [
      "Ihr Bad ist in die Jahre gekommen?",
      "Sie benötigen eine barrierefreie Lösung?",
      "Der Wasserhahn tropft seit Wochen?",
    ],
    vorteile: [
      { titel: "Alles aus einer Hand", text: "Planung, Demontage, Installation und Fliesenarbeiten – ein Ansprechpartner." },
      { titel: "3D-Badplanung", text: "Sehen Sie Ihr neues Bad, bevor wir anfangen." },
      { titel: "Barrierefrei", text: "Zertifizierte Planung für altersgerechtes Wohnen." },
    ],
    seo_title: "Badsanierung & Sanitärinstallation in {stadt}",
    seo_description: "Professionelle Badsanierung in {region}. Komplettbäder, barrierefreie Umbauten, Sanitärreparaturen. Meisterbetrieb – jetzt beraten lassen.",
    seo_keywords: ["Badsanierung {stadt}", "Sanitär {region}", "barrierefreies Bad {stadt}"],
  },
  {
    slug: "gas",
    titel: "Gas-Installation",
    icon: "Zap",
    kurz: "Gasleitungen, Gasthermen & Sicherheitsprüfungen",
    beschreibung: "Als eingetragener Installateur im Gasinstallateurverzeichnis führen wir alle Arbeiten an Gasleitungen und Gasgeräten fachgerecht durch.",
    kundenprobleme: [
      "Ihre Gastherme muss getauscht werden?",
      "Sie brauchen eine Gasleitungsprüfung?",
      "Der Gasverbrauch erscheint Ihnen zu hoch?",
    ],
    vorteile: [
      { titel: "Konzessioniert", text: "Eingetragen im Installateurverzeichnis des lokalen Gasversorgers." },
      { titel: "Sicherheit zuerst", text: "Druckprüfung und Dichtheitskontrolle nach TRGI." },
      { titel: "Schnelle Hilfe", text: "Bei Gasgeruch: Notdienst innerhalb von 60 Minuten." },
    ],
    seo_title: "Gas-Installation & Gasthermen-Service in {stadt}",
    seo_description: "Gasinstallation, Gasthermen-Wartung und Gasleitungsprüfung in {region}. Konzessionierter Meisterbetrieb. 24h Notdienst.",
    seo_keywords: ["Gasinstallateur {stadt}", "Gastherme {region}", "Gasleitungsprüfung {stadt}"],
  },
  {
    slug: "notdienst",
    titel: "Notdienst",
    icon: "Siren",
    kurz: "24/7 Soforthilfe bei Rohrbruch, Heizungsausfall & Gasgeruch",
    beschreibung: "Rohrbruch um 3 Uhr nachts? Heizungsausfall am Wochenende? Unser Notdienst ist 365 Tage im Jahr für Sie erreichbar.",
    kundenprobleme: [
      "Wasserrohrbruch – es läuft Wasser in die Wohnung?",
      "Die Heizung fällt mitten im Winter aus?",
      "Sie riechen Gas in Ihrer Wohnung?",
    ],
    vorteile: [
      { titel: "< 60 Min.", text: "Durchschnittliche Anfahrtszeit in unserem Einzugsgebiet." },
      { titel: "Faire Preise", text: "Transparente Notdienst-Pauschale ohne versteckte Zuschläge." },
      { titel: "Erfahrene Monteure", text: "Nur ausgebildete Fachkräfte – keine Subunternehmer." },
    ],
    seo_title: "SHK Notdienst 24/7 in {stadt} – Rohrbruch, Heizung, Gas",
    seo_description: "24h SHK-Notdienst in {region}. Schnelle Hilfe bei Rohrbruch, Heizungsausfall und Gasgeruch. In unter 60 Minuten vor Ort.",
    seo_keywords: ["SHK Notdienst {stadt}", "Rohrbruch Notdienst {region}", "Heizung Notdienst {stadt}"],
  },
  {
    slug: "erneuerbare-energien",
    titel: "Erneuerbare Energien",
    icon: "Sun",
    kurz: "Wärmepumpen, Solar & Förderberatung",
    beschreibung: "Die Energiewende beginnt im Heizungskeller. Wir beraten Sie herstellerunabhängig zu Wärmepumpen, Solarthermie und Photovoltaik-Heizlösungen.",
    kundenprobleme: [
      "Sie möchten weg von Gas und Öl?",
      "Welche Förderung steht Ihnen zu?",
      "Ist eine Wärmepumpe für Ihr Haus geeignet?",
    ],
    vorteile: [
      { titel: "Bis 70% Förderung", text: "Wir maximieren Ihre BEG-Förderung und übernehmen die Antragstellung." },
      { titel: "Herstellerunabhängig", text: "Wir empfehlen die beste Lösung für Ihr Gebäude, nicht für unsere Marge." },
      { titel: "Rundum-Service", text: "Von der Energieberatung bis zur Inbetriebnahme – ein Partner." },
    ],
    seo_title: "Wärmepumpe & erneuerbare Energien in {stadt}",
    seo_description: "Wärmepumpen-Installation in {region}. Herstellerunabhängige Beratung, Förderanträge inklusive. Meisterbetrieb mit Erfahrung.",
    seo_keywords: ["Wärmepumpe {stadt}", "erneuerbare Energien {region}", "Förderung Heizung {stadt}"],
  },
];
