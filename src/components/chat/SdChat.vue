<template>
	<div class="sd-chat">
		<sd-chat-header />

		<sd-chat-messages />

        <sd-chat-footer/>
	</div>
</template>

<style lang="scss" scoped>
.sd-chat {
	background: #ffffff;
	border-radius: 12px;
	padding: 20px 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>