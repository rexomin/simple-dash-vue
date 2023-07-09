<template>
	<div class="sd-loading" :style="cssProps">
		<div class="lds-dual-ring bg" :class="[withBg ? 'with-bg' : '']"></div>
	</div>
</template>

<script>
export default {
	props: {
		withBg: {
			type: Boolean,
			default: false,
		},
		size: {
			type: Number,
			default: 32,
		},
		thickness: {
			type: Number,
			default: 6,
		},
		color: {
			type: String,
			default: "#0063f7",
		},
		bgSize: {
			type: Number,
			default: 100,
		}
	},
	computed: {
		cssProps() {
			return {
				'--loader-size': this.size + 'px',
				'--thickness': this.thickness + 'px',
				'--spinner-color': this.color,
				'--bg-size': this.bgSize + 'px',
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.sd-loading {
	width: max-content;

	.lds-dual-ring {
		display: inline-block;
		width: var(--loader-size);
		height: var(--loader-size);
		display: flex;
		align-items: center;
		justify-content: center;

		&.with-bg {
			background: #fff;
			width: var(--bg-size);
			height: var(--bg-size);
			border-radius: 12px;
		}
	}
	.lds-dual-ring:after {
		content: " ";
		display: block;
		width: var(--loader-size);
		height: var(--loader-size);
		border-radius: 50%;
		border: var(--thickness) solid var(--spinner-color);
		border-color: var(--spinner-color) transparent var(--spinner-color) transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
}

@keyframes lds-dual-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>