<template>
  <body>
  <div class="registration-menu" style="">
    <div class="d-flex flex-column" >
      <div v-if="bord" style="padding-left: 5px; color: red">Напишите эл почту</div>
      <input  class="input" v-bind:class="{'borde': bord}"   placeholder="Введите электронную почту" v-model="mail">
      <input class="input" placeholder="Введите пароль" v-model="password">
      <button class="button" @click="regestrationFunc(mail,password)">Зарегистрироваться</button>
    </div>
  </div>
  </body>


</template>


<script setup >
import {ref} from "vue";

let mail = ref()
let password = ref()
let bord = false

let userData = []

function regestrationFunc(a, b) {

  if (a !== undefined && b !== undefined){
    userData.push({mail: a, password: b})
    mail.value = ""
    password.value = ""
    console.log(userData)
  } else {
    bord = true
  }


}

</script>


<style scoped>
* {
  margin: 0;
  padding: 0;

}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6f8880;
  height: 100vh;
  box-sizing: border-box;
}

.borde{
  border: 1px solid #f31f1f !important;
}

.registration-menu {
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b1b593;
  border-radius: 40px;
}

.input {
  margin-bottom: 10px;
  color: #ffffff;
  height: 40px;
  width: 300px;
  border: none;
  padding:  5px;
  background-color: #383739;
  border-radius: 7px;
}

.button {
  height: 40px;
  border: none;
  border-radius: 7px;
  background-color: #694488;
  color: white;
}
</style>