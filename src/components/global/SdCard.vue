<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../../assets/styles/_typography";

.card {
	padding: 24px;
	border: 1px solid #eaecee;
	border-radius: 12px;
	transition: all 0.3s ease-in-out;

	&:hover {
		box-shadow: 0 0 6px rgba(33, 33, 33, 0.2);
	}

	.card-img {
		height: 157px;
		border-radius: 8px;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.card-title {
		@extend .tg-heading-5;
	}

	.card-text {
		@extend .tg-body-sm;
		color: #4f5b67;
	}

	.card-profile-avatar {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card-profile-title {
		@extend .tg-heading-6;
		text-align: center;
	}

	.card-profile-desc {
		@extend .tg-body-sm;
		text-align: center;
	}

	.card-profile-details-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;

		.divider {
			width: 1px;
			height: 24px;
			background-color: #eaecee;
		}

		.card-profile-details {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin: -10px;

			li {
				text-align: center;
				padding: 10px;

				.detail-title {
					@extend .tg-body-sm;
				}

				.detail-value {
					@extend .tg-body-md;
				}
			}
		}
	}

	.card-footer {
		&.center-btn {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
</style>