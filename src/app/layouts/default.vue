<!-- layouts/default.vue -->
<template>
  <div class="bg-surface-primary text-text-primary font-sans min-h-screen">
    <Navbar />
    <div class="pt-20">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background-color: #0f1117;
  color: #f0f0f0;
}
</style>
