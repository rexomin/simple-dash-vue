<template>
	<div class="panel-content-wrapper">
		<div class="panel-content-container">
			<div class="panel-content">
				Here is the settings!
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$root.$emit('setPanelTitleText', "Settings");
	}
}
</script>

<style>
</style>