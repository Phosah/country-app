<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const query = ref("");
const data = ref([]);

onMounted(async () => {
  const getData = await axios
    .get(`https://restcountries.com/v3.1/name/${query}`)
    .then((res) => {
      data.value = res.data;
      console.log(data.value);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  {{ query }}
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
</template>
