<template>
	<div class="avatar-with-name">
		<slot></slot>

		<div class="avatar-name">
			<span>{{ name }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
	},
}
</script>

<style lang="scss">
@import "../../assets/styles/_typography";

.avatar-with-name {
	display: flex;
	align-items: center;
	justify-content: center;

	.avatar-name {
		@extend .tg-body-md;

		margin-left: 10px;
		flex: 1;
	}
}
</style>