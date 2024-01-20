<template>
  <!-- Button trigger modal -->
<!--  <button type="button" class="update-btn" data-bs-toggle="modal" data-bs-target="#UpdateProduct">-->
<!--    Редактировать-->
<!--  </button>-->

  <!-- Modal -->
  <div class="modal fade" id="UpdateProduct" tabindex="-1" aria-labelledby="UpdateProductLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <InputField v-model="product.name"/>
          <InputField v-model="product.price"/>
          <InputField v-model="product.photo"/>
          <input-field v-model="product.type" />


        </div>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="updateFunc">Update</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import InputField from "@/components/InputField.vue";
import {reactive, watch, ref, onMounted} from "vue";
const props = defineProps({
  dataProduct: Object
})
const product = ref({
  name: '',
  price: '',
  photo: '',
  type: '',
})
const emit = defineEmits(['updateProduct'])


function updateFunc(){
  emit("updateProduct", product)
}



onMounted(()=> {
  product.value =  JSON.parse(JSON.stringify(props.dataProduct))
})

watch(() => props, (currentValue, oldValue) => {
      product.value =  JSON.parse(JSON.stringify(props.dataProduct))
      console.log('watch')
    },
    { deep: true }
);
</script>

<style scoped lang="scss">
.update-btn {
  border: none;
  width: 150px;
  border-radius: 10px;
  background-color: #20DF7F;
  padding: 15px;
}
</style>