<script setup>
import SearchBar from "../components/SearchBar.vue";
import Filter from "../components/Filter.vue";
import Country from "../components/Country.vue";
</script>

<template>
  {{ searchInput }}
  <div>
    <div class="px-6 py-2 shadow-lg text-2xl font-semibold">
      Where in the world?
    </div>
    <div class="flex align-items-center justify-between my-4 px-6">
      <!-- <SearchBar /> -->
      <Filter />
    </div>
    <div class="px-6">
      <Country />
    </div>
  </div>
</template>
