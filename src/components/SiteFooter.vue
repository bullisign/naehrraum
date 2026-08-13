<script setup>
import { RouterLink } from 'vue-router'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <span class="footer-logo">nähr<span style="color:var(--salbei)">raum</span></span>
          <p style="color:rgba(255,255,255,.65); max-width:280px;">Ernährungsberatung für Familien in Nürtingen &amp; Umkreis.</p>
          <div class="social-row">
            <a href="https://instagram.com/naehrraum" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="mailto:hallo@naehrraum.de" aria-label="E-Mail"><i class="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>
            <li><RouterLink to="/leistungen">Leistungen</RouterLink></li>
            <li><RouterLink to="/schwerpunkte">Schwerpunkte</RouterLink></li>
            <li><RouterLink to="/ueber-mich">Über mich</RouterLink></li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
          </ul>
        </div>
        <div>
          <h4>Angebote</h4>
          <ul>
            <li><RouterLink to="/schwerpunkte#beikost">Beikost &amp; Familienkost</RouterLink></li>
            <li><RouterLink to="/schwerpunkte#picky">Picky Eating</RouterLink></li>
            <li><RouterLink to="/schwerpunkte#schwangerschaft">Schwangerschaft</RouterLink></li>
            <li><RouterLink to="/buchung">Termin buchen</RouterLink></li>
          </ul>
        </div>
        <div>
          <h4>Kontakt</h4>
          <ul>
            <li><i class="fa-solid fa-location-dot"></i> Nürtingen, Baden-Württemberg</li>
            <li><a href="mailto:hallo@naehrraum.de">hallo@naehrraum.de</a></li>
            <li><RouterLink to="/kontakt">Kontaktformular</RouterLink></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© {{ year }} nährraum · Lia</span>
        <span><RouterLink to="/impressum">Impressum</RouterLink> · <RouterLink to="/datenschutz">Datenschutz</RouterLink></span>
      </div>
    </div>
  </footer>
</template>
