<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";

const country = ref(null);
const { id } = route.params;

onBeforeMount(() => {
  axios.get("https://restcountries.com/v3.1/all").then((res) => {
    country.value = res.data.find((c) => c.cca2 == id);
  });
});
</script>

<template>
  <div class="mt-10 px-6 grid sm:grid-cols-2 gap-6">
    <div class="mb-3 h-72 bg-red-100">
      <img
        class="w-full h-full"
        :src="country.flags.png"
        :alt="country.name.common"
      />
    </div>
    <div class="flex items-center justify-center px-2">
      <div>
        <h2 class="mb-3 text-bold text-2xl">{{ country.name.official }}</h2>
        <p class="mb-1">Native name: {{ country.name.common }}</p>
        <p class="mb-1">Population: {{ country.population }}</p>
        <p class="mb-1">Region: {{ country.region }}</p>
        <p class="mb-1">Sub Region: {{ country.subregion }}</p>
        <p class="mb-4">Capital: {{ country.capital }}</p>
        <div class="flex items-center space-x-3">
          <div v-for="border in country.borders">
            <div class="px-3 py-2 border border-gray-400 shadow-md">
              {{ border }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
