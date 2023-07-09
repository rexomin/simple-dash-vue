<template>
	<div class="panel-content-wrapper">
		<div class="panel-content-container">
			<SmallBoxes />
			
			<div class="panel-content mt-4">
				Here is the dashboard!
			</div>
		</div>
	</div>
</template>

<script>
import SmallBoxes from "./SmallBoxes"

export default {
	components: {
		SmallBoxes
	},
	mounted() {
		this.$root.$emit('setPanelTitleText', "Dashboard");
	}
}
</script>

<style>
</style>