<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const countries = ref(null);
const router = useRouter();
const route = useRoute();

onMounted(() => {
  axios.get("https://restcountries.com/v3.1/all").then((res) => {
    countries.value = res.data;
    console.log(countries.value);
  });
});
</script>

<template>
  <div
    class="py-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded-md"
  >
    <div
      v-for="country in countries"
      @click="router.push(`/country/${country.cca2}`)"
    >
      <div class="pb-4 bg-white rounded-md shadow-lg">
        <div class="mb-3 h-36 bg-red-100">
          <img
            class="w-full h-full"
            :src="country.flags.png"
            :alt="country.name.common"
          />
        </div>
        <div class="px-2">
          <h2 class="mb-3">{{ country.name.official }}</h2>
          <p class="mb-1">Population: {{ country.population }}</p>
          <p class="mb-1">Region: {{ country.region }}</p>
          <p class="mb-1">Capital: {{ country.capital }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
