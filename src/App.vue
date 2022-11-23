<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="h-screen max-w-7xl mx-auto py-4 bg-gray-100">
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style>
* {
  font-family: "GeneralSans";
}
html {
  scroll-behavior: smooth;
}

.bounce-all {
  transition: all 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
}
</style>
