<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import FancyButton from "../components/FancyButton.vue";

const country = ref(null);
const router = useRouter();
const route = useRoute();
const { id } = route.params;
console.log(id);

onBeforeMount(() => {
  axios.get("https://restcountries.com/v3.1/all").then((res) => {
    country.value = res.data.find((c) => c.cca2 == id);
    console.log(country.value);
  });
});
</script>

<template>
  <div
    @click="router.back()"
    class="w-24 flex items-center space-x-3 px-3 py-2 ml-6 border border-gray-400 rounded-md cursor-pointer"
  >
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      ></path>
    </svg>
    <button>Back</button>
  </div>
  <div class="mt-10 px-6 grid sm:grid-cols-2 gap-6">
    <div class="mb-3 h-72 bg-red-100">
      <img
        class="w-full h-full"
        :src="country.flags.png"
        :alt="country.name.common"
      />
    </div>
    <div class="flex items-center justify-center mb-4 px-2">
      <div>
        <h2 class="mb-3 text-bold text-2xl">{{ country.name.official }}</h2>
        <p class="mb-1">Native name: {{ country.name.common }}</p>
        <p class="mb-1">Population: {{ country.population }}</p>
        <p class="mb-1">Region: {{ country.region }}</p>
        <p class="mb-1">Sub Region: {{ country.subregion }}</p>
        <p class="mb-12">Capital: {{ country.capital }}</p>
        <div class="flex items-center space-x-3">
          <div v-for="border in country.borders">
            <div
              @click="router.push(`/country/${border}`)"
              class="px-3 py-2 border border-gray-400 shadow-md cursor-pointer"
            >
              {{ border }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
