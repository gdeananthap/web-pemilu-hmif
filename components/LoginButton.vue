<template>
  <b-nav-item to="/" class="my-auto">
    <b-button
      v-if="loggedIn == false"
      block
      variant="success"
      class="px-3 text-white"
      size="lg"
      v-on:click="login()"
      >Login</b-button
    >
    <b-button
      v-else
      block
      variant="danger"
      class="px-3 text-white"
      size="lg"
      v-on:click="logout()"
      >Logout</b-button
    >
  </b-nav-item>
</template>

<script>
export default {
  name: "LoginButton",
  data() {
    return {
      loggedIn: false,
      error: false
    };
  },
  methods: {
    login() {
      var provider = new this.$fireModule.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        'hd': 'std.stei.itb.ac.id'
      });
      this.$fire.auth
        .signInWithPopup(provider)
        .then(result => {
          const user = result.user;
          if (!!user) {
            this.loggedIn = true;
          } else {
            this.error = true;
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    async logout() {
      try {
        const res = await this.$fire.auth.signOut();
        console.log("logged out successfully");
      } catch (err) {
        this.error = true;
      }
    }
  },
  created() {
    this.$fire.auth.onAuthStateChanged(user => {
      const isLoggedIn = !!user;
      this.loggedIn = isLoggedIn;
    });
  }
};
</script>
