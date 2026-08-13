# nährraum – Vue/Vite-Version

Migration der statischen HTML-Version zu Vue 3 + Vite + vue-router.

## Setup

```bash
npm install
npm run dev      # Dev-Server mit Live-Reload auf http://localhost:5173
npm run build    # Produktions-Build nach /dist (für Netlify)
```

## Struktur

- `src/views/` – eine Komponente pro Seite (Home, Leistungen, Schwerpunkte, UeberMich, Blog, Buchung, Kontakt, Impressum, Datenschutz)
- `src/views/blog/` – die drei vollständigen Blog-Artikel
- `src/components/NavBar.vue` – Navigation inkl. reaktivem Mobile-Menü (ersetzt den alten `nav-toggle`-DOM-Code)
- `src/components/SiteFooter.vue` – Footer
- `src/components/TabGroup.vue` – wiederverwendbare Tab-Logik (ersetzt `data-tabs` aus main.js), genutzt in Leistungen & Schwerpunkte
- `src/components/BlogCard.vue` / `RelatedPosts.vue` – Blog-Kartenkomponenten
- `src/data/posts.js` – zentrale Blog-Post-Daten (einmal pflegen statt in jeder Seite kopieren)
- `src/views/Buchung.vue` – das komplette 4-stufige Buchungssystem, portiert von `booking.js` zu Vue `ref`/`reactive` (kein manuelles DOM mehr)
- `src/router/index.js` – alle Routen; `linkActiveClass: 'active'` sorgt dafür, dass das bestehende CSS für aktive Nav-Links weiter funktioniert
- `src/assets/style.css` – dein Original-Design-System, 1:1 übernommen

## Was noch offen ist (wie im Original-README)

1. **Schriften:** `assets/fonts/MoreSugar.woff2` fehlt noch – Datei ergänzen, sonst greift der Fallback "Caveat"
2. **Bilder:** aktuell nur 1 Unsplash-Foto, Rest über Icons gelöst
3. **Buchungssystem:** Frontend-Demo – state in `Buchung.vue` ist so aufgebaut, dass er 1:1 an eine API (`POST /api/booking`) übergeben werden kann
4. **Impressum/Datenschutz:** Platzhalter, vor Go-Live juristisch prüfen
5. **Deployment:** `npm run build` erzeugt `/dist` → auf Netlify hochladen oder Repo verknüpfen (Build-Command: `npm run build`, Publish-Directory: `dist`)
