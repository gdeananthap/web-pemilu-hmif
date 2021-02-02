<template>
  <b-nav-item to="/" class="my-auto">
    <b-button
      block
      variant="success"
      class="px-3 text-white"
      size="lg"
      v-on:click="login()"
      >Login</b-button
    >
  </b-nav-item>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "LoginButton",
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const credential = result.credential;
          const token = credential.accessToken;
          const user = result.user;
        })
        .catch(error => {
          console.error(error);
          const errorCode = error.code;
          const errorMessage = error.errorMessage;
          const email = error.email;
          const credential = error.credential;
        });
    }
  }
};
</script>
