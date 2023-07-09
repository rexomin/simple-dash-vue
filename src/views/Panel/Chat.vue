<template>
	<div class="panel-content-wrapper">
		<div class="panel-content-container">
			<div class="support">
				<div class="row my-gutters">
					<div class="col tickets-col" :class="[(isChatOpen) ? 'chat-open' : '']">
						<sd-section-card class="tickets-list-card" title="Tickets Lists">
							<template v-slot:header-right>
								<sd-btn type="primary" @click="showNewTicketModal = true">
									<i class="fas fa-plus btn-icon"></i> Create New Ticket
								</sd-btn>
							</template>

							<div class="tickets-list">
								<table class="tickets-list-table">
									<thead>
										<tr>
											<th class="min-width"></th>
											<th>User</th>
											<th>Title</th>
											<th>Number</th>
											<th>Project</th>
											<th>Subject</th>
											<th>Date</th>
											<th class="min-width">Status</th>
										</tr>
									</thead>
									<tbody>

										<tr class="ticket-list-row" v-for="i in 3" :class="[(i == selectedChat) ? 'active' : '']" :key="i" @click="selectChat(i)">
											<td>
												<sd-avatar>
													<span>MK</span>
												</sd-avatar>
											</td>
											<td>Felix Woolley</td>
											<td>Problem with files</td>
											<td>#100</td>
											<td>Website Redesign</td>
											<td>Technical</td>
											<td>October 17</td>
											<td>
												<sd-badge class="bg-blue fg-white">Answered</sd-badge>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</sd-section-card>
					</div>

					<div class="col chat-col" v-if="isChatOpen">
						<sd-chat />
					</div>
				</div>

				<sd-modal class="new-ticket" v-model="showNewTicketModal" ref="childComponent">
					<div class="new-ticket-header">
						<button class="close-btn" @click="showNewTicketModal=false">
							<i class="fas fa-times"></i>
						</button>
						<div class="new-ticket-title">New Ticket</div>
					</div>

					<div class="new-ticket-content">
						<form class="new-ticket-form">
							<div class="form-row">
								<sd-input label="Title" id="new-ticket-title" />
							</div>
							<div class="form-row">
								<sd-select-input label="Subject" placeholder="Select Subject" />
							</div>
							<div class="form-row">
								<sd-select-input label="Project" placeholder="Select Project" />
							</div>
							<div class="form-row">
								<sd-textarea label="Message" id="new-ticket-desc" placeholder="Explain the problem" />
							</div>
							<div class="form-row">
								<sd-btn class="new-ticket-submit-btn" type="secondary" @click.prevent>
									<i class="fas fa-plus btn-icon"></i> Attach Files
								</sd-btn>
							</div>
							<div class="form-row">
								<sd-upload-loading />
							</div>
							<div class="form-btns d-flex">
								<sd-btn class="new-ticket-submit-btn" type="primary" @click.prevent>
									Submit
								</sd-btn>
								<sd-btn class="new-ticket-cancel-btn" type="outline" @click.prevent="showNewTicketModal = false">
									Cancel
								</sd-btn>
							</div>
						</form>
					</div>
				</sd-modal>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isChatOpen: false,
			selectedChat: null,
			showNewTicketModal: false,
		}
	},
	methods: {
		selectChat(index) {
			this.isChatOpen = true;
			this.selectedChat = index;
			this.$root.$emit('mobileBackBtnShow', true);
		},
        deselectChat() {
            this.isChatOpen = false;
            this.selectedChat = null;
            this.$root.$emit('mobileBackBtnShow', false);
        },
	},
	mounted() {
		this.$root.$emit('setPanelTitleText', "Tickets");
	},
	destroyed() {
		this.$root.$emit('mobileBackBtnShow', false);
	}
}
</script>

<style lang="scss">
@import "../../assets/styles/_variables";

.support {
	height: 100%;

	.row {
		height: 100%;

		.col {
			height: 100%;

			&.tickets-col {
				flex: 0 0 auto;
				width: 100%;

				&.chat-open {
					width: 50%;

					@include only-phone-lg {
						display: none;
					}
				}
			}

			&.chat-col {
				flex: 0 0 auto;
				width: 50%;

				@include only-phone-lg {
					width: 100%;
				}
			}
		}
	}

	.tickets-list-card {
		height: 100%;

		.sd-section-card-header {
			margin-bottom: 55px !important;
		}

		.tickets-list {
			margin: 0 -32px;
			margin-top: -32px;

			.tickets-list-table {
				border-collapse: separate;
				width: 100%;
				max-width: 100%;
				border-spacing: 0 16px;
				padding: 0 32px;

				.min-width {
					width: 1%;
					white-space: nowrap;
				}

				thead {
					position: relative;
					top: 16px;
				}

				th {
					padding: 13px 16px;
					font-weight: 600;
					font-size: 14px;
					line-height: 17px;
					letter-spacing: 0.2px;
					color: #8f90a6;
				}

				.ticket-list-row {
					margin-bottom: 16px;
					cursor: pointer;

					&:hover td {
						background-color: #fcfcfc;
					}

					&.active td {
						background-color: #0063f7;
						color: #ffffff;
					}

					td {
						padding: 13px 16px;
						border-top: 1px solid #c7c9d9;
						border-bottom: 1px solid #c7c9d9;
						vertical-align: middle;
						white-space: nowrap;

						&:first-child {
							border-left: 1px solid #c7c9d9;
							border-top-left-radius: 8px;
							border-bottom-left-radius: 8px;
						}
						&:last-child {
							border-right: 1px solid #c7c9d9;
							border-top-right-radius: 8px;
							border-bottom-right-radius: 8px;
						}
					}
				}
			}
		}
	}

	.new-ticket {
		.new-ticket-header {
			display: flex;
			align-items: center;

			.close-btn {
				background: none;
				margin-right: 32px;

				i {
					font-size: 16px;
				}
			}

			.new-ticket-title {
				font-weight: bold;
				font-size: 20px;
				line-height: 24px;
				letter-spacing: 0.2px;
				color: #1c1c28;
			}
		}

		.new-ticket-content {
			margin-top: 24px;

			.new-ticket-form {
				margin-top: 28px;
				width: 100%;
				max-width: 450px;

				.form-row {
					margin-bottom: 16px;

					&:last-child {
						margin-bottom: 0;
					}
				}

				.form-btns {
					margin-top: 32px;
				}

				.new-ticket-send-btn {
					margin-top: 28px;
				}

				.new-ticket-cancel-btn {
					margin-left: 16px;
					border-color: #4040f2;
					color: #4040f2;
				}
			}
		}
	}
}
</style>