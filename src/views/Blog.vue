<script setup>
import { ref, computed } from 'vue'
import { posts as basePosts } from '../data/posts'
import BlogCard from '../components/BlogCard.vue'

// Zusätzliche Platzhalter-Kategorien wie im Original (ohne eigenen Artikel)
const placeholders = [
  { slug: 'mikrobiom', route: '#', cat: 'Darmgesundheit', tagClass: 'tag-salbei', title: 'Mikrobiom im Kindesalter: Wie Vielfalt auf dem Teller hilft', excerpt: 'Warum Ballaststoffe und Abwechslung für die Darmflora zählen.', readTime: '6 Min. Lesezeit', icon: 'fa-dna', bg: 'var(--honig)' },
  { slug: 'beikost-loeffel', route: '#', cat: 'Beikost', tagClass: 'tag-flieder', title: 'Die ersten Beikost-Löffel: Ein Leitfaden für den Start', excerpt: 'Zeitpunkt, Reihenfolge und typische Stolperfallen.', readTime: '8 Min. Lesezeit', icon: 'fa-bowl-food', bg: 'var(--flieder-dark)' },
  { slug: 'gemeinsame-mahlzeiten', route: '#', cat: 'Familienalltag', tagClass: 'tag-salbei', title: 'Gemeinsame Mahlzeiten: Warum sie so wertvoll sind', excerpt: 'Kleine Rituale mit großer Wirkung für die ganze Familie.', readTime: '4 Min. Lesezeit', icon: 'fa-people-roof', bg: 'var(--salbei-dark)' },
]

const allPosts = [...basePosts, ...placeholders]
const categories = ['alle', 'Beikost', 'Picky Eating', 'Schwangerschaft', 'Darmgesundheit', 'Familienalltag']
const activeFilter = ref('alle')

const filteredPosts = computed(() =>
  activeFilter.value === 'alle' ? allPosts : allPosts.filter(p => p.cat === activeFilter.value)
)

const email = ref('')
const submitted = ref(false)
function subscribe() {
  submitted.value = true
  email.value = ''
}
</script>

<template>
  <section class="page-hero hero-salbei">
    <div class="container">
      <p class="eyebrow" style="color:#EFE6D6"><i class="fa-solid fa-pen-nib"></i> Blog</p>
      <h1 style="color:#fff;">Wissen zum Nachlesen</h1>
      <p class="sub" style="color:rgba(255,255,255,.9);">Verständliche Artikel rund um Beikost, Picky Eating, Schwangerschaft und Darmgesundheit – kompakt und alltagstauglich.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="tabs">
        <button v-for="cat in categories" :key="cat" class="tab-btn" :class="{ active: activeFilter === cat }" @click="activeFilter = cat">
          {{ cat === 'alle' ? 'Alle' : cat }}
        </button>
      </div>
      <div class="card-grid grid-3">
        <BlogCard v-for="post in filteredPosts" :key="post.slug" :post="post" />
      </div>
    </div>
  </section>

  <section style="background:var(--sand);">
    <div class="container text-center">
      <h2>Keine Beiträge mehr verpassen</h2>
      <p style="max-width:460px; margin:0 auto 24px;">Melde dich für den nährraum-Newsletter an – ca. 1x im Monat, jederzeit abbestellbar.</p>
      <form v-if="!submitted" style="display:flex; gap:12px; max-width:420px; margin:0 auto; flex-wrap:wrap; justify-content:center;" @submit.prevent="subscribe">
        <input type="email" v-model="email" required placeholder="deine.email@beispiel.de" style="flex:1; min-width:220px;">
        <button class="btn btn-primary" type="submit">Anmelden</button>
      </form>
      <p v-else style="font-weight:700; color:var(--salbei-dark);"><i class="fa-solid fa-circle-check"></i> Danke! (Demo – hier folgt später die echte Newsletter-Anbindung)</p>
    </div>
  </section>
</template>
