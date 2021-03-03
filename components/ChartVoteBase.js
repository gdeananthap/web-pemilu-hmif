import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
	extends: Doughnut,
	mixins: [reactiveProp],
	props: ["chartData"],
	data() {
		return {
			options: {
				legend: {
					labels: {
						fontSize: 18
					}
				},  
				scales: {
					yAxes: [{
							display : false,
						}],
					xAxes: [{
						display : false,
						}]
				},
				responsive: true
			}
		};
	},
	mounted() {
		this.renderChart(this.chartData, this.options);
	}
};