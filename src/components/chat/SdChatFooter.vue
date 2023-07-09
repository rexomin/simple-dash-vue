<template>
	<div class="sd-chat-footer">
		<div class="sd-chat-message-input">
			<textarea class="sd-chat-input" placeholder="Type your answer"></textarea>
			<button class="sd-chat-attach-btn">
				<i class="fas fa-paperclip"></i>
				Attach Files
			</button>
		</div>
		<div class="sd-chat-footer-right">
			<button class="sd-chat-send-btn">
				<i class="fas fa-paper-plane"></i>
				Send
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.sd-chat-footer {
	margin-top: 12px;
	display: flex;

	.sd-chat-message-input {
		flex: 1;
		position: relative;

		.sd-chat-input {
			width: 100%;
			height: 90px;
			resize: none;
			background: #f4f6f3;
			border-radius: 6px;
			border: none;
			padding: 16px 12px;
		}

		.sd-chat-attach-btn {
			position: absolute;
			bottom: 11px;
			right: 8px;
			font-weight: 600;
			font-size: 14px;
			line-height: 17px;
			letter-spacing: 0.2px;
			color: #1c1c28;
			background: none;

			i {
				margin-right: 8px;
				font-size: 20px;
			}
		}
	}

	.sd-chat-footer-right {
		align-self: flex-end;
		margin-left: 12px;

		.sd-chat-send-btn {
			padding: 16px 12px;
			border-radius: 6px;
			font-weight: 600;
			font-size: 14px;
			line-height: 17px;
			letter-spacing: 0.2px;
			background: #0063f7;
			color: #ffffff;

			i {
				margin-right: 12px;
				font-size: 10px;
			}
		}
	}
}
</style>