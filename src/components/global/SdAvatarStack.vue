<template>
	<ul class="avatar-stack">
		<slot></slot>
	</ul>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.avatar-stack {
	display: flex;
	align-items: center;
	justify-content: flex-start;

	.avatar-stack-item {
		margin-left: -20px;

		&:first-child {
			margin-left: 0;
		}
	}
}
</style>