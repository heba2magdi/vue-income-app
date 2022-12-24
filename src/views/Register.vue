<template>
    <div>
        <h1>create an account</h1>
  <p><input type="text" placeholder="Email" v-model="email"/></p>
  <p><input type="password" placeholder="password" v-model="password"/></p>
  <p><button @click="register">submit</button></p>
  <p><button @click="signInWithGoogle">sign In With Google</button></p>
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

<style>

</style>