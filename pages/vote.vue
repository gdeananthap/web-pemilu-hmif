<template>
  <div>
    <div v-if="!isVotingEnded && loadEnd" class="page-content">
      <div v-if="showTataCara" class="tatacara">
        <div class="votemenu">
          <button class="selected" @click="showTataCara = true">
            Tata Cara Voting
          </button>
          <button class="notSelected" @click="showTataCara = false">
            Surat Suara
          </button>
        </div>
        <div class="col-md-8 col-lg-8">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="shadow-none"
                  block
                  v-b-toggle.accordion-1
                  variant="info"
                  >1. Pahami peraturan dan tata cara Pemilu HMIF 2021</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Pemilu HMIF 2021 berbeda dari tahun-tahun sebelumnya.
                    Terlebih lagi pada tahun ini Pemilu dilaksanakan secara
                    daring. Sehingga terdapat beberapa penyesuaian pada
                    peraturan dan tata cara pemilu pada tahun ini. Pastikan anda
                    memahami peraturan dan tata cara Pemilu HMIF dengan
                    membacanya pada halaman
                    <a href="/peraturan">peraturan</a> dan halaman
                    <a href="/tatacara">tata cara</a> terlebih dahulu.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="shadow-none"
                  block
                  v-b-toggle.accordion-2
                  variant="info"
                  >2. Kenali calon Ketua Himpunan Mahasiswa Informatika ITB
                  2021</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Sebelum Anda menetapkan pilihan Anda pada salah satu calon,
                    pastikan anda telah mengetahui dan memahami nama, visi, dan
                    misi dari <a href="/info">setiap calon.</a>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="shadow-none"
                  block
                  v-b-toggle.accordion-3
                  variant="info"
                  >3. Tunggu waktu pemungutan suara dimulai</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Pemungutan suara akan dilakukan pada tanggal
                    <b>26 Februari 2021 - 1 Maret 2021.</b> Pastikan kamu telah
                    memahami tata cara pemilu dan menentukan pilihanmu sebelum
                    tanggal tersebut
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="shadow-none"
                  block
                  v-b-toggle.accordion-4
                  variant="info"
                  >4. Login untuk menggunakan hak suara Anda</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Setiap anggota biasa dapat melakukan Login menggunakan akun
                    STD yang dimiliki. Akan tetapi, hanya anggota biasa yang
                    memenuhi syarat menjadi DPT (Daftar Pemilih Tetap) yang
                    memiliki hak suara pada Pemilu HMIF 2021.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="shadow-none"
                  block
                  v-b-toggle.accordion-5
                  variant="info"
                  >5. Buka surat suara dengan mengklik menu surat
                  suara</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Setelah Anda Login, Anda akan melihat surat suara. Jika Anda
                    tidak terdaftar sebagai DPT maka akan ada pesan bahwa Anda
                    bukan DPT saat membuka surat suara. Jika Anda termasuk DPT
                    maka Anda dapat menggunakan hak suara Anda pada Pemilu HMIF
                    2021.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="shadow-none"
                  block
                  v-b-toggle.accordion-6
                  variant="info"
                  >6. Pilih calon Ketua HMIF 2021/2022 pilihan Anda!</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-6"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    Pada surat suara, silahkan klik tombol "Vote" yang ada pada
                    Calon Ketua HMIF 2021/2022 pilihan Anda. Jika Anda tidak
                    memilih kedua calon yang ada, silahkan memilih kotak kosong.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
      <div v-if="!showTataCara" class="suratsuara">
        <div class="votemenu">
          <button class="notSelected" @click="showTataCara = true">
            Tata Cara Voting
          </button>
          <button class="selected" @click="showTataCara = false">
            Surat Suara
          </button>
        </div>

        <div v-if="errors.length > 0">
          <closable-alert
            variant="danger"
            v-for="error in errors"
            :key="error.id"
            :text="error.message"
            class="my-2"
          />
        </div>

        <div v-if="success.state === true">
          <closable-alert variant="success" :text="success.message" />
        </div>
        <!-- user sudah memilih -->
        <AlertVoteDone v-if="isVoted && isLogin" />

        <!-- user bukan dpt -->
        <AlertNonDPT v-if="!isDpt && isLogin" />

        <!-- countdown telah selesai -->
        <div v-if="isVotingStarted && isLogin && isDpt !== null" class="vote">
          <div class="calonKetua">
            <div class="container">
              <h2>Surat Suara Pemilihan Umum</h2>
              <h2>Ketua Himpunan Mahasiswa Informatika ITB</h2>
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                  <div class="calon">
                    <div class="nomor-calon">
                      <h2>01</h2>
                    </div>
                    <img src="bagas.webp" alt="" />
                    <div class="nama-calon">
                      <h4>Bagas Setyo Wicaksono</h4>
                    </div>
                    <a
                      v-if="isDpt === true"
                      class="btn btn-lg"
                      @click="openModalAndVote('13518042')"
                      :disabled="!!hasVoted"
                      >VOTE</a
                    >
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="calon">
                    <div class="nomor-calon">
                      <h2>02</h2>
                    </div>
                    <img src="alim.webp" alt="" />
                    <div class="nama-calon">
                      <h4>Naufal Alim Wahib</h4>
                    </div>
                    <a
                      v-if="isDpt === true"
                      class="btn btn-warning btn-lg"
                      @click="openModalAndVote('18218005')"
                      :disabled="!!hasVoted"
                      >VOTE</a
                    >
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="calon">
                    <div class="nomor-calon">
                      <h2>03</h2>
                    </div>
                    <img src="kotak.png" alt="" />
                    <div class="nama-calon">
                      <h4>Kotak Kosong</h4>
                    </div>
                    <a
                      v-if="isDpt === true"
                      class="btn btn-warning btn-lg"
                      @click="openModalAndVote('kosong')"
                      :disabled="!!hasVoted"
                      >VOTE</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal -->
          <div v-if="showModal">
            <transition name="modal">
              <div class="modal-mask">
                <div class="modal-wrapper">
                  <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Apakah Anda Yakin?</h4>
                      </div>
                      <div class="modal-body">
                        Vote <strong>TIDAK BISA</strong> diganti
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="vote()"
                        >
                          Yakin
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary"
                          @click="showModal = false"
                        >
                          Tidak
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- countdown sudah selesai tapi belum login -->
        <div v-if="isVotingStarted && !isLogin">
          <Countdown />
        </div>

        <!-- countdown masih berlangsung -->
        <div v-if="!isVotingStarted" class="countdown">
          <Countdown v-on:start-vote="startVote" />
        </div>
      </div>
    </div>
    <div v-if="isVotingEnded && loadEnd" class="page-content">
      <!-- Logo Besar Pemilu -->
      <section class="hero-pemilu">
        <b-container>
          <b-row class="justify-content-center">
            <b-col cols="12" class="text-center hero-logo d-sm-block">
              <img
                src="@/public/images/hero-pemilu.png"
                class="hero-logo-width"
              />
            </b-col>
            <b-col cols="12" class="my-2 text-center text-salah">
              <p>
                Masa pemungutan suara telah berakhir, terimakasih sudah
                menggunakan hak suara anda. Hasil perhitungan suara akan segera
                diumumkan oleh panitia.
              </p>
            </b-col>
            <b-col cols="6" md="3" lg="2" class="my-2 text-center">
              <NuxtLink to="/" class="btn btn-warning btn-lg btn-block">
                HOME
              </NuxtLink>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
import Countdown from "@/components/Countdown";
import AlertVoteDone from "@/components/AlertVoteDone";
import AlertNonDPT from "@/components/AlertNonDPT";
import ClosableAlert from "@/components/ClosableAlert";
import { v4 } from "uuid";
import cookie from "js-cookie";

export default {
  data: () => ({
    isVotingStarted: true,
    isVotingEnded: false,
    loadEnd: false,
    isVoted: false,
    showModal: false,
    showTataCara: true,
    votedCandidate: null,
    votedCandidateName: "",
    errors: [],
    success: { state: false, message: null },
    hasVoted: false,
    nimToNameMap: {
      "13518042": "Bagas Setyo Wicaksono",
      "18218005": "Naufal Alim",
      kosong: "Kotak Kosong"
    }
  }),
  components: {
    Countdown,
    AlertVoteDone,
    AlertNonDPT,
    ClosableAlert
  },
  methods: {
    startVote() {
      this.isVotingStarted = !this.isVotingStarted;
    },
    openModalAndVote(nim) {
      if (this.hasVoted) return;
      this.votedCandidate = nim;
      this.showModal = true;
      this.votedCandidateName = this.nimToNameMap[this.votedCandidate];
    },
    checkVotingDuration() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2021, 2, 1, 23, 0, 0);
        const distance = end.getTime() - now.getTime();

        if (distance <= 0) {
          clearInterval(timer);
          this.isVotingEnded = true;
        }
        this.loadEnd = true;
      }, 1000);
    },
    async vote() {
      try {
        const idToken = await this.$fire.auth.currentUser.getIdToken();
        this.showModal = false;
        const axiosConfig = {
          headers: {
            idToken
          }
        };
        // todo
        const res = await this.$axios.post(
          "/api/vote",
          {
            toBeVotedNim: this.votedCandidate
          },
          axiosConfig
        );
        console.log(res);
        cookie.set("hasvoted", this.votedCandidateName);
        this.hasVoted = true;
        this.success = {
          state: true,
          message: "Successfully voted " + this.votedCandidateName
        };
      } catch (error) {
        console.log(error);
        if (this.hasVoted) {
          this.errors.push({
            id: v4(),
            message: "Anda sudah memberikan vote anda"
          });
        } else {
          this.errors.push({
            id: v4(),
            message: error.response.data.message
          });
        }
      }
    }
  },
  computed: {
    isLogin() {
      return !!this.$store.state.auth.email;
    },
    isDpt() {
      return this.$store.state.auth.isdpt;
    }
  },
  mounted: function() {
    const modifyHasVotedIfCookieExist = () => {
      if (!!cookie.get("hasvoted")) {
        this.hasVoted = !!cookie.get("hasvoted");
        this.votedCandidateName = cookie.get("hasvoted");
        this.success = {
          state: true,
          message: `Anda telah sukses memberikan suara anda untuk <strong>${this.votedCandidateName}</strong> (tenang saja informasi ini disimpan secara lokal oleh cookie dan tidak bisa diakses sembarang orang), bila ada kesalahan atau error, harap hubungi panitia`
        };
      }
    };
    modifyHasVotedIfCookieExist();
    this.checkVotingDuration();
  }
};
</script>

<style lang="scss" scoped>
.p-1 {
  padding: 0rem !important;
}

.tatacara {
  padding-top: 40px;
}
.suratsuara {
  padding-top: 40px;
}

.col-lg-8 {
  margin: auto;
  font-family: Poppins, sans-serif;

  button {
    background-color: #ffc801 !important;
    border-color: #ffc801 !important;
    background-color: #ffc801;
    color: black;
    font-size: 18px;
  }
  .btn {
    text-align: left;
  }

  .card {
    border: 0px;
    background-color: transparent;
  }
  .card-header {
    background-color: transparent;
    border-bottom: 0px;
  }

  .card-body {
    margin-top: 5px;
    background-color: #fff;
  }

  .card-text {
    text-align: justify;
    color: black;
  }

  .btn-info:not(:disabled):not(.disabled):active,
  .btn-info:not(:disabled):not(.disabled).active,
  .show > .btn-info.dropdown-toggle {
    color: black !important;
    background-color: #f7f7f7;
    box-shadow: 0 0 0 0;
  }
}

.votemenu {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-family: Poppins, sans-serif;

  button {
    padding: 5px 10px;
    color: black;
    border: 2px solid #333;
    background: #ffc801;
    border-radius: 20px;
    letter-spacing: 2px;
    transition: 0.2s ease-out;
    margin: 0 10px 30px;
    outline: none;
  }
  .notSelected {
    background: transparent;
  }
  .notSelected:hover {
    background: #ffc801;
  }
}

.calonKetua {
  text-align: center;

  h2 {
    text-align: center;
    font-weight: bold;
    padding-bottom: 0px;
  }
  h4 {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 0px;
  }
}

.calon {
  padding: 15px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 20px;
  border: 2px solid #333;
  transition: all 0.3s linear 0s;

  .btn {
    color: #333;
    font-weight: bold;
    background-color: #ffc801;
    border-color: #333;
    margin-top: 10px;
    position: relative;
  }

  .btn[disabled] {
    background-color: #ffc801;
    opacity: 0.5;
    cursor: default;
  }
}

.calon:hover {
  border: 2px solid#ffc801;
}
.calon img {
  width: 100%;
  height: auto;
  border: 2px solid #333;
  border-radius: 20px;
  transition: all 0.3s linear 0s;
}

.calon:hover img {
  border: 2px solid#ffc801;
}

.nama-calon {
  justify-content: center;
  margin: 0;
  align-items: center;
  h3 {
    text-align: center;
  }
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-header,
.modal-body {
  background-color: #ffc801;
  justify-content: center;
  border-bottom: 0px;
}

.modal-footer {
  background-color: #ffc801;
  justify-content: center;
  border-top: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.modal-content {
  border-radius: 100px;
}

.btn-primary {
  background-color: #3ea0ad;
}

.btn-secondary {
  background-color: #d04c3d;
}

@media only screen and (max-width: 990px) {
  .calon {
    margin-bottom: 20px;
  }
  .calonKetua {
    h2 {
      font-size: 28px;
    }
  }
}

@media only screen and (max-width: 576px) {
  .modal-dialog {
    h4 {
      text-align: center;
    }
    max-width: 60%;
    margin: auto;
  }

  .calonKetua {
    h2 {
      font-size: 24px;
    }
  }
}
@media only screen and (max-width: 425px) {
  .calonKetua {
    h2 {
      font-size: 24px;
    }
  }
}

@media only screen and (max-width: 375px) {
  .calonKetua {
    h2 {
      font-size: 18px;
    }
  }
}

.hero-pemilu {
  .hero-logo {
    margin-top: 30px;
  }
}
.text-salah {
  font-size: 22px;
  font-weight: 500;
}

.btn-warning {
  font-family: Poppins;
}
@media only screen and (min-width: 576px) {
  .hero-pemilu {
    .hero-logo-width {
      max-width: 400px;
    }
  }
}
@media only screen and (max-width: 425px) {
  .hero-pemilu {
    .hero-logo-width {
      max-width: 300px;
    }
  }
}

@media only screen and (max-width: 375px) {
  .hero-pemilu {
    .hero-logo-width {
      width: 300px;
    }
  }
}

@media screen and (max-width: 500px) {
  .text-salah {
    font-size: 16px !important;
  }
}
</style>
