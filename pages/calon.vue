<template>
    <div class="main-container">
        <div class="sidebar">
            <div class="icon-bar" @click="hideList">
                <font-awesome-icon :icon="['fas', 'bars']" class="fa-2x icon"/>
            </div>
            <div class="hidden" id="nav-list">
                <div class="nav-title"><a href="#cakahim">CaKahim</a></div>
                <div class="nav-calon" v-for="calon in cakahim" :key="calon"> <a :href="'#'+calon.status">{{calon.nama}}</a> </div>
                <div class="nav-title"><a href="#casenat">CaSenat</a></div>
                <div class="nav-calon" v-for="calon in casenat" :key="calon"> <a :href="'#'+calon.status">{{calon.nama}}</a> </div>
            </div>
        </div>
        <div v-for="calon in cakahim" :key="calon" class="calon" id="cakahim">
            <h1 class="nomor-calon" :id="calon.status"> <span class="highlight">{{calon.status}}</span> </h1>
            <div class="foto-calon"> <img :src="calon.foto" :alt="calon.nama" class="foto"> </div>
            <div class="identitas">
                <div class="nama-calon"> {{calon.nama}} </div>
                <div class="jurusan-calon">{{calon.jurusan}}</div>
            </div>
            <div class="visi-misi">
                <h2 class="subheading">Visi</h2>
                <div class="content">{{calon.visi}}</div>
                <h2 class="subheading">Misi</h2>
                <div v-for="(misi, id) in calon.misi" :key="id" class="content">{{id + 1}}. {{misi}}</div>
            </div>
            <div class="organogram">
                <h2 class="subheading">Organogram</h2>
                <div class="content"> <img :src="calon.organogram" alt="organogram" class="foto"> </div>
            </div>
        </div>
        <hr id="casenat">
        <div v-for="calon in casenat" :key="calon" class="calon">
            <h1 class="nomor-calon" :id="calon.status"> <span class="highlight">{{calon.status}}</span> </h1>
            <div class="foto-calon"> <img :src="calon.foto" :alt="calon.nama" class="foto"> </div>
            <div class="identitas">
                <div class="nama-calon"> {{calon.nama}} </div>
                <div class="jurusan-calon">{{calon.jurusan}}</div>
            </div>
            <div class="visi-misi">
                <h2 class="subheading">Visi</h2>
                <div class="content">{{calon.visi}}</div>
                <h2 class="subheading">Misi</h2>
                <div v-for="(misi, id) in calon.misi" :key="id" class="content">{{id + 1}}. {{misi}}</div>
            </div>
            <div class="organogram">
                <h2 class="subheading">Organogram</h2>
                <div class="content"> <img :src="calon.organogram" alt="organogram" class="foto"> </div>
            </div>
        </div>
    </div>
</template>

<script>
import cakahim from '~/assets/calon/cakahim.json'
import casenat from '~/assets/calon/casenat.json'

export default {
    data() {
        return {
            cakahim: [],
            casenat: [],
            isOn: false
        }
    },
  mounted() {
    this.getData(cakahim, this.cakahim)
    this.getData(casenat, this.casenat)
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
          organogram: kategori[0].organogram,
        }
        array.push(nomor)
      })
    },
    hideList() {
        if (this.isOn) {
            document.getElementById("nav-list").classList.add('hidden')
            this.isOn = false;
        } else {
            document.getElementById("nav-list").classList.remove('hidden')
            this.isOn = true;
        }
    }
  }
}
</script>

<style scooped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
html {
  scroll-behavior: smooth;
}
.calon {
    text-align: center;
    margin-bottom: 50px;
}
h1, .nomor-calon {
    font-size: 48px;
}
.nama-calon {
    font-size: 28px;
    font-weight: bold;
}
.highlight {
    background-image: linear-gradient(0deg,#FFC801 18px,#FFC801 0,transparent 0,transparent);
}
h2 {
    font-family: 'Roboto', sans-serif;
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
    border-top: 20px solid #FFC801;
    margin-bottom: 40px;
}
.sidebar {
    position: fixed;
    right: 0px;
    padding: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
}
.nav-title {
    background-color: #FFC801;
    border-radius: 5px;
    text-align: right;
    font-weight: bold;
    font-size: 18px;
    margin-top: 15px;
    padding: 5px;
}
.nav-calon {
    padding: 3px;
}
a {
    color: black;
}
a:hover{
    color: black;
    background-color: #FFC801;
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
</style>