<template>
  <div class="container" :class="{ 'd-none': clicked }">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8 col-md-8 col-lg-6">
        <div
          :class="
            `alert alert-custom ${
              isdpt && email!==null ? 'alert-success-custom' : 'alert-danger-custom'
            }`
          "
          role="alert"
        >
          <div class="row">
            <div class="col-10 d-flex">
              <p class="my-auto alert-message" v-if="email !== null && isdpt === false">
                Anda tidak terdaftar dalam daftar pemilih tetap (DPT).
              </p>
              <p class="my-auto alert-message" v-if="email !== null && isdpt === true">
                  Halo, {{ email.split("@")[0] }} ! Anda terdaftar sebagai DPT.
              </p>
              <p class="my-auto alert-message" v-if="email == null">
                  Anda belum login, silahkan login terlebih dahulu dengan akun STD.
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
    },
    isdpt() {
      return this.$store.state.auth.isdpt;
    }
  }
};
</script>

<style lang="scss">
.col-2{
  margin: auto;
}

.alert-success-custom {
  background-color: #44b4c2;
  border-color: #44b4c2;
    p{
    text-align: center;
    font-size: 18px;
    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
    @media screen and (max-width: 400px) {
      font-size: 14px;
    }
  }
}

.alert-danger-custom {
  background-color: #e45642;
  border-color: #e45642;
  p{
    text-align: center;
    font-size: 18px;
    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
    @media screen and (max-width: 400px) {
      font-size: 14px;
    }
  }
}

.alert-custom {
  padding: 0.25rem 0.5rem;
  color: white;
  margin-bottom: 0px;
  margin-top: 25px;
  .alert-message {
    font-family: Poppins;
    @media screen and (max-width: 320px) {
      font-size: 12px;
    }

  }
  .icon-cross {
    padding: 0px !important;
    max-width: 40px;
    cursor: pointer;
    @media screen and (max-width: 400px) {
      max-width: 30px;
    }
  }
  .col-10{
    margin: auto;
    justify-content: center;

  }
  .col-icon {
    @media screen and (max-width: 800px) {
      padding: 0px !important;
    }
  }
}
</style>
