<script setup>
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a href="#main" class="skip-link">Zum Inhalt springen</a>
  <NavBar />
  <main id="main">
    <router-view />
  </main>
  <SiteFooter />
</template>
