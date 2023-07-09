<template>
	<transition name="fade">
		<div class="sd-modal" v-if="isShow">
			<div class="sd-modal-content-wrapper">
				<div class="sd-modal-content">
					<slot></slot>
				</div>
			</div>
			<div class="sd-modal-back" @click="hideModal"></div>
		</div>
	</transition>
</template>

<script>
export default {
	data(){
		return {
			isShow: this.value,
		}
	},
	props: {
		value: {
			default: false,
		}
	},
	methods: {
		hideModal(){
			this.isShow = false;
			this.$emit("input" , this.isShow);
		}
	},
	watch:{
		value(){
			this.isShow = this.value;
		}
	}
}
</script>

<style lang="scss" scoped>
.sd-modal {
	.sd-modal-content-wrapper {
		padding: 0 16px;
		width: 100%;
		max-width: 578px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;

		.sd-modal-content {
			width: 100%;
			background-color: #fff;
			padding: 35px;
			border-radius: 12px;
			max-height: 90vh;
			overflow-y: auto;
		}
	}

	.sd-modal-back {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #0005;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>