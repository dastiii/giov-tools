<template>
  <div>
    <ul class="bg-transparant my-1" :class="[totalDepthClass, depth === 0 ? 'mb-8' : '']">
      <!-- <li class="p-4 text-lg text-gray-100 bg-gray-900">
        <span class="mr-1" v-text="`${Math.ceil(quantity)}x`"></span>
        <span class="mr-1" v-text="productName"></span>
        <span class="mr-1" v-if="realQuantity" v-text="`(${realQuantity})`"></span>
        <span class="mr-1" v-if="surplus" v-text="`(${(100 * product.surplus)}% Überschuss)`"></span>
      </li> -->
      <li
        class="p-4 text-lg text-gray-100 bg-gray-900"
        :class="`opacity-${ 100 - (depth * 25)}`"
        v-text="
          `${Math.ceil(quantity)}x
          ${productName}
          `
        "
      ></li>
      <li v-if="product">
        <ingredient
          v-for="ingredient in product.ingredients"
          :key="ingredient[0]"
          :product-name="ingredient[0]"
          :quantity="calcQuantity(ingredient[1])"
          :depth="depth + 1"
          :surplus="surplus"
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

    surplus: {
      type: Boolean,
      required: true,
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
    },
  },

  methods: {
    findProduct(name) {
      return this.database.products.find(el => el.name === name);
    },

    calcQuantity(quantity) {
      if (this.surplus) {
        return Math.ceil((this.quantity / (this.product.per_production * (1 + this.product.surplus))) * quantity);
      }

      return Math.ceil((this.quantity / this.product.per_production) * quantity);
    }
  }
};
</script>
