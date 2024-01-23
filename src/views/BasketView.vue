<template>dsa
  <button class="btn btn-primary" @click="goToBasket">Список товаров</button>
  <button class="btn btn-primary" @click="">{{store.state.basketList}}</button>
dsa

</template>ads

<script setup>
import router from "@/router";
import {onMounted} from "vue";
import store from "@/store";
function goToBasket(){
  router.push('/productList')

}
onMounted(()=>{
  console.log('e')
store.commit('getBasketList')
})
</script>

<style scoped>

</style>