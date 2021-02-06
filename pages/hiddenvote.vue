<template>
  <div class="page-content">
    <b-alert v-if="error != null" variant="danger">{{ error }}</b-alert>
    <div v-if="this.$store.state.auth.email != null">
      <b-card>
        <b-card-body>
          Vote for Bagas
          <b-button v-on:click="vote(13518042)">vote</b-button>
        </b-card-body>
      </b-card>
      <b-card>
        <b-card-body>
          Vote for Alim
          <b-button v-on:click="vote(18218005)">vote</b-button>
        </b-card-body>
      </b-card>
      <b-card>
        <b-card-header>Add dpt</b-card-header>
        <b-card-body>
          <b-input v-model="newVoter"></b-input>
          <b-button v-on:click="addDpt()">add dpt</b-button>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      newVoter: 0
    };
  },
  methods: {
    async vote(nim) {
      const validNims = (await this.$axios.$get("/api/vote/candidates")).data;
      const idToken = await this.$fire.auth.currentUser.getIdToken(true);
      if (!validNims.find(validNim => validNim == nim)) {
        console.log("NIM is wrong");
        return;
      }

      try {
        const data = await this.$axios.$post("/api/vote", {
          toBeVotedNim: nim,
          idToken
        });
        console.log(data);
      } catch (err) {
        console.log(err.response.data.message);
        this.error = err.response.data.message;
      }
    },

    async addDpt() {
      try {
        const res = await this.$axios.$post("/api/dpt", {
          nim: this.newVoter
        });
      } catch (err) {
        console.log("something went wrong while adding dpt");
        console.error(err);
      }
    }
  }
};
</script>

<style></style>
