<template>
	<div class="panel-wrapper">
		<div class="panel-loading" v-if="loading.panel" key="panel_loading">
			<sd-loading :size="64" />
		</div>

		<div class="panel" key="panel" v-else>
			<sd-sidebar ref="sidebar" :dark="true" />

			<div class="panel-container">
				<div class="panel-container-header">
					<div class="panel-container-header-left">
						<button class="sidebar-toggle-btn" @click="$refs.sidebar.toggleSidebar()">
							<i class="fas fa-bars"></i>
						</button>
						<h6 class="panel-container-header-title">{{panelTitleText}}</h6>
					</div>

					<sd-spacer></sd-spacer>

					<div class="panel-container-header-right">
						<div class="profile-popover">
							<button class="profile-popover-toggle-btn" @click="mobilePopover.show = !mobilePopover.show">
								<sd-avatar>
									<img src="../../assets/pics/avatar.jpg">
								</sd-avatar>
							</button>

							<div class="profile-popover-content" v-if="mobilePopover.show">
								<sd-avatar size="xxl">
									<img src="../../assets/pics/avatar.jpg">
								</sd-avatar>

								<div class="profile-popover-name">Louise Thompson</div>

								<sd-btn class="profile-popover-logout-btn" type="outline">Logout</sd-btn>
							</div>
						</div>
					</div>
				</div>

				<!-- page content -->
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loading: {
				panel: false,
				container: false,
			},
			panelTitleText: "",
			mobilePopover: {
				show: false
			}
		}
	},
	methods: {
		openMobileSidebar() {
			document.querySelector(".xf-sidebar").classList.add("show");
		}
	},
	created() {
		/* listners */
		this.$root.$on('setPanelTitleText', (new_text) => {
			this.panelTitleText = new_text;
		});
		this.$root.$on('panelContainerLoading', (loading = true) => {
			this.loading.container = loading;
		});
	}
}
</script>

<style lang="scss">
@import "../../assets/styles/_typography";

.panel-wrapper {
	height: 100%;

	.panel {
		height: 100%;
		display: flex;

		.panel-container {
			flex: 1;
			display: flex;
			flex-direction: column;
			min-width: 0;

			.panel-container-header {
				padding: 22px 36px;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #f1f1f1;

				.panel-container-header-left {
					display: flex;
					align-items: center;

					.sidebar-toggle-btn {
						background: none;
						border: none;
						outline: none;
						cursor: pointer;
						margin-right: 26px;
						font-size: 22px;
					}
				}

				.panel-container-header-right {
					.profile-popover {
						position: relative;

						.profile-popover-toggle-btn{
							background: none;
							border: none;
							outline: none;
							cursor: pointer;
						}

						.profile-popover-content {
							position: absolute;
							top: 100%;
							right: 0;
							margin-top: 10px;
							background: #fff;
							border: 1px solid #eee;
							padding: 15px;
							border-radius: 5px;
							width: 250px;
							height: 250px;
							z-index: 2;
							box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
							display: flex;
							align-items: center;
							justify-content: center;
							flex-direction: column;

							.profile-popover-name {
								margin-top: 24px;
								font-size: 18px;
								font-weight: 500;
							}

							.profile-popover-logout-btn {
								margin-top: 24px;
								border-color: #f44336;
								color: #f44336;
							}
						}
					}
				}

				.panel-container-header-title {
					@extend .tg-heading-4;
				}
			}

			.panel-content-wrapper {
				flex: 1;
				display: flex;
				flex-direction: column;
				min-height: 0; // prevent from overflowing

				.panel-bar-wrapper {
					padding: 22px 36px;
					display: flex;
					align-items: center;
					border-bottom: 1px solid #f1f1f1;
				}

				.panel-content-container {
					background: #fafafa;
					flex: 1;
					overflow-y: auto;
					padding: 36px;

					.panel-content {
						background: #ffffff;
						padding: 22px;
					}
				}
			}
		}
	}
}
</style>