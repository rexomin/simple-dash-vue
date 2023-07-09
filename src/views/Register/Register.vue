<template>
	<div class="register-wrapper">
		<div class="register-content-wrapper">
			<div class="register-content">
				<h4 class="register-title">Register</h4>
				<div class="register-desc">Create an account.</div>

				<form class="register-form" action="">
					<sd-input id="email-input" class="" placeholder="Email Address" type="email"></sd-input>
					<sd-input id="name-input" class="mt-4" placeholder="Name (optional)"></sd-input>
					<sd-input id="password-input" class="mt-4" placeholder="Password" type="password"></sd-input>

					<div class="register-button mt-4">
						<button id="register-btn">Register</button>
					</div>

					<div class="register-create-account mt-5">
						<span>Already have an account?</span>
						<button @click="$router.push('/login')">Login</button>
					</div>
				</form>
			</div>
		</div>

		<div class="register-spacefiller">
			<img class="register-logo" src="../../assets/pics/logo-dark.png">
		</div>
	</div>
</template>

<script>
export default {
	components: {
	},
	data() {
		return {
		}
	},
	methods: {

	},
	created() {

	}
}
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";

.register-wrapper {
	display: flex;
	height: 100%;

	.register-spacefiller {
		width: 700px;
		height: 100%;
		background: black;
		position: relative;
		border-radius: 50px 0px 0px 50px;
		background-image: url("../../assets/pics/login-background.jpg");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		
		@include only-phone-lg{
			display: none;
		}

		.register-logo {
			position: absolute;
			top: 100px;
			right: 100px;
		}
	}

	.register-content-wrapper {
		flex: 1;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		@include only-phone-lg{
			padding: 0px 26px;
		}

		.register-content {
			width: 100%;
			max-width: 500px;
			display: flex;
			flex-direction: column;
			align-items: center;

			.register-title {
				font-size: 32px;
				line-height: 39px;
				letter-spacing: 0.2px;
				color: #000000;
				font-weight: 700;
				width: 100%;
			}

			.register-desc {
				font-size: 14px;
				line-height: 17px;
				letter-spacing: 0.2px;
				color: #8f90a6;
				margin-bottom: 40px;
				width: 100%;
				margin-top: 12px;
			}

			.register-form {
				width: 100%;

				.register-bottom {
					display: flex;
					align-items: center;

					.register-remember {
					}

					.register-forget {
						margin-left: auto;

						#forget-btn {
							background: none;
						}
					}
				}

				#register-btn {
					background: #000000;
					color: #ffffff;
					width: 100%;
					padding: 15px;
					border-radius: 15px;
					transition: all 0.2s ease-in-out;

					&:hover {
						background: #2b2b2b;
					}
				}
			}
		}

		.register-create-account {
			span {
				color: #8f90a6;
				margin-right: 8px;
			}

			button {
				background: none;
			}
		}
	}
}
</style>