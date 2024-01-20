

<template>
    <button class="btn btn-primary" @click="nextPage">Список товаров</button>
</template>
<script setup >

  import router from "@/router";
  import Mymodal from "@/components/CreateProduct.vue";

  function nextPage () {
    router.push('/productList')
  }

</script>
<style scoped lang="scss">

</style>