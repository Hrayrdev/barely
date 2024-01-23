<template>
  <CreateProduct @createProduct="createProductFunc"/>
  <button type="button" class="btn btn-primary" @click="goToBasket">
    Корзина
  </button>
  <button @click="addScore">addScore</button>
  <div class="d-flex justify-content-center mb-10">
    <input @input="searchProductsFunc" v-model="searchProductTitle">
  </div>
  <div style="display:flex;justify-content: center">
    <button class="flt-btn" @click="typeFiltration(0)  ">Все</button>
    <button class="flt-btn" @click="typeFiltration(1) ">С орехом</button>
    <button class="flt-btn" @click="typeFiltration(2)">Без ореха</button>
  </div>
  <div>
    <div class="d-flex"
         style="border: 1px solid green; width: 1240px; max-width: 1240px; margin: auto; display:flex; flex-wrap: wrap">
      <div class="" style=" width: 250px;padding: 20px; border: 1px solid red;  " v-for="product in filterProducts">
        <div style=""><img class="image-auto" :src='product.photo' alt=""></div>
        <div class="fz-20 mb-10" style="display:flex; justify-content: center">
          <div>{{ product.name }}</div>
          <div style="color: red">{{ product.id }}</div>
        </div>
        <div class="d-flex justify-content-between mb-4">
          <div class="fz-25 ">Цена</div>
          <div class="fz-25">{{ product.price }}</div>
        </div>
        <div class="d-flex justify-content-center " style="flex-direction: column">
          <div class="d-flex">
            <button type="button" class="update-btn btn btn-primary" @click="openUpdateDialog(product)"
                    data-bs-toggle="modal" data-bs-target="#UpdateProduct" style="width: 200px">
              Редактировать
            </button>

            <button @click="basketStatusFunc(product); " data-bs-toggle="modal" data-bs-target="#pro">
              <div style="width: 30px; "><img class="image-auto" :src="basketLogo(product)  ?  check : image" alt="">
              </div>
            </button>
          </div>
          <button @click="deleteProductFunc(product)">Удалить</button>
        </div>

      </div>
    </div>
    <UpdateProduct  :dataProduct="propsProduct" @updateProduct="updateProductFunc"/>

    <BasketListShow :product="basketProduct"  @basketCount="basketShowFunc" />
  </div>
  <Pagination :propl="propl" :filterProducts="productList" @paginateList="paginateList" :typeFilter="typeFilter"
              :searchProductTitle="searchProductTitle"/>
</template>
<script setup>
import CreateProduct from "@/components/CreateProduct.vue";
import {computed, onMounted, ref} from "vue";
import UpdateProduct from "@/components/UpdateProduct.vue";
import InputField from "@/components/InputField.vue";
import Pagination from "@/components/Pagination.vue";
import image from '../assets/BaskedAddLogo.png'; //file-loader вернет путь к картинке
import check from '../assets/Check.svg';
import BasketListShow from "@/components/BasketListShow.vue";
import store from "@/store";
import router from "@/router"; //file-loader вернет путь к картинке

function openUpdateDialog(product) {
  propsProduct.value = product
}

const basketProduct = ref({name: ''})
const av = ref(true)
const propl = ref(0)
const searchProductTitle = ref('')
const propsProduct = ref({})
const filterProductList = ref([])
const productList = ref([
  {
    id: 1,
    type: 1,
    name: 'Пахлава ',
    price: 500,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },

  {
    id: 2,
    type: 2,
    name: 'Сочник',
    price: 250,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 3,
    name: 'Гата',
    type: 2,
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 4,
    type: 1,
    name: 'Гата с орехом',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 5,
    type: 1,
    name: 'Мутаки',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 6,
    type: 2,
    name: 'Слойка с маком',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 7,
    type: 1,
    name: 'Пахлава ',
    price: 500,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },

  {
    id: 8,
    type: 2,
    name: 'Сочник',
    price: 250,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 9,
    name: 'Гата',
    type: 2,
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 10,
    type: 1,
    name: 'Гата с орехом',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 11,
    type: 1,
    name: 'Мутаки',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 12,
    type: 2,
    name: 'Слойка с маком',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 13,
    type: 1,
    name: 'Гата с орехом',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 14,
    type: 1,
    name: 'Мутаки',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 15,
    type: 2,
    name: 'Слойка с маком',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 16,
    type: 1,
    name: 'Гата с орехом',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 17,
    type: 1,
    name: 'Мутаки',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 18,
    type: 2,
    name: 'Слойка с маком',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 19,
    type: 1,
    name: 'Гата с орехом',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },
  {
    id: 20,
    type: 1,
    name: 'Мутаки',
    price: 350,
    basketStatus: false,
    photo: 'https://gotovim-doma.ru/images/recipe/6/35/6350d681fc0fced705fbdd58ca1f3d79_l.jpg'
  },


])
const paginatedList = ref([])
const basketList = ref([])


function createProductFunc(newValue) {
  productList.value.push({
    id: newValue.id,
    type: Number(newValue.type),
    name: newValue.name,
    price: newValue.price,
    photo: newValue.photo
  })
  filterProductList.value.push({
    id: newValue.id,
    type: Number(newValue.type),
    name: newValue.name,
    price: newValue.price,
    photo: newValue.photo,
  })
  propl.value += 1

}


function updateProductFunc(updateProduct) {
  updateProduct.value.type = Number(updateProduct.value.type)
  for (let i = 0; i < productList.value.length; i++) {
    if (productList.value[i].id === updateProduct.value.id) {
      productList.value[i] = updateProduct.value
      filterProductList.value[i] = updateProduct.value
      propl.value += 1

    }
  }

}


function deleteProductFunc(product) {
  for (let i = 0; i < productList.value.length; i++) {
    if (productList.value[i].id === product.id) {
      productList.value.splice(i, 1)
      filterProductList.value.splice(i, 1)
      propl.value += 1
      console.log(productList.value)
    }
  }

}


const typeFilter = ref(0)


function searchProductsFunc() {

  if (searchProductTitle.value !== '') {
    productList.value.filter(item => item.name.toLowerCase().includes(searchProductTitle.value.toLowerCase()))


  }
}


const filterProducts = computed(() => {
      if (typeFilter) {
        if (typeFilter.value === 0) {
          return paginatedList.value.filter(p => p.name.toLowerCase().includes(searchProductTitle.value.toLowerCase()))
        } else {

          return paginatedList.value.filter(p => p.type === typeFilter.value && p.name.toLowerCase().includes(searchProductTitle.value.toLowerCase()))
        }
      }

    }
)

function paginateList(list) {
  paginatedList.value = list
}

onMounted(() => {

  paginatedList.value = productList.value.slice(0, 8)

})

function addScore() {
  store.commit('increment', 50);
  console.log(store.state.count)
}
function typeFiltration(value) {
  typeFilter.value = value
}


function basketLogo(product) {
  if (product.basketStatus) {
    return true
}
}
function basketStatusFunc(product) {
  basketProduct.value = product
}

function  basketShowFunc(product){
  // store.commit('increment', 50);

  for (let i = 0; i < productList.value.length; i++) {
    if (productList.value[i].id === product.id) {
      productList.value[i].basketStatus = !productList.value[i].basketStatus
      product.basketStatus = !product.basketStatus
    }

  }
  if (product.basketStatus) {
    store.commit('getBasketList')
    let s = []
    s.push(product)
    store.commit('increment', s);
  } else {
    for (let i = 0; i < basketList.value.length; i++) {
      if (basketList.value[i].id === product.id) {
        basketList.value.splice(i, 1)

      }
    }
  }



  console.log(basketList.value)


}



function goToBasket(){
  router.push('/basket')

}


</script>

<style scoped lang="scss">
body {
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
  border: 1px solid rebeccapurple;
  padding: 5px;
  display: flex;

  flex-wrap: nowrap;

}

.flt-btn {
  border: none;
  margin-right: 10px;
  background-color: #694488;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  margin-bottom: 30px;
}

.image-auto {
  width: 100%;
  height: auto;
}

.fz-25 {
  font-size: 25px;
}

.fz-20 {
  font-size: 20px;
}

.mb-10 {
  margin-bottom: 10px;
}

.test {
  background-color: red
}
</style>