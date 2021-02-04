<template>
    <div class="container container-calon">
        <div class="space"></div>
        <div class="cont">
            <div class="box-head">
                <div class="status-calon"> {{status}} </div>
            </div>
            <div class="box-body">
                <div class="nama-calon"> 
                    <div class="highlight">{{nama}}</div> 
                    <div class="jurusan-calon"> {{jurusan}} </div>
                </div>
                <div class="top-content">
                    <div class="info-calon">
                        <div class="visimisi-calon">
                            <div class="title">Visi</div>
                            <div class="content visi-calon"> {{visi}} </div>
                            <div class="title">Misi</div>
                            <div v-for="(misi, id) in misi" :key="misi" class="content misi-calon">{{id+1}}. {{misi}} </div>
                        </div>
                    </div>
                <div class="foto-calon"> <img :src="foto" alt=""></div>
                </div>
                <div class="organogram">
                    <div class="title">Organogram</div>
                    <div class="organogram-calon"> <img :src="organogram" alt=""></div>
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
    padding: 15px 0px 15px 15px;
}
.info-calon {
    flex-basis: 100%;
    padding: 10px;
    align-items: center;
}
.jurusan-calon {
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
}
.visimisi-calon {
    flex-basis: 70%;
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
.nama-calon {
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-end;
    margin-left: 10px;
}

.title {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 3px;
}
.visi-calon{
    margin-bottom: 20px;
}
hr {
    border-top: 5px solid #FFC801;
    margin: 0;
}
.highlight {
    background-image: linear-gradient(0deg,#FFC801 18px,#FFC801 0,transparent 0,transparent);
    font-size: 36px;
}
.top-content {
    display: flex;
    /* flex-direction: column; */
}
@media only screen and (max-width: 768px) {
    .top-content {
        flex-direction: column;
    }
    .status-calon {
        width: 100%;
        text-align: center;
    }
    .content, .nama-calon, .title {
        text-align: center !important;
    }
    .foto-calon{
        order: -1;
    }
    .nama-calon {
        flex-direction: column;
        align-items: center;
        margin: 10px 0;
    }
    .highlight{
        font-size: 24px;
    }
}
</style>