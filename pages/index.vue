<template>
  <div>

    <!-- Main Content -->
    <div class="page-content">

      <!-- Alert Component if login -->
        <AlertNimComponent/>

      <!-- Logo Besar Pemilu -->
      <section class="hero-pemilu">
        <b-container>
          <b-row class="text-center">
            <b-col cols="12" class="text-center hero-logo d-none d-sm-block" data-aos="zoom-in">
              <img src="@/public/images/hero-pemilu.jpg" style="max-width: 500px;" alt="">
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- Timeline -->
      <section class="section-timeline">
        <b-container>
          <div class="timeline-word text-center" data-aos="zoom-in" data-aos-delay="200">
            Timeline
          </div>
          <b-row class="justify-content-center">
            <b-col cols="12" md="7">
              <ul class="timeline">
                <li>
                  <div class="timeline-badge success" data-aos="zoom-in" data-aos-delay="300"></div>
                  <div class="timeline-panel" data-aos="fade-right" data-aos-delay="300">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Hearing 1</h4>
                      <p> 8 Februari 2021</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted text-right">
                  <div class="timeline-badge danger" data-aos="zoom-in" data-aos-delay="400"></div>
                  <div class="timeline-panel" data-aos="fade-left" data-aos-delay="400">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Hearing 2</h4>
                      <p> 8 Februari 2021</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge success" data-aos="zoom-in" data-aos-delay="500"></div>
                  <div class="timeline-panel" data-aos="fade-right" data-aos-delay="500">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Hearing 3</h4>
                      <p> 8 Februari 2021</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted text-right">
                  <div class="timeline-badge danger" data-aos="zoom-in" data-aos-delay="600"></div>
                  <div class="timeline-panel" data-aos="fade-left" data-aos-delay="600">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Debat</h4>
                      <p> 8 Februari 2021</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge success" data-aos="zoom-in" data-aos-delay="700"></div>
                  <div class="timeline-panel" data-aos="fade-right" data-aos-delay="700">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Masa Tenang</h4>
                      <p> 8 Februari 2021</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted text-right">
                  <div class="timeline-badge danger" data-aos="zoom-in" data-aos-delay="800"></div>
                  <div class="timeline-panel" data-aos="fade-left" data-aos-delay="800">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Pemungutan Suara</h4>
                      <p> 8 Februari 2021</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge success" data-aos="zoom-in" data-aos-delay="900"></div>
                  <div class="timeline-panel" data-aos="fade-right" data-aos-delay="900">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Perhitungan Suara</h4>
                      <p> 8 Februari 2021</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted text-right">
                  <div class="timeline-badge danger" data-aos="zoom-in" data-aos-delay="1000"></div>
                  <div class="timeline-panel" data-aos="fade-left" data-aos-delay="1000">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Pengumuman</h4>
                      <p> 8 Februari 2021</p>
                    </div>
                  </div>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
import AlertNimComponent from '../components/AlertNimComponent'

export default {
  name : "landing-page",
  components : {
    AlertNimComponent
  }
}
</script>

<style lang="scss">
.hero-pemilu {
  .hero-logo {
      margin-top: 25px;
  }
}

.section-timeline {
  p {
    margin-bottom: 0rem;

    @media (max-width: 768px) {
        font-size: 9px;
    }
  }

  .timeline-word {
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 54px;
    line-height: 83px;
  }

  .timeline {
    list-style: none;
    padding: 20px 0 20px;
    position: relative;
  }

  .timeline:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 6px;
    background-color: #666666;
    left: 50%;
    margin-left: -1.5px;
  }

  .timeline>li {
    margin-bottom: 20px;
    position: relative;
  }

  .timeline>li:before,
  .timeline>li:after {
    content: " ";
    display: table;
  }

  .timeline>li:after {
    clear: both;
  }

  .timeline>li:before,
  .timeline>li:after {
    content: " ";
    display: table;
  }

  .timeline>li:after {
    clear: both;
  }

  .timeline>li>.timeline-panel {
    font-family: Roboto;
    color: black;
    width: 50%;
    float: left;
    border: 1px solid #d4d4d4;
    background-color: #44B4C2;
    border-radius: 2px;
    padding: 10px;
    position: relative;
    margin-bottom: 40px;
  }

  .timeline>li.timeline-inverted+li:not(.timeline-inverted),
  .timeline>li:not(.timeline-inverted)+li.timeline-inverted {
    margin-top: -60px;
  }

  .timeline>li:not(.timeline-inverted) {
    padding-right: 90px;
  }

  .timeline>li.timeline-inverted {
    padding-left: 90px;
  }



  .timeline>li>.timeline-panel:after {
    position: absolute;
    top: 27px;
    right: -14px;
    display: inline-block;
    border-top: 14px solid transparent;
    border-left: 14px solid #3EA0AD;
    border-right: 0 solid #3EA0AD;
    border-bottom: 14px solid transparent;
    content: " ";
  }

  .timeline>li>.timeline-badge {
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 1.4em;
    text-align: center;
    position: absolute;
    top: 26px;
    left: 50%;
    margin-left: -13px;
    background-color: #999999;
    z-index: 100;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  .timeline>li.timeline-inverted>.timeline-panel {
    float: right;
    background-color: #E45642;
  }

  .timeline>li.timeline-inverted>.timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    border-left-color: #D04C3D;
    left: -15px;
    right: auto;
  }

  .timeline>li.timeline-inverted>.timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    border-right-color: #D04C3D;
    left: -14px;
    right: auto;
  }

  .timeline-badge.primary {
    background-color: #2e6da4 !important;
  }

  .timeline-badge.success {
    background-color: #3EA0AD !important;
  }

  .timeline-badge.warning {
    background-color: #f0ad4e !important;
  }

  .timeline-badge.danger {
    background-color: #D04C3D !important;
  }

  .timeline-badge.info {
    background-color: #5bc0de !important;
  }

  .timeline-title {
    @media (max-width: 768px) {
        font-size: 18px;
    }
    margin-top: 0;
    color: inherit;
  }

  .timeline-body>p,
  .timeline-body>ul {
    margin-bottom: 0;
  }

  .timeline-body>p+p {
    margin-top: 5px;
  }
}
</style>
