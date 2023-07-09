<template>
	<button class="btn" :class="[typeClass]" :disabled="disabled" @click="$emit('click' , $event)">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		type: String,
		disabled: {
			default: false,
			type: Boolean,
		},
	},
	computed: {
		typeClass() {
			if (this.type == "") return "";
			return "btn-" + this.type;
		}
	}
}
</script>

<style lang="scss">
@import "../../assets/styles/_typography";

.btn {
	@extend .tg-body-md;

	cursor: pointer;
	padding: 13px 20px;
	border-radius: 32px;
	overflow: hidden;
	border: 1px solid transparent;
	transition: all 0.2s ease-in-out;

	&.full-width {
		width: 100%;
	}

	.btn-icon {
		margin-right: 12px;
		font-size: 14px;
	}
}

@mixin btn-hover {
	&:hover {
		@content;
	}
}

@mixin btn-disabled {
	&.disabled,
	&:disabled {
		cursor: default;
		@content;
	}
}

.btn-primary {
	background: #4040f2;
	color: #fff;

	@include btn-hover {
		background: #3333d1;
	}

	@include btn-disabled {
		background: #d8d8fe;
	}
}

.btn-secondary {
	background: #fafafa;
	color: #0c1116;

	@include btn-hover {
		background: #f1f1f1;
	}

	@include btn-disabled {
		background: #fafafa;
		color: #d6dade;
	}
}

.btn-outline {
	background: transparent;
	border: 1px solid #eaecee;
	color: #0c1116;

	@include btn-hover {
		background: #fafafa;
	}

	@include btn-disabled {
		background: #fafafa;
		border-color: #fafafa;
		color: #d6dade;
	}
}
</style>