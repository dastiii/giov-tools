<template>
  <div class="container mx-auto mt-24">
    <h2 class="font-brand text-gray-100 text-3xl my-12 text-center">Produktionsrechner</h2>

    <div class="w-1/2 mx-auto flex">
      <input type="number" v-model="quantity" class="p-4 bg-gray-900 rounded-lg rounded-r-none text-gray-100"/>
      <select name="product" v-model="product" class="p-4 bg-gray-900 rounded-lg rounded-l-none text-gray-100 flex-1">
        <option v-for="product in database.products" :key="product.name" :value="product" v-text="product.name"></option>
      </select>
    </div>


    <div class="my-12 w-1/2 mx-auto">
      <div v-if="product && quantity">
        <h4 class="text-2xl text-center tracking-wide text-gray-100 mb-8" v-text="`${quantity}x ${product.name}`"></h4>
        <ingredient v-for="ingredient in product.ingredients" :key="ingredient[0]" :product-name="ingredient[0]" :quantity="(quantity / product.per_production) * ingredient[1]" :depth="0"></ingredient>
      </div>
    </div>
  </div>
</template>

<script>
import database from "../data.js";
import Ingredient from './Ingredient.vue';

export default {
  name: "HelloWorld",
  components: {
    Ingredient,
  },
  props: {
    msg: String
  },

  created() {
    this.database = database;
  },

  data() {
    return {
      product: null,
      quantity: 1,
    };
  },

  methods: {
    findProduct(name) {
      return this.database.products.find(el => el.name === name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
