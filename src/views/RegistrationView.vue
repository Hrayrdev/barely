<template>
  <body>
  <div class="registration-menu">
    <div class="fz-64">Регистрация</div>
    <div v-if="bord" class="inappropriate-data">Введите название эл почты</div>
    <InputField v-model="mail" :class="{borde: bord}" :placeholder="'Введите ваш email'"/>
    <div v-if="bord" class="inappropriate-data">Введите пароль</div>
    <InputField v-model="password" :class="{borde: bord}" :placeholder="'Введите пароль'"/>
    <button class="login-btn" @click="registration(mail, password)">Зарегистрироваться</button>
  </div>
  </body>

</template>


<script setup>
import InputField from "@/components/InputField.vue";

let localStorageUserData = JSON.parse(localStorage.getItem('list'))
import {ref} from "vue";
import router from "@/router";


let mail = ref("")
let password = ref("")
let bord = ref(false)
let userData = []

if (localStorageUserData) {
  userData = localStorageUserData
}


function registration(a, b) {

  if (a !== "" && b !== "") {
    userData.push({email: a, password: b})
    mail.value = ""
    password.value = ""
    localStorage.setItem('list', JSON.stringify(userData))
    router.push('/login')
  } else {
    bord.value = true
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #093545;
  height: 100vh;
  box-sizing: border-box;
}

.borde {
  border: 1px solid #f31f1f !important;
}

.registration-menu {
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
}

.input {
  margin-bottom: 10px;
  color: #ffffff;
  height: 40px;
  width: 300px;
  border: none;
  padding: 5px;
  background-color: #383739;
  border-radius: 7px;
}

.login-btn {
  width: 300px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #20DF7F;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
}

.button {
  height: 40px;
  border: none;
  border-radius: 7px;
  background-color: #694488;
  color: white;

}

.inappropriate-data {
  padding-left: 5px;
  color: red;
}

.fz-64 {
  font-size: 64px;
  margin-bottom: 50px;
}
</style>