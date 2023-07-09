<template>
	<div class="sd-auth-code">
		<div class="sd-auth-code-label">
			Authentication code
		</div>
		<div class="sd-auth-code-input">
			<input class="code-input" type="tel" maxlength="1">
			<input class="code-input" type="tel" maxlength="1">
			<input class="code-input" type="tel" maxlength="1">
			<input class="code-input" type="tel" maxlength="1">
			<input class="code-input" type="tel" maxlength="1">
			<input class="code-input" type="tel" maxlength="1">
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			code: ['', '', '', '', '', ''],
		}
	},
    methods:{
        change(){
            alert()
        }
    },
	mounted() {
		/* go to next input */
		for (var item of document.querySelectorAll(".sd-auth-code-input .code-input")) {
			item.addEventListener('keydown', (e) => {
				e.preventDefault(); // we need this cause we want to handle everything manually

				let input_index = this.$global.indexInParent(e.target);
				if (!isNaN(parseInt(e.key))) {
					/* set input value */
					if (e.target.value == "") {
						this.code[input_index] = e.target.value = e.key;
					}

					/* check if next input is avalible */
					if (document.querySelector(".sd-auth-code-input").children.length - 1 > input_index) {
						document.querySelectorAll(".sd-auth-code-input .code-input")[input_index + 1].select(); //go to next input
					}
				} else if (e.key == "Backspace") {
					/* set input value */
					if (e.target.value != "") {
						this.code[input_index] = e.target.value = "";
					}

					/* check if prev input is avalible */
					if (input_index > 0) {
						document.querySelectorAll(".sd-auth-code-input .code-input")[input_index - 1].select(); //go to prev input
					}
				}
                this.$emit("input" , this.code.join(''));
			})
		}
	}

}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables";

.sd-auth-code {
	.sd-auth-code-label {
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		letter-spacing: 0.2px;
		color: #8f90a6;
		margin-bottom: 10px;
	}

	.sd-auth-code-input {
		display: flex;
		align-items: center;

		input[type="tel"] {
			width: 100%;
			height: 50px;
			line-height: 50px;
			background: #f4f6f3;
			border-radius: 6px;
			border: 1px solid #0063f700;
			text-align: center;
			transition: all 200ms ease;
			margin-right: 24px;

			@include only-phone-lg {
				margin-right: 12px;
			}

			&:last-child {
				margin-right: 0;
			}

			&:focus {
				border-color: #0063f7;
				background-color: #f3f7fd;
			}
		}
	}
}
</style>