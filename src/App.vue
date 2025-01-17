<script setup>
import Navbar from '@/components/Navbar.vue'

import { RouterView, useRoute   } from 'vue-router';
</script>

<template>
  <Navbar />
  <RouterView />
</template>