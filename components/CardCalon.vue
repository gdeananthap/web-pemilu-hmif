<template>
    <div class="container-calon">
        <div class="space"></div>
        <div class="cont">
            <div class="box-head">
                <div class="status-calon"> {{status}} </div>
                <!-- <div class="decoration">
                    <div class="circ-1"></div>
                    <div class="circ-2"></div>
                    <div class="circ-3"></div>
                </div> -->
            </div>
            <div class="box-body">
                <div class="foto-calon"> <img :src="foto" alt=""></div>
                <div class="info-calon">
                    <div class="nama-calon"> <span class="highlight">{{nama}}</span> <span class="jurusan-calon"> {{jurusan}} </span></div>
                    <div class="detail-calon">
                        <div class="visimisi-calon">
                            <div class="title">Visi</div>
                            <div class="visi-calon"> {{visi}} </div>
                            <div class="title">Misi</div>
                            <div v-for="(misi, id) in misi" :key="misi" class="content misi-calon">{{id+1}}. {{misi}} </div>
                        </div>
                        <div class="organogram">
                            <div class="title">Organogram</div>
                            <div class="organogram-calon"> <img :src="organogram" alt=""></div>
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
            default: "yena.jpg"
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
            tyoe: String,
            default: "organogram.jpg"
        }
    }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.box-head, .box-body, .container-calon, .decoration {
    display: flex;
}
img {
    width: 100%;
    border-radius: 10px;

}
.container-calon {
    width: 78%;
    margin: auto;
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
    padding: 15px;
}

.box-body {
    border: 3px solid #666666;
    border-radius: 0px 0px 10px 10px;
    display: flex;
}
.foto-calon {
    flex-basis: 30%;
    padding: 15px;
}
.info-calon {
    flex-basis: 70%;
    padding: 10px 10px 10px 0px;
}
.jurusan-calon {
    font-size: 18px;
    font-weight: bold;
}
.detail-calon {
    display: flex;
}
.visimisi-calon {
    flex-basis: 70%;
}
.organogram {
    flex-basis: 60%;
    position: relative;
}
.status-calon {
    border-radius: 50px;
    background-color: white;
    width: 40%;
    padding: 5px;
    padding-left: 20px;
    text-align: left;
    font-size: 24px;
    font-weight: bold;
}
.circ-1, .circ-2, .circ-3 {
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin: 10px;
}

.circ-1 {
    background-color: #3EA0AD;
}

.circ-2 {
    background-color: #FFC801;
}

.circ-3 {
    background-color: #BB4537;
}

.organogram-calon {
    width: 100%;
    position: absolute;
    z-index: -1;
}
.nama-calon {
    font-size: 36px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}
.title {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-top: 5px;
    margin-bottom: 3px;
}
hr {
    border-top: 5px solid #FFC801;
    margin: 0;
}
.highlight {
    background-image: linear-gradient(0deg,#FFC801 15px,#FFC801 0,transparent 0,transparent);
}

@media only screen and (max-width: 768px) {
    .box-head, .box-body, .container-calon, .decoration, .detail-calon {
        flex-direction: column;
    }
    .status-calon {
        width: 100%;
        text-align: center;
    }
    html {
        text-align: center;
    }
}
</style>