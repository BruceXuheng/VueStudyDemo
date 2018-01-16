<template>
	<div id="app1">
		<div>{{message}}</div>
		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>
		
		
		<button v-on:click="greet('Hello12321')">getButton_Alert say :</button>
		
		<!--键盘事件-->
		<!--<input type="text" v-on:keyup="pressKey" v-on:keyup.alt.enter="enterHit"/>-->
		
		<hr />
		
		<!--computed 计算属性-->
		<label> First Name</label>
		<input type="text" v-model="user.firstName" />
		<br />
		<label> LastName</label>
		<input type="text" v-model="user.lastName" />
		
		
		<h4>{{fullName}}</h4>
		
		<h4>{{msg}}</h4>
		
	</div>
</template>

<script>
	export default {
		name: "test1",
		props:{
			msg:{
				type:String,
				default:"默认文字",
			}
		},
		data() {
			return {
				message:'123',
				items:[{title:"items 1"},
				{title:"items 2"},
				{title:"items 3"}
				],
				showName:false,
				user:{
					
					firstName:"Chenxh",
					lastName:"Chenxh",
					
				},
				
				
			}
		},
		methods:{
			greet:function(args){
				alert(args);
			},
			enterHit:function(){
				console.log("enterHit");
			},
			
		},
		computed:{
			fullName:function(){
				return this.user.firstName+" "+this.user.lastName
			}
		}
		

	}
	
</script>

<style>

</style>