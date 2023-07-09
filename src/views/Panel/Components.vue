<template>
	<div class="panel-content-wrapper">
		<div class="panel-content-container">
			<div class="panel-content">
				<h4 class="mb-4">Avatars</h4>

				<div class="d-flex align-items-center">
					<sd-avatar size="sm">
						<img src="../../assets/pics/avatar.jpg">
					</sd-avatar>

					<sd-avatar class="ms-2" size="md">
						<img src="../../assets/pics/avatar.jpg">
					</sd-avatar>

					<sd-avatar class="ms-2" size="lg" color="red">
						<span>AM</span>
					</sd-avatar>
					<sd-avatar class="ms-2" size="xl" color="green">
						<span>AG</span>
					</sd-avatar>
					<sd-avatar class="ms-2" size="xxl" color="blue">
						<span>MK</span>
					</sd-avatar>
				</div>

				<h4 class="mt-4 mb-4">Avatar stack</h4>

				<sd-avatar-stack>
					<li class="avatar-stack-item" v-for="i in 4" :key="i">
						<sd-avatar>
							<img src="../../assets/pics/avatar.jpg">
						</sd-avatar>
					</li>
				</sd-avatar-stack>

				<h4 class="mt-4 mb-4">Avatar with name</h4>

				<sd-avatar-with-name name="Asghar Taraghe">
					<sd-avatar class="ms-2" size="md" color="blue">
						<span>AT</span>
					</sd-avatar>
				</sd-avatar-with-name>
			</div>

			<div class="panel-content mt-4">
				<h4 class="mb-4">Badges</h4>
				<sd-badge class="bg-orange fg-white">This Badge</sd-badge>
				<sd-badge class="bg-green fg-white ms-2">This Badge</sd-badge>
				<sd-badge class="bg-red fg-white ms-2">This Badge</sd-badge>
				<sd-badge class="bg-blue fg-white ms-2">This Badge</sd-badge>
				<sd-badge class="bg-purple fg-white ms-2">This Badge</sd-badge>
			</div>

			<div class="panel-content mt-4">
				<h4 class="mb-4">Buttons</h4>
				<sd-btn>Click Me!</sd-btn>
				<sd-btn class="ms-2" type="primary">Click Me!</sd-btn>
				<sd-btn class="ms-2" type="secondary">Click Me!</sd-btn>
				<sd-btn class="ms-2" type="outline">Click Me!</sd-btn>
			</div>

			<div class="panel-content mt-4">
				<h4 class="mb-4">Inputs</h4>
				<sd-input class="mb-4" id="name-input" placeholder="Enter your name"></sd-input>
				<sd-textarea class="mb-4" id="message-input" placeholder="Enter your message" />
				<sd-checkbox class="mb-4" text="Please check me!" />
				<sd-select-input class="mb-4" :select-options="[{title:'me'} , {title:'others'}]"></sd-select-input>
				<sd-auth-code />
			</div>

			<div class="panel-content mt-4">
				<h4 class="mb-4">Cards</h4>
				<div class="d-flex align-items-center flex-wrap">
					<sd-card class="m-2" type="outline" style="max-width: 360px;">
						<div class="card-img">
							<img src="../../assets/pics/test.jpg">
						</div>

						<div class="card-title mt-4">
							Boston family home
						</div>

						<div class="card-text mt-2">
							A beautiful townhouse in the heart of Miami's down town district. With 3 bedrooms and a heated pool.
						</div>

						<ul class="icon-texts mt-4">
							<li>
								<div class="icon-text">
									<i class="fas fa-bed"></i>
									<div class="text">
										3 bedrooms
									</div>
								</div>
							</li>
							<li>
								<div class="icon-text">
									<i class="fas fa-bed"></i>
									<div class="text">
										3 bedrooms
									</div>
								</div>
							</li>
							<li>
								<div class="icon-text">
									<i class="fas fa-bed"></i>
									<div class="text">
										3 bedrooms
									</div>
								</div>
							</li>
						</ul>

						<div class="card-footer mt-4">
							<sd-btn class="full-width" type="outline">View listing details</sd-btn>
						</div>
					</sd-card>

					<sd-card class="m-2" style="max-width: 360px;">
						<div class="card-img">
							<img src="../../assets/pics/test.jpg">
						</div>

						<div class="card-title mt-4">
							Wireframing exercise
						</div>

						<div class="card-text mt-2">
							23 Dec, 2022
						</div>

						<div class="card-footer d-flex mt-4">
							<div class="left">
								<sd-avatar-stack>
									<li class="avatar-stack-item" v-for="i in 4" :key="i">
										<sd-avatar>
											<img src="../../assets/pics/avatar.jpg">
										</sd-avatar>
									</li>
								</sd-avatar-stack>
							</div>

							<div class="my-spacer"></div>

							<div class="right">
								<sd-badge class="bg-orange fg-white">Canceled</sd-badge>
							</div>
						</div>
					</sd-card>

					<sd-card class="m-2" style="max-width: 360px;">
						<div class="card-title">
							Wireframing exercise
						</div>

						<div class="card-text mt-2">
							23 Dec, 2022
						</div>

						<div class="card-footer d-flex mt-4">
							<div class="left">
								<sd-avatar>
									<span>MK</span>
								</sd-avatar>
							</div>

							<div class="my-spacer"></div>

							<div class="right">
								<sd-badge class="bg-green fg-white">Canceled</sd-badge>
							</div>
						</div>
					</sd-card>

					<sd-card class="m-2" style="max-width: 380px;">
						<div class="card-profile-avatar">
							<sd-avatar size="xxl">
								<span>MK</span>
							</sd-avatar>
						</div>

						<div class="card-profile-title mt-3">
							Rober Whistable
						</div>

						<div class="card-profile-desc mt-2">
							23 Dec, 2022
						</div>

						<div class="card-profile-details-wrapper mt-4">
							<ul class="card-profile-details">
								<li>
									<div class="detail-title">
										Projects
									</div>
									<div class="detail-value">
										24
									</div>
								</li>

								<div class="divider"></div>

								<li>
									<div class="detail-title">
										Tasks
									</div>
									<div class="detail-value">
										132
									</div>
								</li>

								<div class="divider"></div>

								<li>
									<div class="detail-title">
										Insights
									</div>
									<div class="detail-value">
										31
									</div>
								</li>
							</ul>
						</div>

						<div class="card-footer mt-4 center-btn">
							<sd-btn type="outline">
								View profile
							</sd-btn>
						</div>
					</sd-card>

					<sd-micro-card style="flex:1;">
						<div class="micro-card-img">
							<img src="../../assets/pics/test.jpg">
						</div>

						<div class="micro-card-content">
							<div class="micro-card-title">
								Boston family home
							</div>

							<div class="micro-card-desc">
								A beautiful townhouse in the heart of Miami's down town district. With 3 bedrooms and a heated pool.
							</div>
						</div>
					</sd-micro-card>
				</div>
			</div>

			<div class="panel-content mt-4">
				<h4 class="mb-4">Metric</h4>
				<sd-metric />
			</div>

			<div class="panel-content mt-4">
				<h4 class="mb-4">Progressbar</h4>
				<sd-progress-bar :value="0" />
				<sd-progress-bar class="mt-2" :value="50" />
				<sd-progress-bar class="mt-2" :value="75" />
				<sd-progress-bar class="mt-2" :value="90" />
			</div>

			<div class="panel-content mt-4">
				<h4 class="mb-4">Table</h4>
				<sd-table>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Country</th>
						<th>Job</th>
					</tr>

					<tr>
						<td>Matin</td>
						<td>20</td>
						<td>Iran</td>
						<td>Developer</td>
					</tr>

					<tr>
						<td>Mika</td>
						<td>2</td>
						<td>Australia</td>
						<td>-</td>
					</tr>

				</sd-table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$root.$emit('setPanelTitleText', "Components");
	}
}
</script>

<style>
</style>