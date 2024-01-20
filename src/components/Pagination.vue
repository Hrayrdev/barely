<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <button class="page-link" @click="prevPage">
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>

      <li class="page-item">
        <button class="page-link">{{ paginationListNumber }}</button>
      </li>

      <li class="page-item">
        <button class="page-link" @click="nextPage">
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
{{propl}}
<!--  <button @click="test">test</button>-->
<!-- <div v-for="div in filterProducts">{{div}}</div>-->
</template>


<script setup>
import {onMounted, ref, watch} from "vue";


const listStart = ref(0)
const listFinish = ref(8)
const paginationListNumber = ref(1)
const props = defineProps({
  filterProducts: Array,
  typeFilter: Number,
  searchProductTitle: String,
  propl: Number
})
let productList = ref([])

let paginatedProductList = ref([])
const emit = defineEmits(['paginatedProductList'])

// function test(){
//   console.log(props.filterProducts)
// }
onMounted(() => {
  productList.value = props.filterProducts

})

function examination() {
  if (Math.ceil(productList.value.length / 8) > paginationListNumber.value) {
    if (props.typeFilter !== 0) {

      if (Math.ceil(productList.value.filter(p => p.type === props.typeFilter && p.name.toLowerCase().includes(props.searchProductTitle.toLowerCase())).length  / 8) > paginationListNumber.value) {
        return true
      }
    } else if (props.searchProductTitle !== '') {
      if (Math.ceil(productList.value.filter(p =>  p.name.toLowerCase().includes(props.searchProductTitle.toLowerCase())).length / 8) > paginationListNumber.value) {
        return true
      }

    } else {
      return true
    }
  }
  return false
}

function examination2() {
  if (Math.ceil(productList.value.length / 8) >= paginationListNumber.value && paginationListNumber.value > 1) {
    return true
  }
  return false
}

function nextPage() {
  if (examination()) {

    paginationListNumber.value += 1
    listStart.value += 8
    listFinish.value += 8
    changeList()

  }
}

function prevPage() {
  if (examination2()) {
    paginationListNumber.value -= 1
    listStart.value -= 8
    listFinish.value -= 8
    changeList()

  }
}

function changeList() {
  if (props.typeFilter !== 0) {
    paginatedProductList.value = productList.value.filter(p => p.type === props.typeFilter && p.name.toLowerCase().includes(props.searchProductTitle.toLowerCase())).slice(listStart.value, listFinish.value)
  } else {
    paginatedProductList.value = productList.value.filter(p => p.name.toLowerCase().includes(props.searchProductTitle.toLowerCase())).slice(listStart.value, listFinish.value)
  }

  emit('paginateList', paginatedProductList.value)
}

watch(
    () => props.typeFilter,
    () => {
      paginationListNumber.value = 1
      listStart.value = 0
      listFinish.value = 8
      changeList()
    }
)
watch(
    () => props.searchProductTitle,
    () => {
      paginationListNumber.value = 1
      listStart.value = 0
      listFinish.value = 8
      changeList()
    }
)
watch(

    () => props.propl,
    () => {
      productList.value = props.filterProducts
      changeList()
    }

)
</script>


<style scoped lang="scss">

</style>