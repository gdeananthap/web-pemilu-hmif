<template>
	<div>
		<!-- Main Content -->
		<client-only>
			<div v-if="loading">
				Loading...
			</div>
			<div class="page-content" v-if="!loading">
					<section class="section-result">
						<b-container class="pt-5 text-center">
							<b-row class="justify-content-center">
								<b-col cols="12" md="6">
									<div class="card text-center result-title">
										<button class="btn-block btn-modify disabled">
											<h1 class="result-heading">Selamat kepada</h1>
										</button>
									</div>
									<img src="alim.webp" alt="" class="w-50">
									<h3 class="mt-3 mb-1 result-subtitle">Gde</h3>
									<h3 class="mt-2 mb-4 result-subtitle" >Atas terpilihnya menjadi ketua HMIF 2021/2022</h3>
								</b-col>
								<b-col cols="12" md="6">
									<div class="card text-center result-title">
										<button class="btn-block btn-modify disabled">
											<h1 class="result-heading">Terimakasih kepada</h1>
										</button>
									</div>
									<img src="alim.webp" alt="" class="w-50">
									<h3 class="mt-3 mb-1 result-subtitle">Gde</h3>
									<h3 class="mt-2 mb-4 result-subtitle" >Atas partisipasinya sebagai calon ketua HMIF 2021/2022</h3>
								</b-col>
							</b-row>
							<b-row class="justify-content-center mt-4">
									<b-col cols="12" md="10" class="text-center result-title">
										<div class="card">
											<button class="btn-block btn-modify disabled">
												<h1 class="result-heading">Hasil Perolehan Voting</h1>
											</button>
										</div>
									</b-col>
							</b-row>
							<ChartVote/>
						</b-container>
			</section>
			</div>
		</client-only>
	</div>
</template>

<script>
import ChartVote from "~/components/ChartVote";
export default {
	name: "result-page",
	components: {
		ChartVote
	},
	computed: {
		loading() {
			return this.$store.state.auth.loading;
		}
	}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
.section-result {
	margin-top: 60px;
	.result-heading{
		font-size: 32pt;
		color: black;
		@media screen and (max-width: 1250px) {
			font-size: 28pt;
  		}
		@media screen and (max-width: 985px) {
			font-size: 20pt;
  		}
		@media screen and (max-width: 400px) {
			font-size: 18pt;
  		}
	}
	.result-title{
		margin-bottom: 20px;
		.btn-modify{
			background-color: #ffc801 !important;
			color: black;
			cursor: default;
			border: none !important;
		}
	}
	.result-subtitle{
		font-size: 22pt;
		margin-bottom: 0px;
		color: black;
		@media screen and (max-width: 800px) {
			font-size: 18pt;
  	}
		@media screen and (max-width: 400px) {
			font-size: 16pt;
  	}
	}
}

</style>
