# nährraum – Website (Übergabe)

## Struktur
- `index.html` – Startseite
- `leistungen.html` – Leistungen (Reiter: Eltern / Einrichtungen / Online & Vor Ort)
- `schwerpunkte.html` – Schwerpunkte (Reiter: Beikost / Picky Eating / Schwangerschaft / Darmgesundheit)
- `ueber-mich.html` – Über Lia
- `blog.html` + `blog-beikoststart.html`, `blog-picky-eating.html`, `blog-schwangerschaft.html` – Blog-Übersicht + 3 vollständige Beiträge (weitere Karten sind Platzhalter, gleiches Muster kopierbar)
- `buchung.html` – 4-stufiges Buchungssystem (Leistung → Termin → Daten → Bestätigung)
- `kontakt.html`, `impressum.html`, `datenschutz.html`
- `assets/css/style.css` – komplettes Design-System (Farben, Typo, Komponenten)
- `assets/js/main.js` – Nav-Toggle, Tabs
- `assets/js/booking.js` – Buchungslogik

## Wichtig vor Go-Live
1. **Schriften:** "More Sugar" ist in der CSS per @font-face vorbereitet (`assets/fonts/MoreSugar.woff2`) – Dateien noch ergänzen, sonst greift automatisch der Fallback "Caveat". Für die Fließtext-Schrift habe ich "Inter" angesetzt (freie Google Font, sauber & modern) – bitte prüfen, ob das der Schrift aus eurem PDF/CD entspricht, sonst einfach in `style.css` (`--font-sans`) austauschen.
2. **Bilder:** Aktuell nur 1 verifiziert lizenzfreies Unsplash-Foto (Baby im Hochstuhl) eingebunden, der Rest bewusst über Icon/Flächen-Illustrationen gelöst (passt zum IG-Look). Sobald du echte Fotos hast: einfach `<img src="...">` austauschen.
3. **Buchungssystem:** Aktuell eine funktionierende Frontend-Simulation (Terminauswahl, Formular, Bestätigung) – für den Echtbetrieb an ein Buchungstool (z. B. Cal.com, SimplyBook, Amelia) oder ein eigenes Backend anbinden. Die Datenstruktur in `booking.js` (`state`) ist dafür schon vorbereitet.
4. **Impressum/Datenschutz:** Enthalten Platzhalter (Adresse, USt-Status, eingesetzte Tools) – bitte vor Veröffentlichung vervollständigen bzw. juristisch prüfen lassen.
5. **Domain/Hosting:** Struktur ist bereit für Netlify (wie bei bullisign) – einfach Ordner hochladen bzw. an Git anbinden.

## SEO/Marketing bereits eingebaut
- Individuelle Title/Meta-Description je Seite, Keywords auf Nürtingen + Umkreis + Themen zugeschnitten
- LocalBusiness-Schema (JSON-LD) auf der Startseite
- Saubere interne Verlinkung (Startseite → Schwerpunkte/Leistungen → Buchung)
- Blog als Content-Hub für Longtail-Keywords (z. B. "BLW vs. Brei")
- Klare CTAs auf jeder Seite ("Kostenloses Erstgespräch")
