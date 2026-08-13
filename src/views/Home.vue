<script setup>
import { RouterLink } from 'vue-router'
import { posts } from '../data/posts'
import BlogCard from '../components/BlogCard.vue'
</script>

<template>
  <section class="hero-start">
    <div class="blob-decor" style="width:380px;height:380px;top:-45px;right:-36px;opacity:.4;transform:rotate(-10deg);"><svg viewBox="0 0 200 200" aria-hidden="true"><path fill="#E3A857" d="M165,65.35 Q190,100 162.5,130.3 Q135,160.6 93.75,171.45 Q52.5,182.3 38.75,141.15 Q25,100 37.5,56.7 Q50,13.4 95,22.05 Q140,30.7 165,65.35 Z"/></svg></div>
    <div class="blob-decor" style="width:240px;height:240px;bottom:12px;left:-27px;opacity:.3;transform:rotate(15deg);"><svg viewBox="0 0 200 200" aria-hidden="true"><path fill="#D98E7A" d="M165,65.35 Q190,100 162.5,130.3 Q135,160.6 93.75,171.45 Q52.5,182.3 38.75,141.15 Q25,100 37.5,56.7 Q50,13.4 95,22.05 Q140,30.7 165,65.35 Z"/></svg></div>
    <div class="container hero-grid">
      <div>
        <p class="eyebrow" style="color:#EFE6D6"><i class="fa-solid fa-seedling"></i> Ernährungsberatung für Familien</p>
        <h1>Wenn Essen im Familienalltag plötzlich stressig wird.</h1>
        <p class="sub">nährraum begleitet dich durch Beikost, Picky Eating und Familienernährung – wissenschaftlich fundiert und alltagstauglich erklärt. Für Eltern, Schwangere, Großeltern und Einrichtungen in Nürtingen &amp; Umgebung.</p>
        <div style="display:flex; gap:16px; flex-wrap:wrap;">
          <RouterLink to="/leistungen" class="btn btn-light">Angebote ansehen <i class="fa-solid fa-arrow-right"></i></RouterLink>
          <RouterLink to="/buchung" class="btn btn-outline" style="border-color:#fff; color:#fff;">Kostenloses Erstgespräch</RouterLink>
        </div>
      </div>
      <div class="hero-visual">
        <div class="blob-photo">
          <img src="https://images.unsplash.com/photo-1557939663-0619f304af9c?auto=format&fit=crop&w=900&q=80" alt="Baby isst selbstständig im Hochstuhl – Beikost im Familienalltag" loading="eager">
        </div>
      </div>
    </div>
  </section>

  <section style="background:var(--sand);">
    <div class="container">
      <div class="section-head center">
        <p class="eyebrow"><i class="fa-solid fa-heart-circle-check"></i> Wiedererkennung</p>
        <h2 class="accent" style="font-size:clamp(1.8rem,3.5vw,2.6rem);">Kennst du das?</h2>
      </div>
      <div class="card-grid grid-4">
        <div class="card"><div class="icon-tile tile-flieder"><i class="fa-solid fa-bowl-food"></i></div><p style="font-weight:600; margin:0;">Dein Kind isst plötzlich nur noch wenige Lebensmittel</p></div>
        <div class="card"><div class="icon-tile tile-terracotta"><i class="fa-solid fa-comments"></i></div><p style="font-weight:600; margin:0;">Jede Mahlzeit wird zum Verhandlungsprozess</p></div>
        <div class="card"><div class="icon-tile tile-honig"><i class="fa-solid fa-circle-question"></i></div><p style="font-weight:600; margin:0;">Du weißt nicht, ob das noch „normal“ ist</p></div>
        <div class="card"><div class="icon-tile tile-salbei"><i class="fa-solid fa-layer-group"></i></div><p style="font-weight:600; margin:0;">Ernährung fühlt sich plötzlich kompliziert an</p></div>
      </div>
      <p class="text-center accent" style="font-size:1.4rem; margin-top:40px;">Du bist damit nicht allein – und genau hier setzt nährraum an.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head center" style="max-width:640px;">
        <p class="eyebrow"><i class="fa-solid fa-shield-heart"></i> Warum nährraum?</p>
        <h2>Vertrauen, das auf Wissen aufbaut</h2>
      </div>
      <div class="card-grid grid-3">
        <div class="card"><div class="icon-tile tile-honig"><i class="fa-solid fa-book-open-reader"></i></div><h4>Evidenzbasiert</h4><p>Beratung auf Basis aktueller Ernährungswissenschaft – keine Trends, keine Panikmache.</p></div>
        <div class="card"><div class="icon-tile tile-terracotta"><i class="fa-solid fa-child-reaching"></i></div><h4>Fokus auf kindliche Essentwicklung</h4><p>Individuell auf das Alter und Temperament deines Kindes abgestimmt.</p></div>
        <div class="card"><div class="icon-tile tile-flieder"><i class="fa-solid fa-comments"></i></div><h4>Verständlich statt kompliziert</h4><p>Klare, alltagstaugliche Schritte statt Fachchinesisch.</p></div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <p class="eyebrow"><i class="fa-solid fa-list-check"></i> Angebot</p>
        <h2>Drei Themen, ein Ziel: entspannte Mahlzeiten</h2>
      </div>
      <div class="card-grid grid-3">
        <div class="card">
          <div class="card-photo"><img src="https://images.unsplash.com/photo-1557939663-0619f304af9c?auto=format&fit=crop&w=700&q=80" alt="Beikost & Familienkost"></div>
          <h4>Beikost &amp; Familienkost</h4>
          <p>Sicherer Start in die Beikost und entspannte Übergänge zur Familienkost – ohne Druck und mit klarer Orientierung.</p>
          <RouterLink to="/schwerpunkte" class="cta-link">Mehr erfahren <i class="fa-solid fa-arrow-right"></i></RouterLink>
        </div>
        <div class="card">
          <div class="card-photo" style="background:var(--flieder-tint); display:flex; align-items:center; justify-content:center;"><i class="fa-solid fa-utensils" style="font-size:2.6rem; color:var(--flieder-dark);"></i></div>
          <h4>Picky Eating &amp; Essverhalten</h4>
          <p>Wenn dein Kind plötzlich wählerisch wird oder kaum noch isst – verständlich erklärt und alltagstauglich begleitet.</p>
          <RouterLink to="/schwerpunkte" class="cta-link">Mehr erfahren <i class="fa-solid fa-arrow-right"></i></RouterLink>
        </div>
        <div class="card">
          <div class="card-photo" style="background:var(--salbei-tint); display:flex; align-items:center; justify-content:center;"><i class="fa-solid fa-dna" style="font-size:2.6rem; color:var(--salbei-dark);"></i></div>
          <h4>Darmgesundheit &amp; Mikrobiom</h4>
          <p>Wie Ernährung, Darmflora und Entwicklung zusammenhängen – einfach erklärt für Eltern.</p>
          <RouterLink to="/schwerpunkte" class="cta-link">Mehr erfahren <i class="fa-solid fa-arrow-right"></i></RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section style="background:var(--sand);">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow"><i class="fa-solid fa-people-roof"></i> Für wen</p>
        <h2>Begleitung für jede Familienkonstellation</h2>
      </div>
      <div class="card-grid grid-4">
        <div class="card"><div class="icon-tile tile-terracotta"><i class="fa-solid fa-person-pregnant"></i></div><h4>Schwangere</h4><p>Nährstoffversorgung &amp; Vorbereitung auf die Beikost.</p></div>
        <div class="card"><div class="icon-tile tile-flieder"><i class="fa-solid fa-people-group"></i></div><h4>Eltern</h4><p>Individuelle 1:1 Begleitung im Alltag.</p></div>
        <div class="card"><div class="icon-tile tile-honig"><i class="fa-solid fa-user-group"></i></div><h4>Großeltern</h4><p>Gemeinsame Linie für entspannte Mahlzeiten.</p></div>
        <div class="card"><div class="icon-tile tile-salbei"><i class="fa-solid fa-school"></i></div><h4>Kitas &amp; Schulen</h4><p>Vorträge &amp; Workshops für Fachkräfte.</p></div>
      </div>
    </div>
  </section>

  <section>
    <div class="container" style="position:relative;">
      <div class="blob-decor" style="width:260px;height:260px;top:-13px;right:4%;opacity:.3;transform:rotate(-10deg);"><svg viewBox="0 0 200 200" aria-hidden="true"><path fill="#C9BFEA" d="M165,65.35 Q190,100 162.5,130.3 Q135,160.6 93.75,171.45 Q52.5,182.3 38.75,141.15 Q25,100 37.5,56.7 Q50,13.4 95,22.05 Q140,30.7 165,65.35 Z"/></svg></div>
      <div class="quote-block" style="position:relative; z-index:1;">
        <span class="accent">„Ich wünsche mir, dass Mahlzeiten wieder das sind, was sie sein sollten: entspannt, verbindend und ohne Druck.“</span>
        <p style="font-weight:700; margin:0;">– Lia, nährraum</p>
        <RouterLink to="/ueber-mich" class="btn btn-outline btn-sm" style="margin-top:20px;">Mehr über mich</RouterLink>
      </div>
    </div>
  </section>

  <section style="background:var(--sand);">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow"><i class="fa-solid fa-pen-nib"></i> Aus dem Blog</p>
        <h2>Wissen zum Nachlesen</h2>
      </div>
      <div class="card-grid grid-3">
        <BlogCard v-for="post in posts" :key="post.slug" :post="post" />
      </div>
      <div class="text-center" style="margin-top:32px;"><RouterLink to="/blog" class="btn btn-outline">Alle Beiträge <i class="fa-solid fa-arrow-right"></i></RouterLink></div>
    </div>
  </section>

  <section class="hero-honig cta-band">
    <div class="blob-decor" style="width:220px;height:220px;top:-60px;right:-40px;opacity:0.18;transform:rotate(-8deg);"><svg viewBox="0 0 200 200" aria-hidden="true"><path fill="#FFFFFF" d="M165,65.35 Q190,100 162.5,130.3 Q135,160.6 93.75,171.45 Q52.5,182.3 38.75,141.15 Q25,100 37.5,56.7 Q50,13.4 95,22.05 Q140,30.7 165,65.35 Z"/></svg></div>
    <div class="blob-decor" style="width:150px;height:150px;bottom:-40px;left:8%;opacity:0.14;transform:rotate(20deg);"><svg viewBox="0 0 200 200" aria-hidden="true"><path fill="#FFFFFF" d="M165,65.35 Q190,100 162.5,130.3 Q135,160.6 93.75,171.45 Q52.5,182.3 38.75,141.15 Q25,100 37.5,56.7 Q50,13.4 95,22.05 Q140,30.7 165,65.35 Z"/></svg></div>
    <div class="container text-center">
      <h2>Bereit für entspannte Mahlzeiten?</h2>
      <p>Im kostenlosen Erstgespräch schauen wir gemeinsam, wo ihr steht – ganz unverbindlich.</p>
      <RouterLink to="/buchung" class="btn btn-primary">Jetzt Termin sichern <i class="fa-solid fa-calendar-check"></i></RouterLink>
    </div>
  </section>
</template>
