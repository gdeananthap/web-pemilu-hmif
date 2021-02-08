<template>
  <div>
    <b-navbar toggleable="lg"  fixed="top" class="navbar-pemilu">
      <b-container>
        <b-navbar-brand class="logo-navbar"> 
          <NuxtLink to="/">
            <img src="@/public/images/navbar-logo-pemilu.png" alt="Logo Pemilu" class="w-25">
          </NuxtLink>
        </b-navbar-brand>
        <b-navbar-toggle target="navbarNav"></b-navbar-toggle>
        <b-collapse class="text-center" id="navbarNav" is-nav>
          <b-navbar-nav class="ml-auto d-flex">
            <b-nav-item to="/" exact active-class="active" class="my-auto" > 
              Home
            </b-nav-item>
            <b-nav-item to="/info" class="my-auto" active-class="active">
              Informasi Calon 
            </b-nav-item>
            <b-nav-item to="/tatacara" class="my-auto" active-class="active">
              Tata Cara
            </b-nav-item>
            <b-nav-item to="/peraturan" class="my-auto" active-class="active">
              Peraturan
            </b-nav-item>
            <b-nav-item to="/vote" class="my-auto" active-class="active"> 
              Vote
            </b-nav-item>
            <b-nav-item to="/" class="my-auto">
              <b-button block variant="success" class="px-3 text-white" size="md">Login</b-button>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name : "NavbarComponent",
  
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");

.navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
  color: black;
}

.navbar-pemilu {
  font-family: "Poppins", sans-serif;
  background-color: #FFC801 !important;
  padding-top: 0px;
  padding-bottom: 0px;
  .logo-navbar {
    max-height: 66px;
  }

  .nav-item {
    .nav-link {
      font-size: 16px;
    }
    :hover {
      color: black !important;
    }
    margin-left: 24px;
    font-weight: 500;
  }
}
</style>
