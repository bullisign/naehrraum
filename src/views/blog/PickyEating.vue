<script setup>
import { RouterLink } from 'vue-router'
import RelatedPosts from '../../components/RelatedPosts.vue'
</script>

<template>
  <article>
    <div class="post-hero">
      <div class="container" style="max-width:720px;">
        <RouterLink to="/blog" style="font-weight:700; font-size:.85rem; display:inline-flex; align-items:center; gap:8px; margin-bottom:20px;"><i class="fa-solid fa-arrow-left"></i> Zurück zum Blog</RouterLink>
        <span class="blog-tag tag-terracotta">Picky Eating</span>
        <h1 style="margin-top:14px;">5 Gründe, warum dein Kind plötzlich wählerisch isst</h1>
        <div class="blog-meta"><i class="fa-regular fa-clock"></i> 7 Min. Lesezeit <span>·</span> <i class="fa-regular fa-calendar"></i> Aktualisiert Juli 2026</div>
      </div>
    </div>

    <div class="card-photo" style="max-width:900px; margin:-40px auto 0; aspect-ratio:16/8; position:relative; z-index:2; background:var(--flieder); display:flex; align-items:center; justify-content:center;">
      <i class="fa-solid fa-utensils" style="font-size:4rem; color:#fff;"></i>
    </div>

    <div class="post-body">
      <p>Eben noch aß dein Kind fast alles – und plötzlich landet jeder zweite Teller unangetastet auf dem Tisch? Wählerisches Essverhalten, auch „Picky Eating“ genannt, ist eine der häufigsten Entwicklungsphasen im Kleinkindalter. Die gute Nachricht: In den meisten Fällen ist es völlig normal.</p>

      <h2>1. Es ist ein normaler Entwicklungsschritt</h2>
      <p>Zwischen dem zweiten und sechsten Lebensjahr durchlaufen viele Kinder eine Phase erhöhter Vorsicht gegenüber Neuem – ein evolutionär sinnvoller Schutzmechanismus, der als Neophobie bezeichnet wird.</p>

      <h2>2. Kontrolle über den eigenen Körper</h2>
      <p>Essen ist einer der wenigen Bereiche, in denen Kinder früh selbst entscheiden können. Ablehnung kann daher auch Ausdruck von Autonomie sein – nicht zwingend ein Zeichen für ein „Problem“.</p>

      <h2>3. Sensorische Empfindlichkeit</h2>
      <p>Manche Kinder reagieren stärker auf Konsistenz, Geruch oder Temperatur von Speisen. Das ist keine Marotte, sondern eine individuelle Wahrnehmung, die ernst genommen werden sollte.</p>

      <h2>4. Druck am Esstisch</h2>
      <p>Paradoxerweise kann Druck – „iss noch einen Bissen“ – die Ablehnung verstärken. Kinder spüren Erwartungshaltung sehr genau und reagieren oft mit noch mehr Verweigerung.</p>

      <h2>5. Fehlende Routine oder Vorbild</h2>
      <p>Regelmäßige, gemeinsame Mahlzeiten und das Vorbild der Eltern spielen eine große Rolle dabei, wie entspannt Kinder Neues ausprobieren.</p>

      <h2>Was hilft im Alltag?</h2>
      <ul>
        <li><i class="fa-solid fa-check"></i> Neues ohne Druck immer wieder anbieten, ganz ohne Zwang</li>
        <li><i class="fa-solid fa-check"></i> Feste Essenszeiten und -rituale schaffen Sicherheit</li>
        <li><i class="fa-solid fa-check"></i> Eigene Erwartungen bewusst runterschrauben</li>
        <li><i class="fa-solid fa-check"></i> Bei anhaltender, starker Einschränkung fachliche Begleitung suchen</li>
      </ul>

      <h2>Mein Fazit als Ernährungsberaterin</h2>
      <p>Picky Eating ist in den allermeisten Fällen eine Phase – kein Versagen der Eltern. Mit Geduld, Routine und dem richtigen Wissen lässt sich der Druck am Esstisch spürbar reduzieren.</p>

      <div class="quote-block" style="margin-top:40px; padding:36px;">
        <span class="accent" style="font-size:1.3rem;">Dein Kind isst seit Monaten nur noch wenige Dinge?</span>
        <p style="margin:0 0 16px;">Im kostenlosen Erstgespräch schauen wir gemeinsam auf eure Situation.</p>
        <RouterLink to="/buchung" class="btn btn-primary btn-sm">Erstgespräch buchen</RouterLink>
      </div>
    </div>
  </article>

  <RelatedPosts />
</template>
