<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section style="background:var(--sand);">
    <div class="container">
      <div class="section-head"><p class="eyebrow">Weiterlesen</p><h2>Das könnte dich auch interessieren</h2></div>
      <div class="card-grid grid-3">
        <RouterLink to="/blog/picky-eating" class="blog-card">
          <div class="img" style="background:var(--flieder); display:flex; align-items:center; justify-content:center;"><i class="fa-solid fa-utensils" style="font-size:3rem; color:#fff;"></i></div>
          <div class="body"><span class="blog-tag tag-terracotta">Picky Eating</span><h4 style="margin:8px 0 0;">5 Gründe, warum dein Kind plötzlich wählerisch isst</h4></div>
        </RouterLink>
        <RouterLink to="/blog/schwangerschaft" class="blog-card">
          <div class="img" style="background:var(--terracotta); display:flex; align-items:center; justify-content:center;"><i class="fa-solid fa-seedling" style="font-size:3rem; color:#fff;"></i></div>
          <div class="body"><span class="blog-tag tag-honig">Schwangerschaft</span><h4 style="margin:8px 0 0;">Ernährung in der Schwangerschaft: Was wirklich wichtig ist</h4></div>
        </RouterLink>
        <RouterLink to="/schwerpunkte#beikost" class="blog-card">
          <div class="img" style="background:var(--honig); display:flex; align-items:center; justify-content:center;"><i class="fa-solid fa-bowl-food" style="font-size:3rem; color:#fff;"></i></div>
          <div class="body"><span class="blog-tag">Schwerpunkt</span><h4 style="margin:8px 0 0;">Alles zum Thema Beikost &amp; Familienkost</h4></div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
