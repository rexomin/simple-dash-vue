<template>
	<div class="micro-card">
		<slot></slot>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../../assets/styles/_typography";

.micro-card {
	padding: 12px 24px;
	border: 1px solid #eaecee;
	border-radius: 12px;
	display: flex;
	align-items: center;
	transition: all 0.3s ease-in-out;

	&:hover {
		box-shadow: 0 0 6px rgba(33, 33, 33, 0.2);
	}

	.micro-card-img {
		width: 40px;
		height: 40px;
		border-radius: 4px;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.micro-card-content {
		flex: 1;
		margin-left: 16px;

		.micro-card-title {
			@extend .tg-body-md;
		}

		.micro-card-desc {
			@extend .tg-body-sm;
			color: #4f5b67;
			margin-top: 2px;
		}
	}
}
</style>