<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="page-hero hero-terracotta">
    <div class="container hero-grid" style="align-items:center;">
      <div>
        <p class="eyebrow" style="color:var(--tinte)"><i class="fa-solid fa-heart"></i> Über mich</p>
        <h1 style="color:var(--tinte);">Hey, ich bin Lia.</h1>
        <p class="sub" style="color:var(--tinte); opacity:.85;">Fachkraft für Picky Eating, Ernährungsberaterin und selbst Mama. Meine Tochter machte mich zur Expertin für wählerisches Essverhalten, lange bevor ich es beruflich wurde.</p>
      </div>
      <div class="blob-photo" style="background:var(--flieder); display:flex; align-items:center; justify-content:center; overflow:hidden;">
        <img src="/Lia_Shooting_7.png" alt="Lia, Ernährungsberaterin und Mama" loading="eager" style="width:100%; height:calc(100% + 25px); object-fit:cover; display:block; transform:translate(-15px, -35px);">
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="tab-content" style="align-items:center;">
        <div>
          <p class="eyebrow"><i class="fa-solid fa-route"></i> Mein Weg</p>
          <h2>Vom Familienalltag zur Fachkraft</h2>
          <p>30 Jahre später weiß ich: Ernährung im Familienalltag ist selten nur eine Frage von „richtig“ oder „falsch“. Als meine Tochter plötzlich nur noch wenige Lebensmittel akzeptierte, habe ich verstanden, wie hilflos man sich als Elternteil fühlen kann und wie viel Druck unnötig ist.</p>
          <p>Diese Erfahrung hat mich dazu gebracht, mich intensiv mit kindlicher Essentwicklung, Picky Eating und Familienernährung zu beschäftigen, wissenschaftlich fundiert, aber immer mit Blick auf den echten Alltag von Familien.</p>
        </div>
        <div class="card-grid" style="grid-template-columns:1fr; gap:16px;">
          <div class="card" style="flex-direction:row; align-items:center; gap:16px; padding:20px;">
            <div class="icon-tile tile-salbei" style="margin:0;"><i class="fa-solid fa-graduation-cap"></i></div>
            <div><strong>Fundierte Ausbildung</strong><p style="margin:0; font-size:.9rem;">Zertifizierte Ernährungsberaterin mit Spezialisierung auf frühkindliche Ernährung</p></div>
          </div>
          <div class="card" style="flex-direction:row; align-items:center; gap:16px; padding:20px;">
            <div class="icon-tile tile-terracotta" style="margin:0;"><i class="fa-solid fa-child"></i></div>
            <div><strong>Eigene Erfahrung</strong><p style="margin:0; font-size:.9rem;">Als Mama weiß ich, wie sich Mahlzeiten-Stress wirklich anfühlt</p></div>
          </div>
          <div class="card" style="flex-direction:row; align-items:center; gap:16px; padding:20px;">
            <div class="icon-tile tile-honig" style="margin:0;"><i class="fa-solid fa-hands-holding-child"></i></div>
            <div><strong>Glückliche Familien und Kinder</strong><p style="margin:0; font-size:.9rem;">Individuelle Beratung online &amp; vor Ort in der Region Nürtingen</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section style="background:var(--sand);">
    <div class="container">
      <div class="section-head center">
        <p class="eyebrow"><i class="fa-solid fa-compass"></i> Meine Haltung</p>
        <h2>Was mir wichtig ist</h2>
      </div>
      <div class="card-grid grid-3">
        <div class="card"><div class="icon-tile tile-flieder"><i class="fa-solid fa-scale-balanced"></i></div><h4>Ohne Dogma</h4><p>Keine strikten Regeln, sondern individuelle Lösungen „die Dosis macht das Gift“, nicht die Angst.</p></div>
        <div class="card"><div class="icon-tile tile-salbei"><i class="fa-solid fa-face-smile"></i></div><h4>Ohne Druck</h4><p>Essen soll verbinden, nicht zum Kampf werden. Wir arbeiten mit dem Kind, nicht gegen es.</p></div>
        <div class="card"><div class="icon-tile tile-honig"><i class="fa-solid fa-book"></i></div><h4>Wissenschaftlich fundiert</h4><p>Aktuelle Studienlage statt Trends aus sozialen Medien.</p></div>
      </div>
    </div>
  </section>

  <section class="bg-salbei cta-band">
    <div class="container text-center">
      <h2>Lass uns kennenlernen</h2>
      <p>Im kostenlosen Erstgespräch erzähle ich dir mehr und wir schauen, wie ich euch unterstützen kann.</p>
      <RouterLink to="/buchung" class="btn btn-light">Erstgespräch buchen <i class="fa-solid fa-calendar-check"></i></RouterLink>
    </div>
  </section>
</template>
