<template>
	<div class="sd-chat-header">
		<button class="back-btn" @click="$parent.$parent.deselectChat">
			<i class="fas fa-chevron-left"></i>
		</button>

		<div class="sd-chat-title">Problem with files - #100</div>
		<div class="sd-chat-header-right">
			<sd-btn btnstyle="secondary">
				Resolve
			</sd-btn>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.sd-chat-header {
	display: flex;
	align-items: center;
	padding-bottom: 12px;
	border-bottom: 1px solid #f2f2f5;

	.back-btn {
		background: none;
		width: 24px;
		height: 24px;
		margin-right: 12px;
	}

	.sd-chat-title {
		font-weight: bold;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 0.2px;
		color: #1c1c28;
	}

	.sd-chat-header-right {
		margin-left: auto;
	}
}
</style>