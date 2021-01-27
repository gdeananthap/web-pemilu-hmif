<template>
    <div class="main-container">
        <div class="sidebar">
            Ini sidebar
        </div>
        <div v-for="calon in cakahim" :key="calon" class="calon">
            <h1 class="nomor-calon"> <span class="highlight">{{calon.status}}</span> </h1>
            <div class="foto-calon"> <img :src="calon.foto" :alt="calon.nama" class="foto"> </div>
            <div class="identitas">
                <div class="nama-calon"> {{calon.nama}} </div>
                <div class="jurusan-calon">{{calon.jurusan}}</div>
            </div>
            <div class="visi-misi">
                <h2 class="subheading">Visi</h2>
                <div class="content">{{calon.visi}}</div>
                <h2 class="subheading">Misi</h2>
                <div v-for="(misi, id) in cakahim.misi" :key="id" class="content">{{id}} {{misi}}</div>
            </div>
            <div class="organogram">
                <h2 class="subheading">Organogram</h2>
                <div class="content"> <img :src="calon.organogram" alt="organogram" class="foto"> </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cakahim: [
                {
                    status: "CAKAHIM - 01",
                    nama: "Gde Anantha",
                    jurusan: "IF'19", 
                    visi: "Terwujudnya pendidikan tinggi yang bermutu serta kemampuan iptek dan inovasi untuk mendukung daya saing bangsa",
                    misi: ["Meningkatkan akses, relevansi, dan mutu pendidikan tinggi untuk menghasilkan SDM yang berkualitas", "Meningkatkan kemampuan Iptek dan inovasi untuk menghasilkan nilai tambah produk inovasi."],
                    foto: "yena.jpg",
                    organogram: "organogram.jpg"
                },
                {
                    status: "CAKAHIM - 01",
                    nama: "Gde Anantha",
                    jurusan: "IF'19", 
                    visi: "Lorem ipsum",
                    misi: "1. Menjadi kahim"
                }
            ],
            casenat: [
                {
                    status: "CAKAHIM - 01",
                    nama: "Gde Anantha",
                    jurusan: "IF'19", 
                    visi: "Lorem ipsum",
                    misi: "1. Menjadi kahim"
                },
                {
                    status: "CAKAHIM - 01",
                    nama: "Gde Anantha",
                    jurusan: "IF'19", 
                    visi: "Lorem ipsum",
                    misi: "1. Menjadi kahim"
                }
            ]
        }
    }
}
</script>

<style scooped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

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
</style>