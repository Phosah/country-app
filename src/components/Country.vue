<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import FancyButton from "../components/FancyButton.vue";

const countries = ref(null);
const router = useRouter();
const query = ref(null);
const filteredCountries = ref(null);
const filteredRegions = ref(null);
const search = ref(false);
const filter = ref(false);

const selectedRegion = ref("");

const regions = ["Africa", "Europe", "Asia", "Americas", "Oceania"];

onMounted(async () => {
  await axios.get("https://restcountries.com/v3.1/all").then((res) => {
    countries.value = res.data;
  });
});

const getData = () => {
  filteredCountries.value = countries.value.filter((c) =>
    c.name.common.includes(query.value)
  );
  console.log(filteredCountries.value);
  search.value = true;
  filter.value = false;
  query.value = "";
};

const getRegion = () => {
  filteredRegions.value = countries.value.filter(
    (c) => c.region === selectedRegion.value
  );
  filter.value = true;
};
</script>

<template>
  <div class="flex align-center justify-between space-x-2 mb-8">
    <div>
      <form @submit.prevent="getData">
        <div
          class="w-full flex align-items-center space-x-3 px-3 py-2 border border-gray-200 focus:border-blue-500 rounded-md"
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <input
            v-model="query"
            class="focus:outline-none w-full bg-transparent"
            type="text"
            placeholder="Search for country"
          />
        </div>
      </form>
    </div>
    <div>
      <form @click="getRegion">
        <div
          class="flex align-items-center space-x-3 px-3 py-2 border border-gray-200 focus:border-blue-500 rounded-md"
        >
          <select
            name="region"
            id="region"
            class="focus:outline-none text-black"
            v-model="selectedRegion"
          >
            <option value="">Select Region</option>
            <option v-for="region in regions" :key="region">
              {{ region }}
            </option>
          </select>
        </div>
      </form>
    </div>

    <!-- Slot -->
    <!-- <FancyButton
      ><template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer>
        <p>Here's some contact info</p>
      </template>

      <template #button>Click me now</template>
    </FancyButton> -->
  </div>
  <div
    class="py-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded-md"
  >
    <div
      v-if="filter"
      v-for="country in filteredRegions"
      @click="router.push(`/country/${country.cca2}`)"
    >
      <div class="pb-4 bg-white rounded-md shadow-lg cursor-pointer">
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
    <div
      v-if="!search"
      v-for="country in countries"
      @click="router.push(`/country/${country.cca2}`)"
    >
      <div class="pb-4 bg-white rounded-md shadow-lg cursor-pointer">
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
    <div
      v-else
      v-for="country in filteredCountries"
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
