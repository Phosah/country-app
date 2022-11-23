<script setup></script>
<template>
  <div>
    <div
      class="flex align-items-center space-x-3 px-3 py-2 border border-gray-200 focus:border-blue-500 rounded-md"
    >
      <input
        class="focus:outline-none w-full bg-transparent"
        type="text"
        placeholder="Filter"
      />
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
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
  </div>
</template>
