<template>
	<div class="avatar" :class="[sizeClass , colorClass]">
		<div class="avatar-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		size: {
			type: String,
			default: "md"
		},
		color: {
			type: String,
			default: "primary"
		}
	},
	computed:{
		sizeClass(){
			return "avatar-" + this.size;
		},
		colorClass(){
			if(this.color == "") return "";
			return "avatar-" + this.color;
		}
	}
}
</script>

<style lang="scss">
.avatar {
	display: inline-block;
	position: relative;
	width: 32px;
	height: 32px;

	.avatar-content {
		border-radius: 50%;
		overflow: hidden;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;

		span {
			font-weight: 500;
			font-size: 13px;
			line-height: 100%;
			color: #000;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 2px solid #d8d8fe;
		opacity: 0.8;
		border-radius: 50%;
		transition: opacity 0.3s ease-in-out;
	}
}

/* sizing */
.avatar-sm {
	width: 24px;
	height: 24px;

	.avatar-content {
		span {
			font-size: 11px;
		}
	}
}

.avatar-md {
	width: 32px;
	height: 32px;

	.avatar-content {
		span {
			font-size: 13px;
		}
	}
}

.avatar-lg {
	width: 40px;
	height: 40px;

	.avatar-content {
		span {
			font-size: 15px;
		}
	}
}

.avatar-xl {
	width: 48px;
	height: 48px;

	.avatar-content {
		span {
			font-size: 17px;
		}
	}
}

.avatar-xxl {
	width: 60px;
	height: 60px;

	.avatar-content {
		span {
			font-size: 19px;
		}
	}
}

/* colors */
.avatar-yellow {
	.avatar-content {
		span {
			color: #4f3903;
		}
	}

	&::before {
		border-color: #ffcf0f;
	}
}

.avatar-green {
	.avatar-content {
		span {
			color: #073e16;
		}
	}

	&::before {
		border-color: #44c13c;
	}
}

.avatar-red {
	.avatar-content {
		span {
			color: rgb(79, 3, 3);
		}
	}

	&::before {
		border-color: #ff513a;
	}
}

.avatar-blue {
	.avatar-content {
		span {
			color: #0d0d54;
		}
	}

	&::before {
		border-color: #4040f2;
	}
}
</style>