<template>
  <div>

    <!-- Main Content -->
    <div class="page-content">
      <!-- Logo Besar Pemilu -->
      <section class="hero-pemilu">
        <b-container>
          <b-row class="justify-content-center">
            <b-col cols="12" class="text-center hero-logo d-none d-sm-block">
              <img src="@/public/images/hero-pemilu.png" style="max-width: 400px;" >
            </b-col>
            <b-col cols="12" class="my-2 text-center text-salah">
              <p>Mau kemana? :(</p>
            </b-col>
            <b-col cols="6" md="3" lg="2" class="my-2 text-center">
              <NuxtLink to="/" class="btn btn-warning btn-lg btn-block"> HOME </NuxtLink>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>

<style lang="scss">
.hero-pemilu {
  .hero-logo {
      margin-top: 0px;
  }
}
.text-salah{
  font-size: 40px;
}

.btn-warning{
  font-family: Poppins;
}

@media screen and (max-width: 500px) {
  .text-salah{
    font-size: 22px !important;
  }
}
</style>