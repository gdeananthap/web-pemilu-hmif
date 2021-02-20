<template>
  <div class="container" :class="{ 'd-none': clicked }">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8 col-md-6">
        <div
          :class="
            `alert alert-custom ${
              isdpt ? 'alert-success-custom' : 'alert-danger-custom'
            }`
          "
          role="alert"
        >
          <div class="row">
            <div class="col-10 d-flex">
              <p v-if="isdpt === false">
                Anda bukan seorang dpt
              </p>
              <div v-else>
                <p
                  class="my-auto alert-message"
                  v-if="email !== null && isdpt === true"
                >
                  Halo, {{ email }}, kamu merupakan dpt
                </p>
                <p class="my-auto alert-message" v-else>
                  Anda belum login, silahkan login dengan menakan tombol di
                  pojok kanan atas
                </p>
              </div>
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
.alert-success-custom {
  background-color: #44b4c2;
  border-color: #44b4c2;
}

.alert-danger-custom {
  background-color: #e45642;
  border-color: #e45642;
}

.alert-custom {
  padding: 0.25rem 0.5rem;
  color: white;
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
