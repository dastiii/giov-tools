<template>
  <div class="container mx-auto">
    <h2 class="font-brand text-gray-100 text-3xl my-12">Gewichtsrechner</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: [],
      }
    },

    created() {
      this.$http.get(this.$BASE_URL + "api/products")
      .then(res => {
        console.log(res);
        this.products = res.data;
      })
    }
  }
</script>
