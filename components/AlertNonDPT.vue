<template>
  <div class="container" v-if="!clicked">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <div class="alert alert-success-nondpt" role="alert">
          <div class="row">
            <div class="col-10 d-flex">
              <p class="my-auto alert-message-nondpt">
                Anda tidak bisa vote karena bukan DPT !
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
  name: "AlertNonDPT",
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    changeComplete() {
      this.clicked = !this.clicked;
    }
  }
};
</script>

<style lang="scss">
.alert-success-nondpt {
  padding: 0.25rem 0.75rem;
  color: white;
  background-color: #e45642;
  border-color: #e45642;
  margin-bottom: 0px;
  .alert-message-nondpt {
    font-size: 36;
    font-family: Poppins;
  }
  .icon-cross {
    max-width: 40px;
    cursor: pointer;
  }
}
</style>
