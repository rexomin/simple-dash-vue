<template>
	<div class="sd-section-card">
		<div class="sd-section-card-header">
			<div class="sd-section-card-title">
				{{title}}
			</div>

			<div class="sd-section-card-title-right">
				<slot name="header-right"></slot>
			</div>
		</div>

		<div class="sd-section-card-content">
			<slot></slot>
		</div>

		<div class="sd-section-card-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "",
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables";

.sd-section-card {
	background: #ffffff;
	border-radius: 12px;
	padding: 20px 32px;
	display: flex;
	flex-direction: column;

	@include only-phone-md {
		padding: 16px;
	}

	.sd-section-card-header {
		display: flex;
		align-items: center;
		margin-bottom: 32px;

		.sd-section-card-title {
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			letter-spacing: 0.2px;
			color: #1c1c28;

			@include only-phone-lg {
				font-size: 18px;
				line-height: 22px;
			}
		}

		.sd-section-card-title-right {
			flex: 1;
			display: flex;
			justify-content: flex-end;
		}
	}

	.sd-section-card-content {
		flex: 1;
		overflow-y: auto;
		padding: 0 32px;
		margin: 0 -32px;

		@include only-phone-md {
			padding: 0 16px;
			margin: 0 -16px;
		}
	}
}
</style>