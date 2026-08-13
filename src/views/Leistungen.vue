<script setup>
import { RouterLink } from 'vue-router'
import TabGroup from '../components/TabGroup.vue'
const tabs = [
  { key: 'eltern', label: 'Für Eltern' },
  { key: 'einrichtungen', label: 'Für Einrichtungen' },
  { key: 'offline', label: 'Online & Vor Ort' },
]
</script>

<template>
  <section class="page-hero hero-flieder">
    <div class="blob-decor" style="width:340px;height:340px;top:-40px;right:-31px;opacity:.35;transform:rotate(-10deg);"><svg viewBox="0 0 200 200" aria-hidden="true"><path fill="#E3A857" d="M165,65.35 Q190,100 162.5,130.3 Q135,160.6 93.75,171.45 Q52.5,182.3 38.75,141.15 Q25,100 37.5,56.7 Q50,13.4 95,22.05 Q140,30.7 165,65.35 Z"/></svg></div>
    <div class="blob-decor" style="width:200px;height:200px;bottom:-22px;left:6%;opacity:.3;transform:rotate(15deg);"><svg viewBox="0 0 200 200" aria-hidden="true"><path fill="#D98E7A" d="M165,65.35 Q190,100 162.5,130.3 Q135,160.6 93.75,171.45 Q52.5,182.3 38.75,141.15 Q25,100 37.5,56.7 Q50,13.4 95,22.05 Q140,30.7 165,65.35 Z"/></svg></div>
    <div class="container">
      <p class="eyebrow" style="color:var(--tinte)"><i class="fa-solid fa-list-check"></i> Leistungen</p>
      <h1>Begleitung für Ernährung im Familienalltag</h1>
      <p class="sub">Für Eltern und Einrichtungen. Wissenschaftlich fundiert, verständlich und alltagstauglich.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <TabGroup :tabs="tabs">
        <template #eltern>
          <div class="tab-content">
            <div>
              <h2>Individuelle Begleitung im Familienalltag</h2>
              <p>Bei allen Fragen rund um Beikost, Essverhalten und Familienernährung – abgestimmt auf euer Kind und euren Alltag.</p>
              <ul>
                <li><i class="fa-solid fa-check"></i> Einstieg in Beikost</li>
                <li><i class="fa-solid fa-check"></i> Wählerisches Essverhalten</li>
                <li><i class="fa-solid fa-check"></i> Unsicherheit bei Mahlzeiten</li>
                <li><i class="fa-solid fa-check"></i> Überforderung im Alltag</li>
              </ul>
              <RouterLink to="/buchung" class="btn btn-primary">Jetzt kontaktieren <i class="fa-solid fa-arrow-right"></i></RouterLink>
            </div>
            <div class="card" style="background:var(--flieder-tint); border-color:transparent;">
              <div class="card-photo"><img src="https://images.unsplash.com/photo-1557939663-0619f304af9c?auto=format&fit=crop&w=700&q=80" alt="Kind isst selbstständig im Hochstuhl"></div>
              <p style="font-weight:600; color:var(--tinte); margin:0;">„Ich brauchte keine starren Regeln – sondern jemanden, der versteht, warum meine Tochter isst, wie sie isst.“</p>
            </div>
          </div>
        </template>
        <template #einrichtungen>
          <div class="tab-content">
            <div>
              <h2>Vorträge &amp; Workshops für Fachkräfte</h2>
              <p>Für Kitas, Kindergärten und Schulen rund um frühkindliche Ernährung und Essentwicklung.</p>
              <ul>
                <li><i class="fa-solid fa-check"></i> Kindliche Essentwicklung</li>
                <li><i class="fa-solid fa-check"></i> Picky Eating verstehen</li>
                <li><i class="fa-solid fa-check"></i> Beikostwissen für Fachkräfte</li>
              </ul>
              <RouterLink to="/kontakt" class="btn btn-primary">Vortrag anfragen <i class="fa-solid fa-arrow-right"></i></RouterLink>
            </div>
            <div class="card" style="background:var(--honig-tint); border-color:transparent;">
              <div class="icon-tile tile-honig"><i class="fa-solid fa-chalkboard-user"></i></div>
              <h4>Für Kita &amp; Schule</h4>
              <p>Praxisnahe Impulse für den pädagogischen Alltag – individuell zugeschnitten auf eure Einrichtung.</p>
            </div>
          </div>
        </template>
        <template #offline>
          <div class="tab-content">
            <div>
              <h2>Ob online oder vor Ort – ganz wie es passt</h2>
              <p>Begleitung ist sowohl online als auch vor Ort möglich, regional in Nürtingen und im Umkreis von ca. 100 km.</p>
              <ul>
                <li><i class="fa-solid fa-check"></i> 1:1 Online-Beratung</li>
                <li><i class="fa-solid fa-check"></i> Workshops vor Ort</li>
                <li><i class="fa-solid fa-check"></i> Vorträge &amp; Elternabende</li>
              </ul>
              <RouterLink to="/buchung" class="btn btn-primary">Jetzt kontaktieren <i class="fa-solid fa-arrow-right"></i></RouterLink>
            </div>
            <div class="card" style="background:var(--terracotta-tint); border-color:transparent;">
              <div class="icon-tile tile-terracotta"><i class="fa-solid fa-map-location-dot"></i></div>
              <h4>Regional verwurzelt</h4>
              <p>Nürtingen, Stuttgart, Esslingen, Reutlingen, Tübingen und Umgebung – ca. 100 km Umkreis.</p>
            </div>
          </div>
        </template>
      </TabGroup>
    </div>
  </section>

  <section style="background:var(--sand);">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow"><i class="fa-solid fa-star"></i> Themen im Überblick</p>
        <h2>Wähle, was gerade zu euch passt</h2>
      </div>
      <div class="card-grid grid-3">
        <div class="card">
          <div class="card-photo"><img src="https://images.unsplash.com/photo-1557939663-0619f304af9c?auto=format&fit=crop&w=700&q=80" alt="Beikost & Familienkost"></div>
          <h4>Beikost &amp; Familienkost</h4>
          <p>Sicherer Start in die Beikost und entspannte Übergänge zur Familienkost – ohne Druck und mit klarer Orientierung.</p>
          <RouterLink to="/schwerpunkte#beikost" class="cta-link">Mehr erfahren <i class="fa-solid fa-arrow-right"></i></RouterLink>
        </div>
        <div class="card">
          <div class="card-photo" style="background:var(--flieder-tint); display:flex; align-items:center; justify-content:center;"><i class="fa-solid fa-utensils" style="font-size:2.6rem; color:var(--flieder-dark);"></i></div>
          <h4>Picky Eating &amp; Essverhalten</h4>
          <p>Wenn dein Kind plötzlich wählerisch wird oder kaum noch isst – verständlich erklärt und alltagstauglich begleitet.</p>
          <RouterLink to="/schwerpunkte#picky" class="cta-link">Mehr erfahren <i class="fa-solid fa-arrow-right"></i></RouterLink>
        </div>
        <div class="card">
          <div class="card-photo" style="background:var(--salbei-tint); display:flex; align-items:center; justify-content:center;"><i class="fa-solid fa-dna" style="font-size:2.6rem; color:var(--salbei-dark);"></i></div>
          <h4>Darmgesundheit &amp; Mikrobiom</h4>
          <p>Wie Ernährung, Darmflora und Entwicklung zusammenhängen – einfach erklärt für Eltern.</p>
          <RouterLink to="/schwerpunkte#darm" class="cta-link">Mehr erfahren <i class="fa-solid fa-arrow-right"></i></RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-honig cta-band">
    <div class="container text-center">
      <h2>Unsicher, was für euch passt?</h2>
      <p>Im kostenlosen Erstgespräch finden wir es gemeinsam heraus.</p>
      <RouterLink to="/buchung" class="btn btn-primary">Kostenloses Erstgespräch buchen <i class="fa-solid fa-calendar-check"></i></RouterLink>
    </div>
  </section>
</template>
