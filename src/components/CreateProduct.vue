<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" style="margin-right: 10px" data-bs-toggle="modal" data-bs-target="#CreateProduct">
    Создать продукт
  </button>

  <!-- Modal -->
  <div class="modal fade" id="CreateProduct" tabindex="-1" aria-labelledby="CreateProductLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <input-field v-model="product.name" :placeholder="'Название продукта'"/>
          <input-field v-model="product.price" :placeholder="'Цена продукта'" :type="'Number'"/>
          <input-field v-model="product.photo" :placeholder="'Фото продукта (ссылка)'"/>
          <input-field v-model="product.type" :placeholder="'Тип продукта '" :type="'Number'"/>
        </div>
          <button @click="create" type="button" class="btn btn-primary" data-bs-dismiss="modal">CREATE</button>
      </div>
    </div>
  </div>
</template>


<script setup>

import InputField from "@/components/InputField.vue";
import {ref, reactive} from "vue";

const props = defineProps({
  title: String,
  btnTitle: String,
  placeholder: String,
  placeholder2: String,
  placeholder3: String,
})
const product = reactive({
  name: '',
  price: '',
  photo: '',
  type: '',
})


const emit = defineEmits(['createProduct'])

function create() {
  product.id =  Date.now()
  if ((product.photo && product.name && product.price) !== '') {
    emit('createProduct', product)
    product.name = ''
    product.price = ''
    product.photo = ''
    product.type = ''
  }
}

</script>


<style scoped lang="scss">

</style>