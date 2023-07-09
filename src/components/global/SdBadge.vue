<template>
	<span class="badge">
		<slot></slot>
	</span>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../../assets/styles/_typography";

.badge {
	@extend .tg-body-sm;

    display: inline-block;
	padding: 5px 10px;
	border-radius: 12px;
	border: 1px solid transparent;
}
</style>