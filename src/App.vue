<template>
	<div id="app">
		<!--<img src="./assets/logo.png">
    <router-view/>-->
		<newflag msg="覆盖默认"></newflag>
		<test1 msg="新的属性值"></test1>
		<usershow></usershow>
	</div>
</template>

<script>
	import newflag from './components/new_file'
	import test1 from './components/test1'
	import usershow from './components/usershow'
	export default {
		name: 'app',
		components: {
			usershow,test1,newflag
		}
	}

</script>

<style>
	#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!--unexpected tab character-->
<!--解决：-->
