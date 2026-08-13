<script setup>
import { RouterLink } from 'vue-router'
import { ref, reactive, computed } from 'vue'

// ============================================================
// nährraum, Buchungssystem
// Portiert von assets/js/booking.js zu Vue-Reaktivität.
// Für den Live-Betrieb: state 1:1 an eine API übergeben (POST /api/booking)
// oder an ein Buchungstool (Cal.com, SimplyBook, Amelia) anbinden.
// ============================================================

const services = [
  { id: 'erst', name: 'Erstgespräch (kostenlos)', duration: '20 Min · Online', price: '0 €', desc: 'Unverbindliches Kennenlernen, wir klären, wie ich dich unterstützen kann.' },
  { id: 'einzel', name: '1:1 Beratung Beikost & Picky Eating', duration: '50 Min · Online oder vor Ort', price: '89 €', desc: 'Individuelle Begleitung bei Beikoststart, wählerischem Essverhalten oder Mahlzeiten-Stress.' },
  { id: 'folge', name: 'Folgetermin', duration: '30 Min · Online', price: '49 €', desc: 'Für Klient:innen in laufender Begleitung.' },
  { id: 'vortrag', name: 'Vortrag / Workshop anfragen', duration: 'nach Absprache · Einrichtungen & Kitas', price: 'auf Anfrage', desc: 'Für Kitas, Schulen und pädagogische Fachkräfte.' },
]

const liaisonEmail = 'naehr.raum@web.de'

const step = ref(1)
const state = reactive({
  service: null,
  date: null,
  time: null,
  name: '',
  email: '',
  phone: '',
  child: '',
  notes: '',
  consent: false,
})

function selectService(s) {
  state.service = s
}

function goTo(n) {
  step.value = n
  requestAnimationFrame(() => {
    const el = document.getElementById('buchung-tool')
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' })
  })
}

// ---- Termine ----
const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
function nextWeekdays(n) {
  const out = []
  let d = new Date()
  let added = 0
  while (added < n) {
    d.setDate(d.getDate() + 1)
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      out.push({ label: dayNames[d.getDay()], num: d.getDate(), month: d.getMonth() + 1, key: `${d.getDate()}.${d.getMonth() + 1}.` })
      added++
    }
  }
  return out
}
const dates = nextWeekdays(8)

function selectDate(d) {
  state.date = d.key
  state.time = null
}

const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00']
const times = computed(() => {
  if (!state.date) return []
  const seed = state.date.length + state.date.charCodeAt(0)
  return timeSlots.map((t, i) => ({ time: t, taken: (i + seed) % 5 === 0 }))
})

function selectTime(t) {
  if (t.taken) return
  state.time = t.time
}

const step2Valid = computed(() => !!(state.date && state.time))

// ---- Formular / Bestätigung ----
const submitted = ref(false)

const bookingSummaryTemplate = computed(() => {
  if (!state.service || !state.date || !state.time) return ''

  return [
    `Leistung: ${state.service.name}`,
    `Termin: ${state.date} um ${state.time} Uhr`,
    `Preis: ${state.service.price}`,
    `Name: ${state.name}`,
    `E-Mail: ${state.email}`,
    `Telefon: ${state.phone || 'nicht angegeben'}`,
    `Alter des Kindes: ${state.child || 'nicht angegeben'}`,
    `Hinweise: ${state.notes || 'keine'}`,
  ].join('\n')
})

function submitBooking() {
  submitted.value = true
  goTo(4)
}
</script>

<template>
  <section class="page-hero hero-flieder">
    <div class="container">
      <p class="eyebrow" style="color:var(--tinte)"><i class="fa-solid fa-calendar-check"></i> Terminbuchung</p>
      <h1>Lass uns einen Termin finden</h1>
      <p class="sub">Wähle eine Leistung, einen Termin, der passt, und trage dich ein, in wenigen Klicks.</p>
    </div>
  </section>

  <section>
    <div class="container" style="max-width:820px;" id="buchung-tool">
      <div class="booking-shell">
        <div class="booking-progress">
          <div class="p-step" :class="{ active: step === 1, done: step > 1 }">1. Leistung</div>
          <div class="p-step" :class="{ active: step === 2, done: step > 2 }">2. Termin</div>
          <div class="p-step" :class="{ active: step === 3, done: step > 3 }">3. Deine Daten</div>
          <div class="p-step" :class="{ active: step === 4 }">4. Bestätigung</div>
        </div>

        <div class="booking-body">

          <!-- STEP 1 -->
          <div v-if="step === 1" class="bk-panel active">
            <h2 style="margin-top:0;">Welche Leistung möchtest du buchen?</h2>
            <div id="service-list">
              <div
                v-for="s in services" :key="s.id"
                class="service-option" :class="{ selected: state.service?.id === s.id }"
                role="button" tabindex="0" :aria-pressed="state.service?.id === s.id"
                @click="selectService(s)" @keydown.enter.prevent="selectService(s)" @keydown.space.prevent="selectService(s)"
              >
                <div>
                  <h4>{{ s.name }}</h4>
                  <div class="meta">{{ s.duration }}</div>
                  <div class="meta">{{ s.desc }}</div>
                </div>
                <div class="price">{{ s.price }}</div>
              </div>
            </div>
            <div class="bk-nav" style="justify-content:flex-end;">
              <button class="btn btn-primary" :disabled="!state.service" @click="goTo(2)">Weiter <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>

          <!-- STEP 2 -->
          <div v-if="step === 2" class="bk-panel active">
            <h2 style="margin-top:0;">Wähle Datum &amp; Uhrzeit</h2>
            <p style="color:var(--tinte-soft); margin-top:-8px;">Werktags verfügbar. Ausgegraute Zeiten sind bereits vergeben.</p>
            <div class="date-grid">
              <div
                v-for="d in dates" :key="d.key"
                class="date-cell" :class="{ selected: state.date === d.key }"
                role="button" tabindex="0"
                @click="selectDate(d)" @keydown.enter.prevent="selectDate(d)" @keydown.space.prevent="selectDate(d)"
              >
                <div class="d">{{ d.label }}</div>
                <div class="n">{{ d.num }}.{{ d.month }}.</div>
              </div>
            </div>
            <div class="time-grid">
              <div
                v-for="t in times" :key="t.time"
                class="time-cell" :class="{ disabled: t.taken, selected: state.time === t.time }"
                role="button" :tabindex="t.taken ? -1 : 0"
                @click="selectTime(t)" @keydown.enter.prevent="selectTime(t)" @keydown.space.prevent="selectTime(t)"
              >{{ t.time }}</div>
            </div>
            <div class="bk-nav">
              <button class="btn btn-outline" @click="goTo(1)"><i class="fa-solid fa-arrow-left"></i> Zurück</button>
              <button class="btn btn-primary" :disabled="!step2Valid" @click="goTo(3)">Weiter <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>

          <!-- STEP 3 -->
          <div v-if="step === 3" class="bk-panel active">
            <h2 style="margin-top:0;">Fast geschafft</h2>
            <div class="summary-box">
              <div class="summary-row"><span>Leistung</span><strong>{{ state.service?.name }}</strong></div>
              <div class="summary-row"><span>Termin</span><strong>{{ state.date }} · {{ state.time }} Uhr</strong></div>
              <div class="summary-row"><span>Preis</span><strong>{{ state.service?.price }}</strong></div>
            </div>
            <form @submit.prevent="submitBooking">
              <div class="form-row">
                <div><label for="bk-name">Vor- &amp; Nachname *</label><input type="text" id="bk-name" v-model="state.name" required></div>
                <div><label for="bk-email">E-Mail *</label><input type="email" id="bk-email" v-model="state.email" required></div>
              </div>
              <div class="form-row">
                <div><label for="bk-phone">Telefon (optional)</label><input type="tel" id="bk-phone" v-model="state.phone"></div>
                <div><label for="bk-child">Alter des Kindes (optional)</label><input type="text" id="bk-child" v-model="state.child" placeholder="z. B. 14 Monate"></div>
              </div>
              <div class="form-row full">
                <div><label for="bk-notes">Worum geht es? (optional)</label><textarea id="bk-notes" v-model="state.notes" rows="3" placeholder="Kurz beschreiben, was euch aktuell beschäftigt..."></textarea></div>
              </div>
              <label style="display:flex; align-items:flex-start; gap:10px; font-weight:500; font-size:.88rem; margin-bottom:20px;">
                <input type="checkbox" v-model="state.consent" required style="width:auto; margin-top:3px;">
                Ich habe die <RouterLink to="/datenschutz" style="text-decoration:underline;" target="_blank">Datenschutzerklärung</RouterLink> gelesen und stimme der Verarbeitung meiner Daten zur Terminbuchung zu. *
              </label>
              <div class="bk-nav">
                <button type="button" class="btn btn-outline" @click="goTo(2)"><i class="fa-solid fa-arrow-left"></i> Zurück</button>
                <button type="submit" class="btn btn-primary">Termin verbindlich anfragen <i class="fa-solid fa-check"></i></button>
              </div>
            </form>
          </div>

          <!-- STEP 4 -->
          <div v-if="step === 4" class="bk-panel active">
            <div class="confirm-screen">
              <div class="check"><i class="fa-solid fa-check"></i></div>
              <h2>Anfrage gesendet!</h2>
              <p style="color:var(--tinte-soft); max-width:420px; margin:0 auto 24px;">
                Danke! Deine Anfrage für <strong>{{ state.service?.name }}</strong> am <strong>{{ state.date }} um {{ state.time }} Uhr</strong> ist eingegangen.
              </p>
              <div style="margin-top:18px; font-size:.9rem; color:var(--tinte-soft); line-height:1.6;">
                Deine Anfrage wurde erfolgreich gesendet. Lia wird sich zeitnah bei dir melden.
              </div>
              <div style="margin-top:18px;">
                <RouterLink to="/" style="text-decoration:underline; color:var(--tinte); font-weight:600;">Zur Startseite</RouterLink>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>

  <section style="background:var(--sand);">
    <div class="container" style="max-width:720px;">
      <div class="section-head center"><p class="eyebrow"><i class="fa-solid fa-circle-question"></i> Häufige Fragen</p><h2>Gut zu wissen</h2></div>
      <details class="faq-item" open>
        <summary>Ist das Erstgespräch wirklich kostenlos?<i class="fa-solid fa-plus"></i></summary>
        <p>Ja. Im 20-minütigen Erstgespräch lernen wir uns kennen und klären unverbindlich, wie ich euch unterstützen kann.</p>
      </details>
      <details class="faq-item">
        <summary>Finden Beratungen auch vor Ort statt?<i class="fa-solid fa-plus"></i></summary>
        <p>Ja, im Umkreis von ca. 100 km um Nürtingen (u. a. Stuttgart, Esslingen, Reutlingen, Tübingen) sind Termine vor Ort möglich, online geht es überall.</p>
      </details>
      <details class="faq-item">
        <summary>Wie kurzfristig kann ich einen Termin absagen?<i class="fa-solid fa-plus"></i></summary>
        <p>Bis 24 Stunden vorher kostenfrei, danach wird der Termin ggf. anteilig berechnet.</p>
      </details>
      <details class="faq-item">
        <summary>Bietet ihr auch Vorträge für Kitas an?<i class="fa-solid fa-plus"></i></summary>
        <p>Ja, wähle dazu einfach „Vortrag / Workshop anfragen“ im ersten Schritt oder schreib mir über das <RouterLink to="/kontakt" style="text-decoration:underline;">Kontaktformular</RouterLink>.</p>
      </details>
    </div>
  </section>
</template>
