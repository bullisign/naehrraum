<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const open = ref(false)
const close = () => { open.value = false }
</script>

<template>
  <header class="site-header">
    <div class="container nav">
      <RouterLink to="/" class="logo" @click="close">nähr<span>raum</span></RouterLink>
      <nav class="nav-links" :class="{ open }">
        <RouterLink to="/" @click="close">Startseite</RouterLink>
        <RouterLink to="/leistungen" @click="close">Leistungen</RouterLink>
        <RouterLink to="/schwerpunkte" @click="close">Schwerpunkte</RouterLink>
        <RouterLink to="/ueber-mich" @click="close">Über mich</RouterLink>
        <RouterLink to="/blog" @click="close">Blog</RouterLink>
      </nav>
      <div class="nav-cta">
        <RouterLink to="/buchung" class="btn btn-primary btn-sm">
          <i class="fa-solid fa-calendar-check"></i><span>Termin buchen</span>
        </RouterLink>
        <button class="nav-toggle" aria-label="Menü öffnen" @click="open = !open">
          <i :class="open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>
    </div>
  </header>
</template>
