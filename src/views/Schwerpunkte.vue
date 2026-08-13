<script setup>
import { RouterLink } from 'vue-router'
import TabGroup from '../components/TabGroup.vue'
const tabs = [
  { key: 'beikost', label: 'Beikost / Familienkost' },
  { key: 'picky', label: 'Picky Eating' },
  { key: 'schwanger', label: 'Schwangerschaft' },
  { key: 'darm', label: 'Darmgesundheit' },
]
</script>

<template>
  <section class="page-hero hero-honig">
    <div class="container">
      <p class="eyebrow" style="color:var(--tinte)"><i class="fa-solid fa-magnifying-glass"></i> Schwerpunkte</p>
      <h1>Vier Themen, die Familien wirklich bewegen</h1>
      <p class="sub">Fundiertes Wissen zu den Phasen, in denen Ernährung im Familienalltag am meisten Fragen aufwirft.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <TabGroup :tabs="tabs">
        <template #beikost>
          <div class="tab-content">
            <div>
              <h2 id="beikost">Beikost &amp; Familienkost</h2>
              <p>Der Übergang zur festen Nahrung ist ein wichtiger Entwicklungsschritt und oft mit Unsicherheit verbunden. nährraum zeigt dir, wie Beikost entspannt und sicher gelingen kann.</p>
              <ul>
                <li><i class="fa-solid fa-check"></i> Beikoststart, wann und wie?</li>
                <li><i class="fa-solid fa-check"></i> BLW vs. Brei: Vor- und Nachteile</li>
                <li><i class="fa-solid fa-check"></i> Übergang zur Familienkost</li>
              </ul>
              <RouterLink to="/buchung" class="btn btn-primary">Beratung anfragen <i class="fa-solid fa-arrow-right"></i></RouterLink>
            </div>
            <div class="card-photo" style="aspect-ratio:4/3;"><img src="https://images.unsplash.com/photo-1557939663-0619f304af9c?auto=format&fit=crop&w=800&q=80" alt="Baby beim Beikoststart im Hochstuhl"></div>
          </div>
        </template>
        <template #picky>
          <div class="tab-content">
            <div>
              <h2 id="picky">Picky Eating</h2>
              <p>Wählerisches Essverhalten ist in der kindlichen Entwicklung häufig, aber im Alltag oft belastend. Hier lernst du, Verhalten einzuordnen und entspannter zu begleiten.</p>
              <ul>
                <li><i class="fa-solid fa-check"></i> Wählerisches Essverhalten verstehen</li>
                <li><i class="fa-solid fa-check"></i> Umgang mit Essverweigerung</li>
                <li><i class="fa-solid fa-check"></i> Normalität vs. echtes Problem</li>
              </ul>
              <RouterLink to="/buchung" class="btn btn-primary">Beratung anfragen <i class="fa-solid fa-arrow-right"></i></RouterLink>
            </div>
            <div class="card" style="background:var(--flieder-tint); border-color:transparent; aspect-ratio:4/3; justify-content:center; align-items:center;">
              <i class="fa-solid fa-utensils" style="font-size:3rem; color:var(--flieder-dark);"></i>
            </div>
          </div>
        </template>
        <template #schwanger>
          <div class="tab-content">
            <div>
              <h2 id="schwangerschaft">Schwangerschaft &amp; Ernährung</h2>
              <p>Was darf ich essen? Was ist wirklich wichtig? Auch wenn nährraum den Fokus auf frühkindliche Ernährung legt, spielt die Schwangerschaft eine wichtige Rolle für die spätere Entwicklung des Kindes.</p>
              <ul>
                <li><i class="fa-solid fa-check"></i> Nährstoffversorgung in der Schwangerschaft</li>
                <li><i class="fa-solid fa-check"></i> Sicherheit bei Lebensmitteln</li>
                <li><i class="fa-solid fa-check"></i> Verbindung zur kindlichen Entwicklung</li>
              </ul>
              <RouterLink to="/buchung" class="btn btn-primary">Beratung anfragen <i class="fa-solid fa-arrow-right"></i></RouterLink>
            </div>
            <div class="card" style="background:var(--terracotta-tint); border-color:transparent; aspect-ratio:4/3; justify-content:center; align-items:center;">
              <i class="fa-solid fa-person-pregnant" style="font-size:3rem; color:var(--terracotta-dark);"></i>
            </div>
          </div>
        </template>
        <template #darm>
          <div class="tab-content">
            <div>
              <h2 id="darm">Darmgesundheit &amp; Mikrobiom</h2>
              <p>Wie Ernährung, Darmflora und Entwicklung zusammenhängen, einfach erklärt für Eltern, mit konkreten Ansätzen für den Alltag.</p>
              <ul>
                <li><i class="fa-solid fa-check"></i> Aufbau eines gesunden Mikrobioms</li>
                <li><i class="fa-solid fa-check"></i> Ballaststoffe &amp; Vielfalt im Kindesalter</li>
                <li><i class="fa-solid fa-check"></i> Zusammenhang mit Immunsystem &amp; Verdauung</li>
              </ul>
              <RouterLink to="/buchung" class="btn btn-primary">Beratung anfragen <i class="fa-solid fa-arrow-right"></i></RouterLink>
            </div>
            <div class="card" style="background:var(--salbei-tint); border-color:transparent; aspect-ratio:4/3; justify-content:center; align-items:center;">
              <i class="fa-solid fa-dna" style="font-size:3rem; color:var(--salbei-dark);"></i>
            </div>
          </div>
        </template>
      </TabGroup>
    </div>
  </section>

  <section class="bg-sand cta-band">
    <div class="container text-center">
      <h2>Nicht sicher, welcher Schwerpunkt passt?</h2>
      <p>Kein Problem, im kostenlosen Erstgespräch ordnen wir eure Situation gemeinsam ein.</p>
      <RouterLink to="/buchung" class="btn btn-primary">Kostenloses Erstgespräch <i class="fa-solid fa-calendar-check"></i></RouterLink>
    </div>
  </section>
</template>
