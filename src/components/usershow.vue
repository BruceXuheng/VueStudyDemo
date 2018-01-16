<template>
	<div id="usershow">
		<h1>USER</h1>
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter name" /><br />
			<input type="text" v-model="newUser.email" placeholder="Enter email" /><br />
			<input type="submit" value="Submit" />
		</form>
		<ul>
			<!--展示用户信息-->
			<li v-for="user in users">
				<input type="checkbox" class="toggle" v-model="user.contacted" />
				<span :class="{contacted:user.contacted}">
					{{user.name}}:{{user.email}}
					<button v-on:click="delUser(user)">删除</button>
				</span>
			</li>

		</ul>

	</div>

</template>

<script>
	export default {
		name: "usershow",
		data() {
			return {
				newUser: {},
				users: [{
						name: "Chenxh1",
						email: "Chenxh1@email.com",
						contacted: false
					},
					{
						name: "cccc",
						email: "BruceXuheng@email.com",
						contacted: false
					},
					{
						name: "Chenxh3",
						email: "Chenxh3@email.com",
						contacted: false
					},
					{
						name: "Chenxh4",
						email: "Chenxh4@email.com",
						contacted: false
					}
				]

			}
		},
		methods: {
			addUser: function(e) {
				this.users.push({
					name: this.newUser.name,
					email: this.newUser.email,
					contacted: false
				});

				e.preventDefault();
			},
			delUser: function(user) {
				this.users.splice(this.users.indexOf(user), 1)
			}

		}
	}
</script>

<style scoped>
	.contacted{
		text-decoration: line-through;
	}

</style>