<template>
<b-row class="justify-content-center"> 
    <b-col cols="12" md="6" class="py-3">
      <ChartVoteBase :chart-data="chartData" />
    </b-col>
</b-row>
</template>

<script>
export default {
  data() {
    return {
      chartData: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: ["Bagas", "Alim", "Kotak Kosong"],
        datasets: [
          {
            backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
            hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"],
            data: [188, 53, 45]
          }
        ]
      };
    }
  }
};
</script>
<style lang="scss">
.card{
    border: none;
    .card-body{
        padding-top: 0px;
    }
}
</style>