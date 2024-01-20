<template>
  <input :placeholder="props.placeholder" :type="props.type" v-model="inputValue" @input="updateInput"
  >
</template>

<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  placeholder: String,
  type: String ,
  modelValue: {},
})

const inputValue = ref('')
const emit = defineEmits(['update:modelValue'])

const updateInput = () => {
  emit('update:modelValue', inputValue.value)
}

watch(
    () => props.modelValue,
    (count) => {
      inputValue.value = count
    }
)
</script>

<style scoped lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance:textfield;
}


input {
  width: 300px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #224957;
  margin-bottom: 30px;
  border: none;
  padding: 5px;
}
</style>