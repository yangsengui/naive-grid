<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <router-link to="/page">link</router-link>
</template>

<style scoped>

</style>
