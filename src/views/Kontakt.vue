<script setup>
import { RouterLink } from 'vue-router'
import { ref, reactive } from 'vue'

const form = reactive({ name: '', email: '', topic: '1:1 Beratung', message: '', consent: false })
const submitted = ref(false)
function submit() {
  submitted.value = true
  form.name = ''; form.email = ''; form.message = ''; form.consent = false
}
</script>

<template>
  <section class="page-hero hero-terracotta">
    <div class="container">
      <p class="eyebrow" style="color:var(--tinte)"><i class="fa-solid fa-envelope"></i> Kontakt</p>
      <h1 style="color:var(--tinte);">Schreib mir gerne</h1>
      <p class="sub" style="color:var(--tinte); opacity:.85;">Für Fragen, individuelle Beratungsanfragen oder Vorträge für Einrichtungen – ich freue mich von dir zu hören.</p>
    </div>
  </section>

  <section>
    <div class="container tab-content" style="align-items:flex-start;">
      <div>
        <h2>Kontaktformular</h2>
        <form @submit.prevent="submit">
          <div class="form-row">
            <div><label for="k-name">Name *</label><input type="text" id="k-name" v-model="form.name" required></div>
            <div><label for="k-email">E-Mail *</label><input type="email" id="k-email" v-model="form.email" required></div>
          </div>
          <div class="form-row full">
            <div>
              <label for="k-topic">Anliegen</label>
              <select id="k-topic" v-model="form.topic">
                <option>1:1 Beratung</option>
                <option>Vortrag / Workshop für Einrichtung</option>
                <option>Presse / Kooperation</option>
                <option>Sonstiges</option>
              </select>
            </div>
          </div>
          <div class="form-row full">
            <div><label for="k-message">Nachricht *</label><textarea id="k-message" v-model="form.message" rows="5" required></textarea></div>
          </div>
          <label style="display:flex; align-items:flex-start; gap:10px; font-weight:500; font-size:.88rem; margin-bottom:20px;">
            <input type="checkbox" v-model="form.consent" required style="width:auto; margin-top:3px;">
            Ich stimme der Verarbeitung meiner Daten gemäß <RouterLink to="/datenschutz" style="text-decoration:underline;" target="_blank">Datenschutzerklärung</RouterLink> zu. *
          </label>
          <button type="submit" class="btn btn-primary">Nachricht senden <i class="fa-solid fa-paper-plane"></i></button>
          <p v-if="submitted" style="margin-top:16px; color:var(--salbei-dark); font-weight:700;"><i class="fa-solid fa-circle-check"></i> Danke! Deine Nachricht ist angekommen (Demo).</p>
        </form>
      </div>

      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="icon-tile tile-salbei"><i class="fa-solid fa-location-dot"></i></div>
          <h4>Region</h4>
          <p style="margin:0;">Nürtingen, Baden-Württemberg – Beratung vor Ort im Umkreis von ca. 100 km (u. a. Stuttgart, Esslingen, Reutlingen, Tübingen). Online deutschlandweit.</p>
        </div>
        <div class="card" style="margin-bottom:20px;">
          <div class="icon-tile tile-honig"><i class="fa-solid fa-envelope"></i></div>
          <h4>E-Mail</h4>
          <p style="margin:0;"><a href="mailto:hallo@naehrraum.de">hallo@naehrraum.de</a></p>
        </div>
        <div class="card">
          <div class="icon-tile tile-terracotta"><i class="fa-brands fa-instagram"></i></div>
          <h4>Instagram</h4>
          <p style="margin:0;"><a href="https://instagram.com/naehrraum" target="_blank" rel="noopener">@naehrraum</a></p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-sand cta-band">
    <div class="container text-center">
      <h2>Lieber direkt einen Termin?</h2>
      <p>Spar dir die Wartezeit und buch dein kostenloses Erstgespräch direkt online.</p>
      <RouterLink to="/buchung" class="btn btn-primary">Termin buchen <i class="fa-solid fa-calendar-check"></i></RouterLink>
    </div>
  </section>
</template>
