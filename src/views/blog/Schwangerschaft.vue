<script setup>
import { RouterLink } from 'vue-router'
import RelatedPosts from '../../components/RelatedPosts.vue'
</script>

<template>
  <article>
    <div class="post-hero">
      <div class="container" style="max-width:720px;">
        <RouterLink to="/blog" style="font-weight:700; font-size:.85rem; display:inline-flex; align-items:center; gap:8px; margin-bottom:20px;"><i class="fa-solid fa-arrow-left"></i> Zurück zum Blog</RouterLink>
        <span class="blog-tag tag-honig">Schwangerschaft</span>
        <h1 style="margin-top:14px;">Ernährung in der Schwangerschaft: Was wirklich wichtig ist</h1>
        <div class="blog-meta"><i class="fa-regular fa-clock"></i> 5 Min. Lesezeit <span>·</span> <i class="fa-regular fa-calendar"></i> Aktualisiert Juli 2026</div>
      </div>
    </div>

    <div class="card-photo" style="max-width:900px; margin:-40px auto 0; aspect-ratio:16/8; position:relative; z-index:2; background:var(--terracotta); display:flex; align-items:center; justify-content:center;">
      <i class="fa-solid fa-person-pregnant" style="font-size:4rem; color:#fff;"></i>
    </div>

    <div class="post-body">
      <p>Kaum ein Thema sorgt in der Schwangerschaft für so viele widersprüchliche Ratschläge wie die Ernährung. Dabei ist vieles einfacher, als es oft dargestellt wird. Hier die wichtigsten Fakten, kompakt und ohne Panikmache.</p>

      <h2>Nährstoffversorgung: Worauf es wirklich ankommt</h2>
      <p>Besonders relevant in der Schwangerschaft sind Folsäure, Jod, Eisen und Omega-3-Fettsäuren. Eine ausgewogene Ernährung deckt vieles davon bereits ab, bestimmte Nährstoffe wie Folsäure und Jod werden dennoch häufig ergänzend supplementiert. Das genaue Vorgehen sollte immer ärztlich abgestimmt werden.</p>

      <h2>Lebensmittelsicherheit</h2>
      <p>Bestimmte Lebensmittel bergen ein erhöhtes Risiko für Infektionen wie Listeriose oder Toxoplasmose, dazu zählen unter anderem rohes Fleisch, roher Fisch und unpasteurisierte Milchprodukte. Ein Blick auf die offiziellen Empfehlungen (z. B. des BZfE) schafft hier schnell Klarheit.</p>

      <h2>Warum das für dein Kind später eine Rolle spielt</h2>
      <p>Studien deuten darauf hin, dass die pränatale Ernährung Geschmacksvorlieben und die spätere Akzeptanz verschiedener Lebensmittel mitprägen kann. Vielfalt auf dem Teller während der Schwangerschaft kann sich also langfristig lohnen, ganz ohne Druck.</p>

      <h2>Mein Fazit als Ernährungsberaterin</h2>
      <p>Du musst in der Schwangerschaft nicht perfekt essen, du darfst gelassen bleiben. Eine ausgewogene, abwechslungsreiche Ernährung, ein paar Vorsichtsmaßnahmen bei Risikolebensmitteln und der Austausch mit deiner Hebamme oder Ärztin reichen in der Regel völlig aus.</p>

      <div class="quote-block" style="margin-top:40px; padding:36px;">
        <span class="accent" style="font-size:1.3rem;">Fragen rund um Ernährung in der Schwangerschaft?</span>
        <p style="margin:0 0 16px;">Im kostenlosen Erstgespräch schauen wir gemeinsam auf eure Situation.</p>
        <RouterLink to="/buchung" class="btn btn-primary btn-sm">Erstgespräch buchen</RouterLink>
      </div>
    </div>
  </article>

  <RelatedPosts />
</template>
