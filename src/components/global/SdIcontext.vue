<template>
	<div class="icon-text">
		<i :class="icon" v-if="icon != ''"></i>
		<div class="text">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
    props:{
        icon: {
            type: String,
        },
    }
}
</script>

<style lang="scss">
@import "../../assets/styles/_typography";

.icon-text {
	display: flex;
	align-items: center;

	.icon {
		font-size: 16px;
	}

	.text {
		@extend .tg-body-sm;
		margin-left: 8px;
	}
}

.icon-texts {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	margin: -8px;

	li {
		padding: 8px;

		&:last-child {
			margin-right: 0;
		}
	}
}
</style>