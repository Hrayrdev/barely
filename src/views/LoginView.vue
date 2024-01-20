<template>
  <body>
  <div class="registration-menu" style="">
      <div class="fz-64">Войти</div>
    <InputField v-model="email"  :placeholder="'Введите ваш email'"/>

<!--    <input  class="input"    placeholder="Введите электронную почту" v-model="email">-->
      <div v-if="wrongPassword" class="inappropriate-data">Введите правильный пароль</div>
    <InputField v-model="password"  :placeholder="'Введите пароль'"/>
    <button class="login-btn" @click="login(email, password)" >войти</button>
  </div>
  </body>
</template>


<script setup >
import {ref} from "vue";
import router from "@/router";
import InputField from "@/components/InputField.vue";

let localStorageUserData = JSON.parse(localStorage.getItem('list'))
let wrongPassword = ref(false)
let email = ref("")
let password = ref("")
let userData = []

if (localStorageUserData){
  userData = localStorageUserData
}
 function login(a,b){
   console.log(a)
  for (let i = 0; i < userData.length; i++){
    if (userData[i].email === a && userData[i].password === b){
      router.push('/myAccount')
    }

    else if (userData[i].email === a && userData[i].password !== b){
      wrongPassword.value = true
    }
  }

}

</script>



<style scoped lang="scss">

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

.borde{
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
.inappropriate-data{
  padding-left: 5px ;
  color: red;
}
.login-btn{
  width: 300px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #20DF7F;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
}

.fz-64{
  font-size: 64px;
  margin-bottom: 50px;
}


</style>