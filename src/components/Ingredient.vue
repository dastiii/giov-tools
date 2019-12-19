<template>
  <div>
    <ul class="even:bg-gray-100 odd:bg-gray-200" :class="totalDepthClass">
      <li
        class="bg-gray-900 p-4 text-lg text-gray-100"
        v-text="
          `${quantity}x
          ${productName}
          `
        "
      ></li>
      <li v-if="product">
        <ingredient
          v-for="ingredient in product.ingredients"
          :key="ingredient[0]"
          :product-name="ingredient[0]"
          :quantity="(quantity / product.per_production) * ingredient[1]"
          :depth="depth + 1"
        ></ingredient>
      </li>
    </ul>
  </div>
</template>

<script>
import database from "../data";
import Ingredient from "./Ingredient.vue";

export default {
  name: 'Ingredient',

  components: {
    Ingredient
  },

  created() {
    this.database = database;
    this.product = this.findProduct(this.productName) ?? null;
  },

  data() {
    return {
      product: null,
    }
  },

  props: {
    productName: {
      type: String,
      required: true
    },

    quantity: {
      type: Number,
      required: true
    },

    depth: {
      type: Number,
      required: true,
    }
  },

  computed: {
    totalDepthClass() {
      if (! this.depth) {
        return 'ml-4';
      }

      return 'ml-' + this.depth * 4;
    }
  },

  methods: {
    findProduct(name) {
      return this.database.products.find(el => el.name === name);
    }
  }
};
</script>
