<script setup>
defineProps({ post: { type: Object, required: true } })
</script>

<template>
  <RouterLink :to="post.route" class="blog-card">
    <div class="img">
      <img v-if="post.img" :src="post.img" :alt="post.title">
      <div v-else :style="{ width:'100%', height:'100%', background: post.bg, display:'flex', alignItems:'center', justifyContent:'center' }">
        <i class="fa-solid" :class="post.icon" style="font-size:3rem; color:#fff;"></i>
      </div>
    </div>
    <div class="body">
      <span class="blog-tag" :class="post.tagClass">{{ post.cat }}</span>
      <h4 style="margin:0 0 8px;">{{ post.title }}</h4>
      <p style="margin:0; font-size:.92rem;">{{ post.excerpt }}</p>
      <div class="blog-meta"><i class="fa-regular fa-clock"></i> {{ post.readTime }}</div>
    </div>
  </RouterLink>
</template>
