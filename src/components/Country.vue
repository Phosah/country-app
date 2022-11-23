<script setup>
import { ref } from "vue";

defineProps({});
</script>

<template>
  <div class="py-6 grid grid-cols-4 gap-4 md:gap-6 rounded-md">
    <router-link to="/country">
      <div class="pb-4 bg-white rounded-md shadow-lg">
        <div class="mb-3 h-36 bg-red-100">
          <img src="" alt="" />
        </div>
        <h2 class="mb-3">Germany: 81,500,300</h2>
        <p class="mb-1">Population</p>
        <p class="mb-1">Region: Europe</p>
        <p class="mb-1">Capital: Berlin</p>
      </div>
    </router-link>
    <router-link to="/country">
      <div class="pb-4 bg-white rounded-md shadow-lg">
        <div class="mb-3 h-36 bg-red-100">
          <img src="" alt="" />
        </div>
        <h2 class="mb-3">Germany: 81,500,300</h2>
        <p class="mb-1">Population</p>
        <p class="mb-1">Region: Europe</p>
        <p class="mb-1">Capital: Berlin</p>
      </div>
    </router-link>
    <router-link to="/country">
      <div class="pb-4 bg-white rounded-md shadow-lg">
        <div class="mb-3 h-36 bg-red-100">
          <img src="" alt="" />
        </div>
        <h2 class="mb-3">Germany: 81,500,300</h2>
        <p class="mb-1">Population</p>
        <p class="mb-1">Region: Europe</p>
        <p class="mb-1">Capital: Berlin</p>
      </div>
    </router-link>
    <router-link to="/country">
      <div class="pb-4 bg-white rounded-md shadow-lg">
        <div class="mb-3 h-36 bg-red-100">
          <img src="" alt="" />
        </div>
        <h2 class="mb-3">Germany: 81,500,300</h2>
        <p class="mb-1">Population</p>
        <p class="mb-1">Region: Europe</p>
        <p class="mb-1">Capital: Berlin</p>
      </div>
    </router-link>
  </div>
</template>
