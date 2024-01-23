<template>
  <div class="modal fade" style="padding: 20px" id="pro" tabindex="-1" aria-labelledby="CreateProductLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body d-flex">
          <div class="mr-10" style="margin-right: 10px">{{ props.product.name }}</div>
          <div class="mr-10">{{ props.product.price }}</div>
          <button v-if="!props.product.basketStatus" @click="productCounter-=1">-</button>
          <div v-if="props.product.count">{{ props.product.count }}</div>
          <div v-if="!props.product.count" >{{ productCounter }}</div>
          <button v-if="!props.product.basketStatus" @click="productCounter+=1">+</button>


        </div>
        <div class="d-flex justify-content-center mb-3">Сумма: {{ props.product.price * productCounter }}</div>

        <button type="button" class="update-btn btn btn-primary" @click="emitFunc(props.product)"
                v-if="!props.product.basketStatus" data-bs-dismiss="modal">
          Добавить в корзину
        </button>
        <button type="button" class="btn btn-primary" v-if="props.product.basketStatus"
                @click="emitFunc(props.product)" data-bs-dismiss="modal">Удалить
        </button>

      </div>
    </div>
  </div>

</template>


<script setup>
import InputField from "@/components/InputField.vue";
import {ref, watch} from "vue";


const productCounter = ref(1)


const props = defineProps({
  product: Object
})
const emit = defineEmits(['basketCount'])

function emitFunc(product) {
  let productCopy = JSON.parse(JSON.stringify(product))
  productCopy.count = productCounter.value

  emit('basketCount', productCopy)
  productCounter.value = 1
}


</script>
<style scoped lang="scss">
.mr-10 {
  margin-right: 10px;
}
</style>