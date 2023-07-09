<template>
	<div class="sd-input-wrapper">
		<label v-if="label != '' && id != ''" :for="id">{{label}}</label>
		<input v-if="id != ''" :id="id" :type="type" :placeholder="placeholder" :value="value" @input="handleInput" :disabled="disabled">
	</div>
</template>

<script>
export default {
	props: {
		type: {
			default: "text"
		},
		placeholder: {
			default: ""
		},
		label: {
			default: ""
		},
		id: {
			required: true,
			default: "",
			type: String
		},
		value: {
			default: ""
		},
		disabled:{
			default: false,
		}
	},
	methods: {
		handleInput(e) {
			this.$emit('input', e.target.value);
		}
	}
}
</script>

<style lang="scss" scoped>
.sd-input-wrapper {
	label {
		display: block;
		margin-bottom: 10px;
		font-size: 14px;
		line-height: 17px;
		letter-spacing: 0.2px;
		color: #8f90a6;
	}

	input {
		background: #f4f6f3;
		border-radius: 6px;
		border: 1px solid #0063f700;
		padding: 17px 20px;
		width: 100%;
		transition: all 200ms ease;

		&:focus {
			border-color: #0063f7;
			background-color: #f3f7fd;
		}
	}
}
</style>