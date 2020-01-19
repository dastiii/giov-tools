<template>
  <div class="container mx-auto mt-24">
    <h2 class="font-brand text-gray-100 text-3xl my-12 text-center">Produktionsrechner</h2>

    <div class="w-1/2 mx-auto flex">
      <!-- <v-select
        :options="calculatedQuantities"
        v-model="quantity"
        label="Quantity"
        class="flex-1 bg-gray-900 rounded-l-lg text-gray-100 p-4 text-lg"
        placeholder="Menge auswählen"
      ></v-select> -->
      <input type="number" v-model="quantity" class="p-4 bg-gray-900 rounded-lg rounded-r-none text-gray-100"/>
      <v-select
        :options="sortedProducts"
        v-model="product"
        label="name"
        class="flex-1 bg-gray-900 rounded-r-lg text-gray-100 p-4 text-lg"
        placeholder="Produkt auswählen"
      ></v-select>
     <!--  <select name="product" v-model="product" class="p-4 bg-gray-900 rounded-lg rounded-l-none text-gray-100 flex-1">
        <option v-for="product in database.products" :key="product.name" :value="product" v-text="product.name"></option>
      </select> -->
    </div>

    <div v-if="product && product.max_per_production" class="w-1/2 mx-auto text-gray-100 text-lg text-center my-4">
      Volle Maschine? <input type="checkbox" v-model="max_per_production">
    </div>

    <div v-if="product && product.surplus" class="w-1/2 mx-auto text-gray-100 text-lg text-center my-4">
      Alle Überschüsse einrechnen? <input type="checkbox" v-model="surplus">
    </div>


    <div class="my-12 w-1/2 mx-auto">
      <div v-if="product && (quantity || max_per_production)">
        <h4 class="text-2xl text-center tracking-wide text-gray-100" v-text="`${calculatedQuantity}x ${product.name}`"></h4>
        <h5 v-if="surplus" class="text-center text-gray-800 text-xl" v-text="`${product.surplus * 100}% Überschuss eingerechnet`"></h5>
        <div class="mt-8">
          <ingredient v-for="ingredient in product.ingredients" :key="ingredient[0]" :product-name="ingredient[0]" :quantity="calcQuantity(ingredient[1])" :surplus="surplus" :depth="0"></ingredient>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as database from "../data.json";
import Ingredient from './Ingredient.vue';
import { sortBy } from 'lodash';

export default {
  components: {
    Ingredient,
  },
  props: {
    msg: String
  },

  created() {
    this.database = database.default;
  },

  data() {
    return {
      product: null,
      quantity: 0,
      surplus: false,
      max_per_production: false,
    };
  },

  watch: {
    product() {
      this.max_per_production = false;
    }
  },

  computed: {
    sortedProducts() {
      return sortBy(this.database.products, ['name']);
    },

    calculatedQuantity() {
        if (! this.product) {
          return 0;
        }

        if (this.max_per_production && this.product.max_per_production) {
          return this.product.max_per_production;
        }

        let rest = parseInt(this.quantity) % this.product.per_production;

        if (rest === 0) {
          return parseInt(this.quantity);
        }

        return parseInt(this.quantity) + (this.product.per_production - rest);
    },
  },

  methods: {
    findProduct(name) {
      return this.database.products.find(el => el.name === name);
    },

    calcQuantity(quantity) {
      if (this.surplus) {
        return Math.ceil((this.calculatedQuantity / (this.product.per_production * (1 + this.product.surplus))) * quantity);
      }

      return Math.ceil((this.calculatedQuantity / this.product.per_production) * quantity);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
