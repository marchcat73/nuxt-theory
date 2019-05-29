<template>
  <section>
    <h1>Error 404</h1>
    <nuxt-link :to="'/'">Home</nuxt-link>
  </section>
</template>

<style scoped>
  h1 {
    color: #ff0000;
  }
  section {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
  }
</style>

