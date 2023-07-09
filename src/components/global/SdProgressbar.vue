<template>
	<div class="progress-bar">
		<div class="line-wrapper">
			<div class="line-bg">
				<div class="line-fill" :style="{ width: value + '%' }"></div>
			</div>
		</div>

		<div class="text">
			{{ value }}%
		</div>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Number,
			default: 0
		}
	}
}
</script>

<style lang="scss">
@import "../../assets/styles/_typography";

.progress-bar {
	display: flex;

	.line-wrapper {
		flex: 1;
		border-radius: 12px;
		overflow: hidden;
		height: 16px;

		.line-bg {
			width: 100%;
			height: 100%;
			background: #e6fbd9;
			border-radius: 12px;

			.line-fill {
				width: 0%;
				height: 100%;
				background: #2ba52e;
				border-radius: 12px;
				transition: width 0.3s ease-in-out;
			}
		}
	}

	.text {
		@extend .tg-body-md;

		min-width: 40px;
		margin-left: 8px;
	}
}
</style>