<template>
	<div class="sd-input-wrapper">
		<label class="custom-checkbox">
			{{text}}
			<input type="checkbox" :checked="isChecked">
			<span class="checkmark"></span>
		</label>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isChecked: this.value,
		}
	},
	props: {
		text: {
			default: "",
		},
		value: {
			type: Boolean,
			default: false,
		}
	},
	watch: {
		value(newVal) {
			this.isChecked = newVal;
		}
	},
	methods: {
		toggleCheckBox() {
			this.isChecked = !this.isChecked;
			this.$emit('input', this.isChecked);
			this.$emit('click', this.$event);
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables/";

.sd-input-wrapper {
	/* Customize the label (the container) */
	.custom-checkbox {
		display: block;
		position: relative;
		padding-left: 36px;
		cursor: pointer;
		font-size: 22px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		font-size: 16px;
		line-height: 24px;
	}

	/* Hide the browser's default checkbox */
	.custom-checkbox input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	/* Create a custom checkbox */
	.checkmark {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 20px;
		width: 20px;
		background-color: #f4f6f3;
		border: 1px solid #8f90a6;
		box-sizing: border-box;
		border-radius: 6px;
	}

	/* On mouse-over, add a grey background color */
	.custom-checkbox:hover input ~ .checkmark {
		background-color: #ccc;
	}

	/* When the checkbox is checked, add a blue background */
	.custom-checkbox input:checked ~ .checkmark {
		background-color: $primary-color;
		border-color: #00000000;
	}

	/* Create the checkmark/indicator (hidden when not checked) */
	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}

	/* Show the checkmark when checked */
	.custom-checkbox input:checked ~ .checkmark:after {
		display: block;
	}

	/* Style the checkmark/indicator */
	.custom-checkbox .checkmark:after {
		left: 6px;
		top: 3px;
		width: 6px;
		height: 10px;
		border: solid #fff;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
}
</style>