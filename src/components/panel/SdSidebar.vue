<template>
	<div class="sidebar-wrapper">
		<div class="sidebar show" :class="{ 'dark': dark }">
			<div class="logo-wrapper">
				<div class="sidebar-logo">
					<img src="../../assets/pics/logo-dark.png">
				</div>
			</div>

			<div class="sidebar-top">
				<ul class="sidebar-nav">
					<li>
						<router-link to="/panel/dashboard" active-class="active">
							<i class="nav-icon fas fa-home"></i>
							<span class="nav-text">Dashboard</span>
						</router-link>
					</li>
					
					<li>
						<router-link to="/panel/users" active-class="active">
							<i class="nav-icon fas fa-users"></i>
							<span class="nav-text">Users</span>
						</router-link>
					</li>

					<li>
						<router-link to="/panel/chat" active-class="active">
							<i class="nav-icon fas fa-comments"></i>
							<span class="nav-text">Chat</span>
						</router-link>
					</li>
				</ul>
			</div>

			<div class="sidebar-bottom">
				<ul class="sidebar-nav">
					<li>
						<router-link to="/panel/components" active-class="active">
							<i class="nav-icon fas fa-layer-group"></i>
							<span class="nav-text">Components</span>
						</router-link>
					</li>

					<li>
						<router-link to="/panel/settings" active-class="active">
							<i class="nav-icon fas fa-gear"></i>
							<span class="nav-text">Settings</span>
						</router-link>
					</li>
				</ul>

				<div class="sidebar-account">
					<div class="sidebar-account-img">
						<sd-avatar>
							<img src="../../assets/pics/avatar.jpg">
						</sd-avatar>
					</div>

					<div class="sidebar-account-text">
						<div class="sidebar-account-name">
							<span>Louise Thompson</span>
						</div>
						<div class="sidebar-account-desc">
							<span>Enterprise plan</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="sidebar-backdrop" @click="closeSidebar"></div> <!-- we need this div to capture on click event -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			sidebar: {
				desktopShow: true,
				mobileShow: false,
			},
		}
	},
	props: {
		dark: Boolean,
	},
	methods: {
		initSidebar() {
			var sidebar = document.querySelector(".sidebar");
			this.renderSidebar();

			/* sidebar auto show on mobile and desktop */
			window.onresize = () => {
				this.renderSidebar();
			}
		},
		renderSidebar() {
			var sidebar = document.querySelector(".sidebar");
			if (window.innerWidth <= 990) {
				/* mobile */
				if (this.$data.sidebar.mobileShow) {
					sidebar.classList.add("show");
					document.querySelector(".sidebar-backdrop").classList.add("show");
				} else {
					sidebar.classList.remove("show");
					document.querySelector(".sidebar-backdrop").classList.remove("show");
				}
			} else {
				/* desktop */
				if (this.$data.sidebar.desktopShow) {
					sidebar.classList.add("show");
				} else {
					sidebar.classList.remove("show");
				}
			}
		},
		openSidebar() {
			var sidebar = document.querySelector(".sidebar");

			if (window.innerWidth <= 990) {
				this.$data.sidebar.mobileShow = true;
			} else {
				this.$data.sidebar.desktopShow = true;
			}

			this.renderSidebar();
		},
		closeSidebar() {
			var sidebar = document.querySelector(".sidebar");

			if (window.innerWidth <= 990) {
				this.$data.sidebar.mobileShow = false;
			} else {
				this.$data.sidebar.desktopShow = false;
			}

			this.renderSidebar();
		},
		toggleSidebar() {
			var sidebar = document.querySelector(".sidebar");

			if (window.innerWidth <= 990) {
				if (this.$data.sidebar.mobileShow) {
					this.closeSidebar();
				} else {
					this.openSidebar();
				}
			} else {
				if (this.$data.sidebar.desktopShow) {
					this.closeSidebar();
				} else {
					this.openSidebar();
				}
			}
		},
	},
	mounted() {
		this.initSidebar();
	},
}
</script>

<style lang="scss">
@import "../../assets/styles/_typography";
@import "../../assets/styles/_variables";

.sidebar {
	width: 240px;
	height: 100%;
	display: flex;
	flex-direction: column;
	transition: margin-left 0.3s ease-in-out, transform 0.3s ease-in-out;
	margin-left: -240px;
	position: relative;
	z-index: 1000;

	@include only-phone {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}

	&.show {
		margin-left: 0;
	}

	.logo-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24px;
		margin-bottom: 20px;

		img{
			height: 24px;
		}
	}

	.sidebar-top {
		flex: 1;
		overflow-y: auto;
		direction: rtl; //needed to make the scrollbar on the left side
	}

	.sidebar-bottom {
		margin-top: 50px;
		direction: rtl; //needed to make the scrollbar on the left side

		.sidebar-account {
			direction: ltr; //needed to make the scrollbar on the left side
			display: flex;
			align-items: center;
			padding: 24px;
			border-top: 1px solid #f1f1f1;
			margin-top: 8px;

			.sidebar-account-img {
				margin-right: 15px;
			}

			.sidebar-account-name {
				@extend .tg-body-lg;
				color: #4f5b67;
			}

			.sidebar-account-desc {
				@extend .tg-body-sm;
				color: #4f5b67;
			}
		}
	}

	.sidebar-nav {
		direction: ltr; //needed to make the scrollbar on the left side
		display: flex;
		flex-direction: column;

		li {
			margin-bottom: 8px;

			a {
				padding: 12px 24px;
				cursor: pointer;
				transition: all 0.3s ease-in-out;
				display: flex;
				align-items: center;

				.nav-icon {
					font-size: 24px;
					margin-right: 23px;
				}

				.nav-text {
					@extend .tg-body-lg;
				}

				&:hover {
					background-color: #f7f7fb;
				}

				&.active {
					background-color: #f7f7fb;
					border-right: 4px solid #4040f2;
				}
			}

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}

.sidebar.dark {
	background-color: #000000;
	color: #f1f1f1;

	.sidebar-nav {
		li a {
			&:hover {
				background-color: #242d35;
			}

			&.active {
				background-color: #242d35;
			}
		}
	}

	.sidebar-bottom {
		margin-top: 50px;

		.sidebar-account {
			.sidebar-account-name {
				color: #f1f1f1;
			}

			.sidebar-account-desc {
				color: #f1f1f1;
			}
		}
	}
}

.sidebar-backdrop {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 998;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.3s ease-in-out;

	@include only-phone {
		display: block;
	}

	&.show {
		opacity: 1;
		pointer-events: all;
	}
}
</style>