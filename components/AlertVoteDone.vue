<template>
<div class="container" :class="{'d-none': clicked}">
	<div class="row justify-content-center">
		<div class="col-12 col-md-6 col-lg-6 col-xl-4">
			<div class="alert alert-success-vote" role="alert">
				<div class="row">
					<div class="col-10 d-flex">
						<p class="my-auto alert-message">Suara Anda telah terkirim.</p>
					</div>
					<div class="col-2 ml-auto">
						<a @click="changeComplete" class="d-block"><img src="@/public/images/icon-cross.png" class="icon-cross"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<script>
export default {
	name : "AlertVoteDone",
	data () {
		return {
			clicked : false
		}
	}, methods: {
		changeComplete(){
			this.clicked = !this.clicked;
		}
	}, 
}
</script>

<style lang="scss">
.alert-success-vote {
	background-color: #44b4c2;
	border-color: #44b4c2;
	padding: 0.25rem 0.5rem;
	color: white;
	margin-bottom: 10px;
	margin-top: 10px;
	p{
		text-align: center;
		font-size: 18px;
		@media screen and (max-width: 320px) {
		font-size: 12px;
		}
			@media screen and (max-width: 400px) {
		font-size: 14px;
		}
	}
	.icon-cross {
		padding: 0px !important;
		max-width: 40px;
		cursor: pointer;
		@media screen and (max-width: 400px) {
		max-width: 30px;
		}
	}
	.col-10{
		margin: auto;
		justify-content: center;

	}
	.col-icon {
		@media screen and (max-width: 800px) {
		padding: 0px !important;
		}
	}
  }
</style>
