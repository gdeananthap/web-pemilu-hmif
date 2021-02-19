<template>
    <div class="container container-calon">
        <div class="space"></div>
        <div class="cont">
            <div class="box-head">
                <div class="status-calon"> {{status}} </div>
            </div>
            <div class="box-body">
                <div class="nama-calon"> 
                    <div><span class="highlight">{{nama}}</span></div> 
                    <div class="jurusan-calon"> {{jurusan}} </div>
                </div>
                <div class="foto-calon"> <img :src="foto" alt=""></div>
                <div class="top-content">
                    <div class="info-calon">
                        <div class="visimisi-calon">
                            <div class="title">Visi</div>
                            <div class="content visi-calon"> {{visi}} </div>
                            <div class="title">Misi</div>
                            <div v-for="(misi, id) in misi" :key="misi" class="content misi-calon">{{id+1}}. {{misi}} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardCalon',
    props: {
        status: {
            type: String,
            default: 'Calon Kahim - 00'
        },
        foto: {
            type: String,
            default: "kotak.png"
        },
        nama: {
            type: String,
            default: "Nama"
        },
        jurusan: {
            type: String,
            default: "Jurusan"
        },
        visi: {
            type: String,
            default: "Visi"
        },
        misi: {
            type: Array,
            default: []
        },
        organogram: {
            type: String,
            default: "organogram.jpg"
        }
    }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
*{
    text-align: center;
}
.box-head, .box-body, .container-calon, .decoration {
    display: flex;
}
img {
    width: 100%;
    border-radius: 10px;
}
.container-calon {
    width: 78%;
    flex-direction: column;
}
.space {
    height: 100px;
}
.box-head {
    background-color: #666666;
    border: 3px solid #666666;
    border-radius: 10px 10px 0px 0px;
    justify-content: space-between;
    padding: 15px 35px;
}

.box-body {
    border: 3px solid #666666;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-direction: column;
    padding: 25px;
}
.foto-calon {
    flex-basis: 40%;
    max-width: 75%;
    margin: auto;
    margin-bottom: 20px;
}
.jurusan-calon {
    font-size: 18px;
    font-weight: bold;
}
.status-calon {
    border-radius: 50px;
    background-color: white;
    width: 100%;
    padding: 5px;
    font-size: 24px;
    font-weight: bold;
}
.nama-calon {
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
}

.title {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 3px;
}
.visi-calon{
    margin-bottom: 20px;
}
.highlight {
    background-image: linear-gradient(0deg,#FFC801 18px,#FFC801 0,transparent 0,transparent);
    font-size: 30px;
}
@media only screen and (max-width: 768px) {
    .highlight{
        font-size: 24px;
    }
}
@media only screen and (max-width: 425px) {
    .status-calon {
        font-size: 16px;
    }
}
</style>