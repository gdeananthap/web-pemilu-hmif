<template>
  <div>
    <NavbarComponent />
    <div class="wrapss">
      <Nuxt />
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent'
import NavbarComponent from '../components/NavbarComponent'
export default {
  name :"default-layout",
  components : {
    NavbarComponent,
    FooterComponent
  },
  created (){
    console.log(this.$route.fullPath)
  }
}
</script>

<style lang="scss">
.wrapss{
  min-height: calc(75vh - 70px);
}
@media (max-width: 768px) {
  html,
  body {
    width: auto !important;
    overflow-x: hidden !important;
  }
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");
body {
    font-family: "Poppins", sans-serif;
}

.page-content {
  margin-top: 100px;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
