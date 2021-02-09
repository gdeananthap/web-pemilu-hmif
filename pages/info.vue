<template>
    <div class="main-container" id="cakahim">
        <div class="container">
          <div class="content-cakahim">
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
        </div>
    </div>
</template>

<script>
import cakahim from '~/assets/calon/cakahim.json'

import CardCalon from '~/components/CardCalon'

export default {
    components: {
        CardCalon
    },
    data() {
        return {
            cakahim: [],
        }
    },
  mounted() {
    this.getData(cakahim, this.cakahim)
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
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
html {
  scroll-behavior: smooth;
}
.main-container {
    width: 100%;
    margin: auto;
}
.content-cakahim {
    display: flex;
    align-items: flex-start;
}
@media only screen and (max-width: 768px) {
    .content-cakahim {
        flex-direction: column;
    }
}
</style>