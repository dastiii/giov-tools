<template>
  <div>
    <ul class="bg-transparant my-1" :class="[totalDepthClass, depth === 0 ? 'mb-8' : '']">
      <li
        class="p-4 text-lg text-gray-100 bg-gray-900"
        :class="`opacity-${ 100 - (depth * 25)}`"
        v-text="
          `${Math.ceil(quantity)}x
          ${productName}
          ${realQuantity}
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
import * as database from "../data.json";
import Ingredient from "./Ingredient.vue";

export default {
  name: 'Ingredient',

  components: {
    Ingredient
  },

  created() {
    this.database = database.default;
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
        return '';
      }

      return 'ml-' + this.depth * 8;
    },

    realQuantity() {
      if (this.quantity === Math.ceil(this.quantity)) {
        return '';
      }

      return '('+this.quantity.toFixed(3)+')';
    }
  },

  methods: {
    findProduct(name) {
      return this.database.products.find(el => el.name === name);
    }
  }
};
</script>
