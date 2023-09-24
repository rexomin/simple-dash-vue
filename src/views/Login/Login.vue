<template>
	<div class="login-wrapper">
		<div class="login-content-wrapper">
			<div class="login-content">
				<h4 class="login-title">Login</h4>
				<div class="login-desc">Continue to website.</div>

				<form class="login-form" action="">
					<sd-input id="email-input" class="" placeholder="Email Address" type="email"></sd-input>
					<sd-input id="password-input" class="mt-4" placeholder="Password" type="password"></sd-input>

					<div class="login-bottom mt-4">
						<div class="login-remember">
							<sd-checkbox text="Remember me"></sd-checkbox>
						</div>

						<div class="login-forget">
							<button id="forget-btn">Forget password?</button>
						</div>
					</div>

					<div class="login-button mt-4">
						<button id="login-btn">Login</button>
					</div>

					<div class="login-create-account mt-5">
						<span>Don't have an account?</span>
						<button @click="$router.push('/register')">Create one now</button>
					</div>
				</form>
			</div>
		</div>

		<div class="login-spacefiller">
			<img class="login-logo" src="../../assets/pics/logo-dark.png">
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

.login-wrapper {
	display: flex;
	height: 100%;

	.login-spacefiller {
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

		.login-logo {
			position: absolute;
			top: 100px;
			right: 100px;
			height: 24px;
		}
	}

	.login-content-wrapper {
		flex: 1;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		@include only-phone-lg{
			padding: 0px 26px;
		}

		.login-content {
			width: 100%;
			max-width: 500px;
			display: flex;
			flex-direction: column;
			align-items: center;

			.login-title {
				font-size: 32px;
				line-height: 39px;
				letter-spacing: 0.2px;
				color: #000000;
				font-weight: 700;
				width: 100%;
			}

			.login-desc {
				font-size: 14px;
				line-height: 17px;
				letter-spacing: 0.2px;
				color: #8f90a6;
				margin-bottom: 40px;
				width: 100%;
				margin-top: 12px;
			}

			.login-form {
				width: 100%;

				.login-bottom {
					display: flex;
					align-items: center;

					.login-remember {
					}

					.login-forget {
						margin-left: auto;

						#forget-btn {
							background: none;
						}
					}
				}

				#login-btn {
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

		.login-create-account {
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