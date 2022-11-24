<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const countries = ref(null);

onMounted(() => {
  axios.get("https://restcountries.com/v3.1/all").then((res) => {
    countries.value = res.data;
    console.log(countries.value);
  });
});

defineProps({});
</script>

<template>
  <div class="py-6 grid grid-cols-4 gap-4 md:gap-6 rounded-md">
    <div v-for="country in countries">
      <router-link to="/country">
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
            <p class="mb-1">Capital: {{ country.capital[0] }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
