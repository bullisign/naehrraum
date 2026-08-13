<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabs: { type: Array, required: true }, // [{ label, key }]
  initial: { type: String, default: null },
})
const active = ref(props.initial || props.tabs[0]?.key)
</script>

<template>
  <div>
    <div class="tabs" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="tab-btn"
        :class="{ active: active === tab.key }"
        @click="active = tab.key"
      >{{ tab.label }}</button>
    </div>
    <div v-for="tab in tabs" :key="tab.key" class="tab-panel" :class="{ active: active === tab.key }">
      <slot :name="tab.key" v-if="active === tab.key" />
    </div>
  </div>
</template>
