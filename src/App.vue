<template>
  <div id="app">
    <div class="container mx-auto my-4">
      <h1 class="font-brand text-center text-brand text-5xl">
        GioV
        <span class="text-3xl text-white">Dein Lieblingsrestaurant.</span>
      </h1>
    </div>
    <nav class="mt-8 bg-gray-900 text-gray-100 px-4">
      <div class="container mx-auto flex justify-center">
        <router-link class="block py-4 px-4 mx-2 hover:bg-gray-800" :to="{ name: 'restaurant-calculator' }" exact>Restaurantrechner</router-link>
        <!-- <router-link class="block py-4 px-4 mx-2 hover:bg-gray-800" :to="{ name: 'weight-calculator' }">Gewichtsrechner</router-link> -->
      </div>
    </nav>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
body {
  background-color: theme("colors.gray.950");
}
</style>
