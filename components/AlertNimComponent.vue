<template>
  <div class="container" :class="{ 'd-none': clicked }">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8 col-md-6">
        <div class="alert alert-success-custom" role="alert">
          <div class="row">
            <div class="col-10 d-flex">
              <p class="my-auto alert-message" v-if="email !== null">
                Halo, {{ email }}
              </p>
              <p class="my-auto alert-message" v-else>
                Anda belum login, silahkan login dengan menakan tombol di pojok
                kanan atas
              </p>
            </div>
            <div class="col-2 col-icon">
              <a @click="changeComplete" class="d-block w-100"
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
    padding: 0.25rem 0.50rem;
    color: white;
    background-color: #44B4C2;
    border-color: #44B4C2;
    margin-bottom: 0px;
    margin-top: 25px;
    .alert-message {
      font-size: 16px;
      font-family: Poppins;
      @media screen and (max-width: 400px) {
        font-size: 12px;
      }
    }
    .icon-cross {
      padding: 0px !important;
      max-width: 40px;
		  cursor: pointer;
    }
    .col-icon {
      @media screen and (max-width: 800px) {
        padding: 0px !important;
      }
    }
  }
  
</style>
