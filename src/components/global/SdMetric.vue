<template>
	<div class="metric">
		<div class="metric-text">
			<div class="metric-title">
				Todays sales
			</div>

			<div class="metric-value">
				2,456
			</div>
		</div>

		<div class="metric-chart">
			<canvas id="metric-canvas" width="100" height="100"></canvas>
			<div class="chart-text">
				<i class="fas fa-user" style="font-size: 20px"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		// TODO: This code should become dynamic so we can use this component anywhere
		var canvas = document.getElementById('metric-canvas');
		var circleProgressBar = new CircleProgressBar(canvas, {
			lineWidth: 8,
			radius: 42, // width / 2 - lineWidth
			colors: ['#0000FF', '#4B0082', '#9400D3'],

		});
		// set initial value
		circleProgressBar.setValue(0.9);
	}
}
</script>

<style lang="scss">
@import "../../assets/styles/_typography";

.metric {
	padding: 24px;
	background: #ffffff;
	border: 1px solid #eaecee;
	border-radius: 12px;
	display: flex;
	flex-direction: row;
	align-items: center;

	.metric-text {
		flex: 1;
		padding-right: 100px;

		.metric-title {
			@extend .tg-heading-5;
		}

		.metric-value {
			@extend .tg-heading-3;
			margin-top: 42px;
		}
	}

	.metric-chart {
		position: relative;

		.chart-text {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
</style>