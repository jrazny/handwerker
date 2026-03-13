# 🔧 Branchen-Konfiguration

> **Dies ist die EINZIGE Datei, die du pro Branche anpassen musst.**
> Alles andere (Design, Struktur, Animationen, Technik) wird automatisch aus den anderen Dateien übernommen.

---

## Branche

**Typ:** SHK (Sanitär, Heizung, Klima) / Gas- & Wasserinstallateur

---

## Firmendaten

```yaml
firmenname: "Mustermann SHK GmbH"
inhaber: "Max Mustermann"
rechtsform: "GmbH"
claim: "Ihr Meisterbetrieb für Sanitär, Heizung & Klima"
gruendungsjahr: 2005
meisterbetrieb: true
innungsmitglied: true
handwerkskammer: "HWK Köln"
```

## Kontakt

```yaml
telefon: "0228 1234567"
telefon_notdienst: "0170 1234567"
email: "info@mustermann-shk.de"
website: "www.mustermann-shk.de"
strasse: "Musterstraße 12"
plz: "53111"
stadt: "Bonn"
region: "Bonn und Umgebung"
service_radius: "30km"
oeffnungszeiten:
  werktags: "Mo–Fr: 07:30–17:00 Uhr"
  samstag: "Sa: nach Vereinbarung"
  notdienst: "24/7 erreichbar"
```

## Leistungen

> Definiere hier die 4–6 Kernleistungen des Betriebs.
> Jede Leistung bekommt eine eigene Unterseite.

```yaml
leistungen:
  - slug: "heizung"
    titel: "Heizung"
    icon: "Flame"                    # Lucide Icon Name
    kurz: "Installation, Wartung & Modernisierung"
    beschreibung: "Von der Gasbrennwerttherme bis zur Wärmepumpe – wir planen, installieren und warten Ihre Heizungsanlage. Inklusive Förderberatung."
    kundenprobleme:
      - "Ihre Heizung wird nicht mehr richtig warm?"
      - "Die Energiekosten steigen jedes Jahr?"
      - "Sie möchten auf eine klimafreundliche Heizung umsteigen?"
    vorteile:
      - titel: "Alle Heizsysteme"
        text: "Gas, Öl, Wärmepumpe, Pellets, Solar – wir beraten herstellerunabhängig."
      - titel: "Förderung sichern"
        text: "Wir übernehmen die komplette Förderantragsstellung für Sie."
      - titel: "Festpreisgarantie"
        text: "Sie erhalten ein verbindliches Angebot ohne versteckte Kosten."
    seo_title: "Heizung installieren & modernisieren in {stadt}"
    seo_description: "Heizungsinstallation und Heizungsmodernisierung in {region}. Wärmepumpe, Gas, Pellets – mit Förderberatung. Jetzt Angebot anfragen."
    seo_keywords: ["Heizung installieren {stadt}", "Heizungsmodernisierung {region}", "Wärmepumpe {stadt}"]

  - slug: "sanitaer"
    titel: "Sanitär & Bad"
    icon: "ShowerHead"
    kurz: "Badsanierung, Sanitärinstallation & barrierefreie Bäder"
    beschreibung: "Vom kleinen Reparaturauftrag bis zur kompletten Badsanierung – wir gestalten Ihr Traumbad mit Präzision und Leidenschaft."
    kundenprobleme:
      - "Ihr Bad ist in die Jahre gekommen?"
      - "Sie benötigen eine barrierefreie Lösung?"
      - "Der Wasserhahn tropft seit Wochen?"
    vorteile:
      - titel: "Alles aus einer Hand"
        text: "Planung, Demontage, Installation und Fliesenarbeiten – ein Ansprechpartner."
      - titel: "3D-Badplanung"
        text: "Sehen Sie Ihr neues Bad, bevor wir anfangen."
      - titel: "Barrierefrei"
        text: "Zertifizierte Planung für altersgerechtes Wohnen."
    seo_title: "Badsanierung & Sanitärinstallation in {stadt}"
    seo_description: "Professionelle Badsanierung in {region}. Komplettbäder, barrierefreie Umbauten, Sanitärreparaturen. Meisterbetrieb – jetzt beraten lassen."
    seo_keywords: ["Badsanierung {stadt}", "Sanitär {region}", "barrierefreies Bad {stadt}"]

  - slug: "gas"
    titel: "Gas-Installation"
    icon: "Zap"
    kurz: "Gasleitungen, Gasthermen & Sicherheitsprüfungen"
    beschreibung: "Als eingetragener Installateur im Gasinstallateurverzeichnis führen wir alle Arbeiten an Gasleitungen und Gasgeräten fachgerecht durch."
    kundenprobleme:
      - "Ihre Gastherme muss getauscht werden?"
      - "Sie brauchen eine Gasleitungsprüfung?"
      - "Der Gasverbrauch erscheint Ihnen zu hoch?"
    vorteile:
      - titel: "Konzessioniert"
        text: "Eingetragen im Installateurverzeichnis des lokalen Gasversorgers."
      - titel: "Sicherheit zuerst"
        text: "Druckprüfung und Dichtheitskontrolle nach TRGI."
      - titel: "Schnelle Hilfe"
        text: "Bei Gasgeruch: Notdienst innerhalb von 60 Minuten."
    seo_title: "Gas-Installation & Gasthermen-Service in {stadt}"
    seo_description: "Gasinstallation, Gasthermen-Wartung und Gasleitungsprüfung in {region}. Konzessionierter Meisterbetrieb. 24h Notdienst."
    seo_keywords: ["Gasinstallateur {stadt}", "Gastherme {region}", "Gasleitungsprüfung {stadt}"]

  - slug: "notdienst"
    titel: "Notdienst"
    icon: "Siren"
    kurz: "24/7 Soforthilfe bei Rohrbruch, Heizungsausfall & Gasgeruch"
    beschreibung: "Rohrbruch um 3 Uhr nachts? Heizungsausfall am Wochenende? Unser Notdienst ist 365 Tage im Jahr für Sie erreichbar."
    kundenprobleme:
      - "Wasserrohrbruch – es läuft Wasser in die Wohnung?"
      - "Die Heizung fällt mitten im Winter aus?"
      - "Sie riechen Gas in Ihrer Wohnung?"
    vorteile:
      - titel: "< 60 Min."
        text: "Durchschnittliche Anfahrtszeit in unserem Einzugsgebiet."
      - titel: "Faire Preise"
        text: "Transparente Notdienst-Pauschale ohne versteckte Zuschläge."
      - titel: "Erfahrene Monteure"
        text: "Nur ausgebildete Fachkräfte – keine Subunternehmer."
    seo_title: "SHK Notdienst 24/7 in {stadt} – Rohrbruch, Heizung, Gas"
    seo_description: "24h SHK-Notdienst in {region}. Schnelle Hilfe bei Rohrbruch, Heizungsausfall und Gasgeruch. In unter 60 Minuten vor Ort."
    seo_keywords: ["SHK Notdienst {stadt}", "Rohrbruch Notdienst {region}", "Heizung Notdienst {stadt}"]

  - slug: "erneuerbare-energien"
    titel: "Erneuerbare Energien"
    icon: "Sun"
    kurz: "Wärmepumpen, Solar & Förderberatung"
    beschreibung: "Die Energiewende beginnt im Heizungskeller. Wir beraten Sie herstellerunabhängig zu Wärmepumpen, Solarthermie und Photovoltaik-Heizlösungen."
    kundenprobleme:
      - "Sie möchten weg von Gas und Öl?"
      - "Welche Förderung steht Ihnen zu?"
      - "Ist eine Wärmepumpe für Ihr Haus geeignet?"
    vorteile:
      - titel: "Bis 70% Förderung"
        text: "Wir maximieren Ihre BEG-Förderung und übernehmen die Antragstellung."
      - titel: "Herstellerunabhängig"
        text: "Wir empfehlen die beste Lösung für Ihr Gebäude, nicht für unsere Marge."
      - titel: "Rundum-Service"
        text: "Von der Energieberatung bis zur Inbetriebnahme – ein Partner."
    seo_title: "Wärmepumpe & erneuerbare Energien in {stadt}"
    seo_description: "Wärmepumpen-Installation in {region}. Herstellerunabhängige Beratung, Förderanträge inklusive. Meisterbetrieb mit Erfahrung."
    seo_keywords: ["Wärmepumpe {stadt}", "erneuerbare Energien {region}", "Förderung Heizung {stadt}"]
```

## Social Proof & Zahlen

```yaml
google_bewertung: 4.8
google_anzahl: 87
jahre_erfahrung: 20
abgeschlossene_projekte: 2500
reaktionszeit_minuten: 60
mitarbeiter: 12
```

## Platzhalter-Bewertungen

> Ersetze diese mit echten Kundenbewertungen

```yaml
bewertungen:
  - text: "Schneller Notdienst am Wochenende! Das Team war in 45 Minuten da und hat unseren Rohrbruch professionell behoben. Absolut empfehlenswert!"
    name: "Familie K."
    ort: "Bonn"
    sterne: 5
    datum: "2025-01"

  - text: "Unsere komplette Badsanierung wurde perfekt umgesetzt. Termintreu, sauber und das Ergebnis ist wunderschön."
    name: "Herr S."
    ort: "Bad Godesberg"
    sterne: 5
    datum: "2024-11"

  - text: "Faire Preise, kompetente Beratung und eine top Heizungsanlage. Wir sind rundum zufrieden."
    name: "Frau M."
    ort: "Beuel"
    sterne: 5
    datum: "2024-09"

  - text: "Von der Beratung bis zur Installation der Wärmepumpe – alles reibungslos. Die Förderung wurde gleich mit beantragt."
    name: "Herr und Frau D."
    ort: "Siegburg"
    sterne: 5
    datum: "2025-02"
```

## Lead Magnet

> Wähle EINEN Lead Magnet, der zur Branche passt.

```yaml
lead_magnet:
  typ: "checklist"                   # "checklist" | "calculator" | "planner" | "funding" | "none"
  titel: "Gratis Heizungs-Check"
  untertitel: "10 Punkte, die Sie jetzt prüfen sollten – und bares Geld sparen"
  cta: "Checkliste herunterladen"
  beschreibung: "Finden Sie in 5 Minuten heraus, ob Ihre Heizung noch effizient arbeitet."
```

## Features (ein/aus)

```yaml
features:
  notdienst_banner: true
  whatsapp_button: false
  whatsapp_nummer: ""                 # Format: "491701234567"
  google_maps: false
  google_maps_key: ""
  analytics: false
  analytics_id: ""                    # Format: "G-XXXXXXXXXX"
  cookie_consent: true
  kontakt_backend: "frontend"         # "email" | "webhook" | "frontend"
  kontakt_webhook_url: ""
  kontakt_email_api_key: ""
  faq: true
  galerie: true
  team_sektion: false
  blog: false
```

## Hero-Texte

```yaml
hero:
  headline: "Ihre Heizung streikt? Wir sind in 60 Minuten bei Ihnen."
  subline: "Seit {gruendungsjahr} Ihr verlässlicher Meisterbetrieb für Sanitär, Heizung & Klima in {region}."
  cta_primary: "Kostenlos Angebot anfragen"
  cta_secondary: "Notdienst anrufen"
```

## FAQ

```yaml
faqs:
  - frage: "Was kostet eine Heizungswartung?"
    antwort: "Eine Standard-Heizungswartung kostet zwischen 120–180 € je nach Anlagentyp. Wir erstellen Ihnen vorab ein transparentes Angebot."
  - frage: "Wie schnell sind Sie bei einem Notfall vor Ort?"
    antwort: "In unserem Einzugsgebiet sind wir in der Regel innerhalb von 60 Minuten bei Ihnen. Rufen Sie unseren Notdienst an: {telefon_notdienst}."
  - frage: "Bieten Sie kostenlose Angebote an?"
    antwort: "Ja, die Erstberatung und Angebotserstellung ist bei uns immer kostenlos und unverbindlich."
  - frage: "Welche Förderungen gibt es für eine neue Heizung?"
    antwort: "Über die Bundesförderung für effiziente Gebäude (BEG) sind bis zu 70% Förderung möglich. Wir beraten Sie und übernehmen die Antragstellung."
  - frage: "Wie lange dauert eine Badsanierung?"
    antwort: "Je nach Umfang rechnen Sie mit 2–4 Wochen. Bei der Erstberatung erstellen wir Ihnen einen realistischen Zeitplan."
  - frage: "Sind Sie ein Innungsfachbetrieb?"
    antwort: "Ja, wir sind Mitglied der SHK-Innung und im Installateurverzeichnis eingetragen. Das bedeutet für Sie: geprüfte Qualifikation und regelmäßige Weiterbildung."
```

## Einzugsgebiet

```yaml
service_orte:
  - "Bonn"
  - "Bad Godesberg"
  - "Beuel"
  - "Siegburg"
  - "Troisdorf"
  - "Sankt Augustin"
  - "Königswinter"
  - "Bornheim"
  - "Alfter"
  - "Meckenheim"
```

---

## Anpassung für andere Branchen

> Um dieses System für eine andere Branche zu nutzen (z.B. Dachdecker, Elektriker, Maler), ändere **nur diese Datei**:
>
> 1. **Branche** → z.B. "Dachdecker" statt "SHK"
> 2. **Firmendaten** → Neuer Betrieb
> 3. **Leistungen** → Branchenspezifische Leistungen (z.B. "Dachsanierung", "Flachdach", "Dachfenster")
> 4. **Hero-Texte** → Angepasste Headlines
> 5. **FAQ** → Branchenspezifische Fragen
> 6. **Lead Magnet** → z.B. "Dach-Check: 8 Warnsignale" statt "Heizungs-Check"
> 7. **Bewertungen** → Echte oder neue Platzhalter
>
> **Alles andere** (Design, Technik, Animationen, Seitenstruktur) bleibt identisch.
