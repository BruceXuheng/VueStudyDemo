<template>
	<!--视图部分-->
	<div class="test">
		<h1>VueOneDemo</h1>
		<div>{{message}}</div>
		<h1>{{user.firstName}}</h1>
		<h1 v-if="showName" v-text="user.lastName"></h1>
		<!--<label for="r1">修改颜色</label>-->
		<input type="checkbox" v-model="class1" id="r1">
		<br><br>
		<div v-bind:class="{'class1': class1}">
			directiva v-bind:class
		</div>
	</div>

</template>

<script>
	//	逻辑部分
	export default {
		name: "test",
		data() {
			return {
				message: '<a href="http://blog.csdn.net/Mr_ChenXu?ref=toolbar">http://blog.csdn.net/Mr_ChenXu?ref=toolbar</a>',
				title: "Hello Vuew",
				user: {
					firstName: "hi Bruce",
					lastName: "hi jucie"
				},
				showName: true,
				class1: false,
			}
		}

	}
</script>

<style scoped>
	/*样式控制*/
	
	.class1 {
		background: #444;
		color: #eee;
	}
</style>