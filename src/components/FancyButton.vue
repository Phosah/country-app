<template>
  <div class="bg-red-100 p-2 rounded-sm">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <button class="py-1 px-2 bg-red-500 text-white rounded-md">
      <slot name="button"></slot>
    </button>
  </div>
</template>
