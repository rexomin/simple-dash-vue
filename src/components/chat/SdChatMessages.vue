<template>
	<div class="sd-chat-messages">
		<div class="sd-chat-message" v-for="i in 10" :key="i" :class="[(i%2 == 0) ? 'right' : '']">
			<div class="sd-chat-message-content">
				<div class="sd-message-sender">
					Jessica, Support team
				</div>
				<div class="sd-message-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus dolor nihil impedit alias quod ea reprehenderit doloribus nisi iure? Nemo dolores commodi aut officiis tenetur quos, aperiam ex perferendis iure laborum dignissimos labore praesentium? Libero, quos. Quibusdam ipsam itaque nesciunt sed fugit ducimus! Minus, temporibus. Accusantium, delectus nostrum. Maiores earum recusandae officia id consequatur sed adipisci accusamus minima possimus, dolore omnis quibusdam perferendis rem fugit. Cum quam voluptas quibusdam sed voluptates ipsam ducimus omnis in accusamus magni blanditiis labore eveniet voluptatem velit sit saepe, unde debitis? Facilis quisquam illo cupiditate expedita maiores labore, vitae quas culpa. Itaque deserunt inventore distinctio, recusandae fuga tempore eos ex culpa quia molestias, iure amet obcaecati quos quod ab et sunt quasi! Quis odio tempora ab mollitia eaque, animi harum et vitae tenetur. Magni praesentium placeat in laboriosam facere debitis quia expedita, quibusdam repellendus tenetur reiciendis magnam nostrum eum odit asperiores nesciunt voluptatem quaerat accusamus iusto fugiat natus perferendis aut minus mollitia. Laboriosam, impedit provident recusandae repellendus obcaecati voluptas ad dolore veritatis minima nihil fuga a. Inventore illum, quas quaerat rerum repellat dolore atque nostrum quo ex eligendi molestias? Natus vero consectetur voluptatum dolorem culpa repellendus optio ratione veniam ullam maiores nam, officiis cupiditate harum temporibus explicabo dicta sint, ipsa soluta, distinctio porro. Maxime omnis adipisci laboriosam qui veritatis repellat neque labore explicabo dignissimos minima odit doloremque sequi dolores non, quas, consequuntur corrupti doloribus reiciendis tempora. Dolore praesentium dolores dolorem ex nihil rerum ratione, atque delectus nobis nam mollitia corporis quod maxime in officiis?
				</div>
			</div>
			<div class="sd-chat-message-date">September 15, 2021 - 11:30</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.sd-chat-messages {
	display: flex;
	flex-direction: column;
	padding: 0 32px;
	margin: 0 -32px;
	padding-top: 15px;
	flex: 1;
	overflow-y: auto;

	.sd-chat-message {
		width: max-content;
		min-width: 25%;
		max-width: 97%;
		margin-bottom: 25px;

		.sd-chat-message-content {
			padding: 20px 17px;
			border-radius: 12px;
			margin-bottom: 8px;
			background: #0063f7;
			color: #ffffff;

			.sd-message-sender {
				font-size: 12px;
				line-height: 15px;
				letter-spacing: 0.2px;
				margin-bottom: 14px;
			}

			.sd-message-text {
				font-weight: 600;
				font-size: 14px;
				line-height: 17px;
				letter-spacing: 0.2px;
			}
		}

		.sd-chat-message-date {
			font-size: 12px;
			line-height: 15px;
			text-align: left;
			letter-spacing: 0.2px;
			color: #8f90a6;
		}

		&.right {
			margin-left: auto;

			.sd-chat-message-content {
				background: #f4f6f3;
				color: #1c1c28;
			}

			.sd-chat-message-date {
				text-align: right;
			}
		}
	}
}
</style>