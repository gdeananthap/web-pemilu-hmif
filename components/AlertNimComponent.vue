<template>
  <div class="container" :class="{ 'd-none': clicked }">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <div class="alert alert-success-custom" role="alert">
          <div class="row">
            <div class="col-10 d-flex">
              <p class="my-auto alert-message" v-if="email !== null">
                Halo, {{ email }}
              </p>
              <p class="my-auto alert-message" v-else>
                Anda belum login, silahkan login di kanan atas
              </p>
            </div>
            <div class="col-2 ml-auto">
              <a @click="changeComplete" class="d-block"
                ><img src="@/public/images/icon-cross.png" class="icon-cross"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    changeComplete() {
      this.clicked = !this.clicked;
    }
  },
  computed: {
    email() {
      return this.$store.state.auth.email;
    }
  }
};
</script>

<style lang="scss">
.alert-success-custom {
    padding: 0.25rem 0.75rem;
    color: white;
    background-color: #44B4C2;
    border-color: #44B4C2;
    margin-bottom: 0px;
    .alert-message {
      font-size: 36;
      font-family: Poppins;
    }
    .icon-cross {
        max-width: 40px;
		cursor: pointer;
    }
  }
  .icon-cross {
    max-width: 40px;
    cursor: pointer;
  }
</style>
