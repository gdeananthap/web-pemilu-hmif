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
									<div class="card result-title card-calon bg-transparent">
										<div class="card-head mb-2">
											<button class="btn-block btn-modify disabled">
												<h1 class="result-heading">Selamat kepada</h1>
											</button>
										</div>
										<img src="bagas.webp" alt="" class="w-50 mx-auto">
										<h3 class="mt-3 mb-1 result-subtitle"> <span class="highlight"> Bagas Setyo Wicaksono</span></h3>
										<h3 class="mt-2 mb-4 result-subtitle mx-1" >Atas terpilihnya menjadi ketua HMIF 2021/2022</h3>
									</div>
									
								</b-col>
								<b-col cols="12" md="6">
									<div class="card text-center result-title card-calon bg-transparent">
										<div class="card-head mb-2">
											<button class="btn-block btn-modify disabled">
												<h1 class="result-heading">Terimakasih kepada</h1>
											</button>
										</div>
										<img src="alim.webp" alt="" class="w-50 mx-auto">
										<h3 class="mt-3 mb-1 result-subtitle"> <span class="highlight"> Naufal Alim Wahib </span></h3>
										<h3 class="mt-2 mb-4 result-subtitle mx-1" >Atas partisipasinya sebagai calon ketua HMIF 2021/2022</h3>
									</div>
									
								</b-col>
							</b-row>
							<b-row class="justify-content-center mt-4">
									<b-col cols="12" md="10" class="text-center result-title">
										<div class="card card-calon card-img-bottom bg-transparent">
											<div class="card-head mb-2">
												<button class="btn-block btn-modify disabled">
													<h1 class="result-heading">Hasil Perolehan Voting</h1>
												</button>
											</div>
											<ChartVote/>
										</div>
									</b-col>
							</b-row>
							
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
	.card-calon{
		border: 3px solid #666666;
    	border-radius: 10px 10px 0px 0px;
	}
	.highlight {
    	background-image: linear-gradient(0deg,#FFC801 18px,#FFC801 0,transparent 0,transparent);
    }
	.result-heading{
		font-size: 24pt;
		color: black;
		@media screen and (max-width: 1250px) {
			font-size: 20pt;
  		}
		@media screen and (max-width: 985px) {
			font-size: 16pt;
  		}
		@media screen and (max-width: 400px) {
			font-size: 14pt;
  		}
	}
	.card-head{
		background-color: #666666;
		border: 3px solid #666666;
		border-radius: 5px 5px 0px 0px;
		justify-content: space-between;
		padding: 5px 25px;
	}
	.result-title{
		margin-bottom: 20px;
		.btn-modify{
			// background-color: #ffc801 !important;
			color: black;
			cursor: default;
			border: none;
			border-bottom: 3px solid #666666 !important;
			// border-radius: 5px 10px 0px 0px;
			margin-bottom: 5px;
			border-radius: 50px;
			background-color: white;
			width: 100%;
			padding: 5px;
			font-size: 24px;
		}
	}
	.result-subtitle{
		font-size: 22pt;
		margin-bottom: 0px;
		color: black;
		@media screen and (max-width: 800px) {
			font-size: 16pt;
  	}
		@media screen and (max-width: 400px) {
			font-size: 14pt;
  	}
	}
}

</style>
