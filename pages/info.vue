<template>
  <div class="main-container" id="cakahim">
    <div class="sidebar">
      <div class="icon-bar" v-on:click="isOn = !isOn">
        <font-awesome-icon :icon="['fas', 'bars']" class="fa-2x icon" />
      </div>
      <transition-group name="fade" tag="div">
        <div v-if="isOn" id="nav-list" key="nav-list">
          <div key="cakahim" class="nav-title">
            <a href="#cakahim">CaKahim</a>
          </div>
          <div
            class="nav-calon"
            v-for="(calon, id) in cakahim"
            :key="id + 'cakahim'"
          >
            <a :href="'#' + calon.status">{{ calon.nama }}</a>
          </div>
          <div key="casenat" class="nav-title">
            <a href="#casenat">CaSenat</a>
          </div>
          <div
            class="nav-calon"
            v-for="(calon, id) in casenat"
            :key="id + 'casenat'"
          >
            <a :href="'#' + calon.status">{{ calon.nama }}</a>
          </div>
        </div>
      </transition-group>
    </div>
    <div>
      <card-calon
        v-for="(calon, id) in cakahim"
        :key="'cakahim' + id"
        :id="calon.status"
        :status="calon.status"
        :foto="calon.foto"
        :nama="calon.nama"
        :jurusan="calon.jurusan"
        :visi="calon.visi"
        :misi="calon.misi"
        :organogram="calon.organogram"
      />
    </div>
    <div>
      <card-calon
        v-for="(calon, id) in casenat"
        :key="'casenat' + id"
        :id="calon.status"
        :status="calon.status"
        :foto="calon.foto"
        :nama="calon.nama"
        :jurusan="calon.jurusan"
        :visi="calon.visi"
        :misi="calon.misi"
        :organogram="calon.organogram"
      />
    </div>
  </div>
</template>

<script>
import cakahim from "~/assets/calon/cakahim.json";
import casenat from "~/assets/calon/casenat.json";

import CardCalon from "~/components/CardCalon";

export default {
  components: {
    CardCalon
  },
  data() {
    return {
      cakahim: [],
      casenat: [],
      isOn: false
    };
  },
  mounted() {
    this.getData(cakahim, this.cakahim);
    this.getData(casenat, this.casenat);
  },
  methods: {
    getData(calon, array) {
      Object.values(calon).forEach(kategori => {
        // Untuk mengisi data calon
        const nomor = {
          status: kategori[0].status,
          nama: kategori[0].nama,
          jurusan: kategori[0].jurusan,
          visi: kategori[0].visi,
          misi: kategori[0].misi,
          foto: kategori[0].foto,
          organogram: kategori[0].organogram
        };
        array.push(nomor);
      });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
html {
  scroll-behavior: smooth;
}
.space {
  height: 90px;
}
.calon {
  text-align: center;
  margin-bottom: 50px;
}
h1,
.nomor-calon {
  font-size: 48px;
}
.nama-calon {
  font-size: 28px;
  font-weight: bold;
}
.highlight {
  background-image: linear-gradient(
    0deg,
    #ffc801 18px,
    #ffc801 0,
    transparent 0,
    transparent
  );
}
h2 {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 3px;
}
.foto {
  max-width: 50%;
  max-height: 360px;
  margin: 20px;
}
hr {
  border-top: 20px solid #ffc801;
}
.sidebar {
  position: fixed;
  right: 0px;
  padding: 20px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
}
.nav-title {
  background-color: #ffc801;
  border-radius: 5px 5px 0px 0px;
  text-align: right;
  font-weight: bold;
  font-size: 18px;
  margin-top: 15px;
  padding: 5px;
}
.nav-calon {
  padding: 3px;
  background-color: white;
}
a {
  color: black;
}
a:hover {
  color: black;
  background-color: #ffc801;
  text-decoration: none;
}
.icon-bar {
  align-self: flex-end;
}
.icon-bar:hover {
  cursor: pointer;
}
.hidden {
  display: none;
  opacity: 0;
}
#nav-list {
  transition: all 0.3s linear;
  display: block;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media only screen and (max-width: 768px) {
  .sidebar {
    display: none;
    opacity: 0;
  }
}
</style>
