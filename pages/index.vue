<template>
  <div>
    <!-- Main Content -->
    <div class="page-content">
      <!-- Alert Component if login -->
      <AlertNimComponent />

      <!-- Logo Besar Pemilu -->
      <section class="hero-pemilu">
        <b-container>
          <b-row class="text-center">
            <b-col
              cols="12"
              class="text-center hero-logo d-none d-sm-block"
              data-aos="zoom-in"
            >
              <img
                src="@/public/images/hero-pemilu.jpg"
                style="max-width: 500px;"
                alt=""
              />
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- Timeline -->
      <section class="section-timeline">
        <b-container>
          <div
            class="timeline-word text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Timeline
          </div>
          <b-row class="justify-content-center">
            <b-col cols="12" xl="10">
              <div class="timeline">
                <div
                  class="container-left left"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <div class="content-right text-left">
                    <div class="timeline-info">
                      <p>Hearing-1</p>
                    </div>
                    <div class="timeline-time">
                      <p>11 Feb 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  class="container-right right"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div class="content-left text-right">
                    <div class="timeline-info">
                      <p>Hearing-2</p>
                    </div>
                    <div class="timeline-time">
                      <p>15 Feb 2021 </p>
                    </div>
                  </div>
                </div>
                <div
                  class="container-left left"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <div class="content-right text-left">
                    <div class="timeline-info">
                      <p>Hearing-3</p>
                    </div>
                    <div class="timeline-time">
                      <p> 18 Feb 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  class="container-right right"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  <div class="content-left text-right">
                    <div class="timeline-info">
                      <p>Debat</p>
                    </div>
                    <div class="timeline-time">
                      <p>22 Feb 2021 </p>
                    </div>
                  </div>
                </div>
                <div
                  class="container-left left"
                  data-aos="fade-right"
                  data-aos-delay="700"
                >
                  <div class="content-right text-left">
                    <div class="timeline-info">
                      <p>Masa Tenang</p>
                    </div>
                    <div class="timeline-time">
                      <p> 23-25 Feb 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  class="container-right right"
                  data-aos="fade-left"
                  data-aos-delay="800"
                >
                  <div class="content-left text-right">
                    <div class="timeline-info">
                      <p>Pemungutan Suara</p>
                    </div>
                    <div class="timeline-time">
                      <p>26 Feb - 1 Mar 2021 </p>
                    </div>
                  </div>
                </div>
                <div
                  class="container-left left"
                  data-aos="fade-right"
                  data-aos-delay="900"
                >
                  <div class="content-right text-left">
                    <div class="timeline-info">
                      <p>Penghitungan Suara</p>
                    </div>
                    <div class="timeline-time">
                      <p> 2 Mar 2021</p>
                    </div>
                  </div>
                </div>
                <div
                  class="container-right right"
                  data-aos="fade-left"
                  data-aos-delay="1000"
                >
                  <div class="content-left text-right">
                    <div class="timeline-info">
                      <p>Pengumuman</p>
                    </div>
                    <div class="timeline-time">
                      <p>3 Mar 2021 <i class="d-sm-none fa fa-calendar"></i></p>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
import AlertNimComponent from "@/components/AlertNimComponent";

export default {
  name: "landing-page",
  components: {
    AlertNimComponent
  },
  computed: {
    email() {
      return this.$store.state.auth.email;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
.hero-pemilu {
  .hero-logo {
    margin-top: 10px;
  }
}

.section-timeline {
  color: black !important;

  .timeline-info {
    font-size: 36px;
    line-height: 42px;

    p {
      margin-bottom: 6px;
    }
  }

  .timeline-time {
    font-size: 18px;
    line-height: 31px;

    p {
      margin-bottom: 6px;
    }
  }

  .timeline-word {
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 54px;
    line-height: 83px;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: "";
    position: absolute;
    width: 8px;
    background-color: #666666;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1;
  }

  /* Container around content */
  .container-right {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }

  .container-left {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }

  /* The circles on the timeline */
  .container-left::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    right: -14.5px;
    background-color: #d04c3d;
    border: 4px solid #d04c3d;
    top: 42px;
    border-radius: 50%;
    z-index: 1;
  }

  .container-right::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    right: -14.5px;
    background-color: #3ea0ad;
    border: 4px solid #3ea0ad;
    top: 42px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the left */
  .left {
    left: 0;
  }

  /* Place the container to the right */
  .right {
    left: 50%;
  }

  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 13.3px;
    width: 0;
    z-index: 1;
    right: 15px;
    border: medium solid #d04c3d;
    border-width: 45px 0 45px 25px;
    border-color: transparent transparent transparent #d04c3d;
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 13.3px;
    width: 0;
    z-index: 1;
    left: 15px;
    border: medium solid #3ea0ad;
    border-width: 45px 25px 45px 0;
    border-color: transparent#3EA0AD transparent transparent;
  }

  /* Fix the circle for containers on the right side */
  .right::after {
    left: -16px;
  }

  /* The actual content */
  .content-left {
    font-family: Roboto;
    padding: 5px 15px;
    background-color: #44b4c2;
    position: relative;
    border-radius: 6px;
  }

  .content-right {
    font-family: Roboto;
    padding: 5px 15px;
    background-color: #e45642;
    position: relative;
    border-radius: 6px;
  }

  @media screen and (max-width: 985px) {
    .timeline-info {
      padding-top: 4px;
      font-size: 26px;
      line-height: 30px;
    }
    .timeline-time {
      font-size: 18px;
      line-height: 31px;
      padding-bottom: 4px;
    }
  }

  @media screen and (max-width: 500px) {
    .timeline-info {
      padding-top: 4px;
      font-size: 22px;
      line-height: 31px;
    }
    .timeline-time {
      font-size: 18px;
      line-height: 31px;
      padding-bottom: 4px;
    }
  }

  @media screen and (max-width: 400px) {
    .timeline-info {
      padding-top: 4px;
      font-size: 18px;
      line-height: 31px;
    }
    .timeline-time {
      font-size: 18px;
      line-height: 31px;
      padding-bottom: 4px;
    }
  }

  /* Media queries - Responsive timeline on screens less than 768px wide */
  @media screen and (max-width: 768px) {
    .timeline-info {
      text-align: left !important;
    }
    .timeline-time {
      text-align: left !important;
    }

    /* Place the timelime to the left */
    .timeline::after {
      left: 31px;
    }

    /* Full-width containers */
    .container-right {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }

    .container-left {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }

    /* Make sure that all arrows are pointing leftwards */
    .container-left::before {
      left: 47px;
      border: medium solid #d04c3d;
      border-width: 45px 25px 45px 0;
      border-color: transparent #d04c3d transparent transparent;
    }

    .container-right::before {
      left: 47px;
      border: medium solid #3ea0ad;
      border-width: 45px 25px 45px 0;
      border-color: transparent #3ea0ad transparent transparent;
    }

    /* Make sure all circles are at the same spot */
    .left::after,
    .right::after {
      left: 15px;
    }

    /* Make all right containers behave like the left ones */
    .right {
      left: 0%;
    }
  }
}
</style>
