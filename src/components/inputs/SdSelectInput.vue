<template>
	<div class="sd-input-wrapper">
		<div class="label">{{label}}</div>
		<div class="sd-select" :class="[(showOptions) ? 'open' : '']" @click="toggleOpenOptions()">
			<span sd-select-text v-if="selectedOption == null">{{placeholder}}</span>
			<span class="selected" sd-select-text v-else>{{selectedOption.title}}</span>
			<i class="sd-select-icon fas fa-chevron-down"></i>

			<ul class="sd-select-options">
				<li class="d-flex" v-for="(selectOption , index) in selectOptions" :key="index" @click="changeSelectedOption(selectOption)">
					{{selectOption.title}}
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			showOptions: false,
			selectedOption: null
		}
	},
	props: {
		label: {
			default: ""
		},
		placeholder: {
			default: "Select Option"
		},
		selectOptions: Array,
		value: {
			default: ''
		}
	},
	methods: {
		toggleOpenOptions() {
			this.showOptions = !this.showOptions;
		},
		changeSelectedOption(newOption) {
			this.selectedOption = newOption;
			this.isOpen = false;
			this.$emit('input', newOption);
		}
	},
}
</script>

<style lang="scss" scoped>
.sd-input-wrapper {
	.label {
		display: block;
		margin-bottom: 10px;
		font-size: 14px;
		line-height: 17px;
		letter-spacing: 0.2px;
		color: #8f90a6;
	}

	.sd-select {
		background: #ffffff;
		border: 1px solid #c7c9d9;
		box-sizing: border-box;
		border-radius: 6px;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		letter-spacing: 0.2px;
		color: #8f90a6;
		padding: 18px 20px;
		padding-right: 40px;
		position: relative;
		cursor: pointer;

		.selected {
			color: #1c1c28;
		}

		.sd-select-icon {
			position: absolute;
			right: 20px;
			top: 50%;
			transform: translateY(-50%);
			color: #1c1c28;
		}

		.sd-select-options {
			position: absolute;
			left: 0;
			right: 0;
			top: 100%;
			margin-top: 15px;
			background-color: #fff;
			box-shadow: 0 1px 2px #ccc;
			border: 1px solid #c7c9d9;
			box-sizing: border-box;
			border-radius: 6px;
			overflow: hidden;
			overflow-y: auto;
			max-height: 250px;
			display: none;
			z-index: 5;

			li {
				background-color: #fff;
				border-bottom: 1px solid #c7c9d9;
				padding: 15px 20px;
				color: #1c1c28;
				cursor: pointer;
				transition: all 100ms ease;

				&:hover {
					background-color: #c7c9d9;
				}

				&:last-child {
					border: none;
				}
			}
		}

		&.open .sd-select-options {
			display: block;
			z-index: 5;
		}
	}
}
</style>