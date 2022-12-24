<template>
    <div class="div">
        <h1 class="header">Create an account!</h1>
  <div class="div2">
          <p class="input"><input type="text" placeholder="Email" v-model="email"/></p>
  <p class="input"><input type="password" placeholder="password" v-model="password"/></p>
  <p><button class="button" @click="register">submit</button></p>
  <p><button class="button" @click="signInWithGoogle">sign In With Google</button></p>
    </div>
  </div>
  
</template>

<script setup>
import{ref} from "vue";
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useRouter } from "vue-router";
const email=ref("");
const password=ref("");
const router = useRouter();
const register=()=>{
    const auth=getAuth();
    createUserWithEmailAndPassword(auth,email.value,password.value)
    .then((data)=>{
        console.log("you are successfully registered!");
        console.log(auth.currentUser);
        router.push('/HomeLogOut');
        console.log(data);
    })
    .catch((error)=> {
        console.log(error.code);
        alert(error.message);
    });


};
const signInWithGoogle=()=>{
const provider = new GoogleAuthProvider();
signInWithPopup(getAuth(),provider)
.then((result)=>{
console.log(result.user);
router.push('/HomeLogOut');

})
.catch((error)=>{
    console.log(error.code);
        alert(error.message);
});
};
</script>

<style lang="scss" scoped>
.div{
    background-color: #1e2139;
    margin: auto;
    padding: 50px;
}
.header{
    color:white
}
.button{
    margin-top: 15px;
    color: white;
    background-color: #7c5dfa;
}
.input{
    margin-top: 10px;
border-radius: 15%;
}
// .div2{
//     text-align: center;
// }

</style>