<template>
	<div>
		<div class="row gy-4">

			<div class="col-12 col-md-6 col-lg-3">
				<div class="small-box bg-blue fg-white">
					<div class="inner">
						<h3>100</h3>
						<p>Total Users</p>
					</div>
					<div class="icon">
						<i class="fas fa-users"></i>
					</div>
					<router-link class="small-box-footer" to="/panel/users">
						View All <i class="fas fa-chevron-right ms-1"></i>
					</router-link>
				</div>
			</div>

			<div class="col-12 col-md-6 col-lg-3">
				<div class="small-box bg-orange fg-white">
					<div class="inner">
						<h3>100</h3>
						<p>Total Games</p>
					</div>
					<div class="icon">
						<i class="fas fa-question"></i>
					</div>
					<router-link class="small-box-footer" to="/panel/games">
						View All <i class="fas fa-chevron-right ms-1"></i>
					</router-link>
				</div>
			</div>

			<div class="col-12 col-md-6 col-lg-3">
				<div class="small-box bg-green fg-white">
					<div class="inner">
						<h3>100</h3>
						<p>Total Answers</p>
					</div>
					<div class="icon">
						<i class="fas fa-clipboard"></i>
					</div>
					<router-link class="small-box-footer" to="/panel/games">
						View All <i class="fas fa-chevron-right ms-1"></i>
					</router-link>
				</div>
			</div>

			<div class="col-12 col-md-6 col-lg-3">
				<div class="small-box bg-red fg-white">
					<div class="inner">
						<h3>100</h3>
						<p>Total Answers</p>
					</div>
					<div class="icon">
						<i class="fas fa-clipboard"></i>
					</div>
					<router-link class="small-box-footer" to="/panel/games">
						View All <i class="fas fa-chevron-right ms-1"></i>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SmallBoxes",

	components: {},

	data: () => ({
		//
	}),
};
</script>

<style>
.inherit-color {
	color: inherit !important;
}

.small-box {
	border-radius: 0.25rem;
	box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
		0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
	position: relative;
	display: block;
}

.small-box > .inner {
	padding: 15px;
}

.small-box h3 {
	font-size: 38px;
	font-weight: bold;
	margin: 0 0 10px 0;
	white-space: nowrap;
	padding: 0;
}

.small-box:hover .icon {
	font-size: 55px;
}

.small-box .icon {
	transition: all 0.3s linear;
	position: absolute;
	top: 15px;
	right: 25px;
	z-index: 0;
	font-size: 50px;
	color: rgba(0, 0, 0, 0.15);
}

.small-box .icon i {
	font-size: inherit;
	color: inherit !important;
}

.small-box > .small-box-footer {
	position: relative;
	text-align: center;
	padding: 10px 0;
	color: #ffffff;
	color: rgba(255, 255, 255, 0.8);
	display: block;
	z-index: 1;
	background: rgba(0, 0, 0, 0.1);
	text-decoration: none;
}
</style>