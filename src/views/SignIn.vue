<template>
    <div class="div">
        <h1 class="header">Sign in to your account!</h1>
  <p class="input"><input type="text" placeholder="Email" v-model="email"/></p>
  <p class="input"><input type="password" placeholder="password" v-model="password"/></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p ><button class="button" @click="register">submit</button></p>
  <p ><button  class="button" @click="signInWithGoogle">sign In With Google</button></p>
  <p class="new">
    <router-link  :to="{ name: 'Register' }" class="link">
        New Account?
    </router-link></p>
    </div>
</template>

<script setup>
import{ref} from "vue";
import {getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useRouter } from "vue-router";
const email=ref("");
const password=ref("");
const errMsg=ref("");
const router = useRouter();
const register=()=>{
    const auth=getAuth();
    signInWithEmailAndPassword(auth,email.value,password.value)
    .then((data)=>{
        console.log("you are successfully signed in!");
        console.log(auth.currentUser);
        router.push('/Account');
        console.log(data);
    })
    .catch((error)=> {
        console.log(error.code);
    switch (error.code){
        case"auth/invalid-email":
        errMsg.value="invalid email";
        break;
        case"auth/user-not-found":
        errMsg.value="no account with that email was found";
        break;
        case"auth/wrong-password":
        errMsg.value="incorrect password";
        break;
        default:
        errMsg.value="Email or password was incorrect";
        break;
    }
    });


};
const signInWithGoogle=()=>{
const provider = new GoogleAuthProvider();
signInWithPopup(getAuth(),provider)
.then((result)=>{
console.log(result.user);
router.push('/Account');

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
    border-radius: 20px;
}
.new{
    color: white;
    margin-top: 10px;
    text-align: center;
    text-decoration: underline;
}
.link{
    color: #757ebd;
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