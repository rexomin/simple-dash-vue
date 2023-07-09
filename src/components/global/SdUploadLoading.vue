<template>
	<div class="sd-upload-loading">
		<div class="sd-loader-container">
			<div class="sd-loader-indicator" :style="loaderIndicatorStyles"></div>
			<div class="sd-loader-content">
				<div class="sd-loader-icon">
					<i class="fas fa-paperclip"></i>
				</div>
				<div class="sd-loader-text">
					Picture.PNG
				</div>
			</div>
		</div>
		<div class="sd-upload-finish-icon">
			<button class="sd-finish-btn" :disabled="!isFinished">
				<i class="fas fa-trash-alt"></i>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Number,
			default: 0,
		}
	},
	computed: {
		loaderIndicatorStyles() {
			return {
				width: this.value + '%',
			}
		},
        isFinished(){
            if(this.value >= 100){
                return true;
            } else {
                return false;
            }
        }
	}
}
</script>

<style lang="scss" scoped>
.sd-upload-loading {
	display: flex;
	align-items: center;

	.sd-loader-container {
		flex: 1;
		height: 30px;
		background-color: #e5f0ff;
		border-radius: 15px;
		overflow: hidden;
		position: relative;

		.sd-loader-indicator {
			height: 100%;
			background-color: #9dbff9;
			border-radius: 15px;
            width: 0;
            transition: width 200ms ease;
		}

		.sd-loader-content {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			display: flex;
			align-items: center;

			.sd-loader-icon {
				margin-left: 12px;
				margin-right: 12px;
				i {
					font-size: 14px;
				}
			}

			.sd-loader-text {
				font-weight: 600;
				font-size: 12px;
				line-height: 15px;
				letter-spacing: 0.2px;
				color: #1c1c28;
			}
		}
	}

	.sd-upload-finish-icon {
		width: 30px;
		text-align: right;
		.sd-finish-btn {
			background: none;
            color: #FF3B3B;

            &:disabled{
                color: #8f90a6;
            }

			i {
				font-size: 20px;
			}
		}
	}
}
</style>