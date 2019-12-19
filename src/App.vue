<template>
  <div id="app">
    <div class="container mx-auto my-4">
      <h1 class="font-brand text-brand text-5xl">
        GioV
        <span class="text-3xl text-white">Dein Lieblingsrestaurant.</span>
      </h1>
    </div>

    <restaurant-calculator></restaurant-calculator>
  </div>
</template>

<script>
import RestaurantCalculator from "./components/RestaurantCalculator.vue";

export default {
  name: "app",
  components: {
    RestaurantCalculator
  }
};
</script>

<style>
body {
  background-color: theme('colors.gray.950');
}
</style>
