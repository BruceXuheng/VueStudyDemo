<template>
	<div id="app">
		<!--<img src="./assets/logo.png">
    <router-view/>-->

		<test1 msg="新的属性值"></test1>
		
	</div>
</template>

<script>
	import test1 from './components/test1'
	export default {
		name: 'app',
		components: {
			test1
		}
	}

</script>

<style>
	/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>

<!--unexpected tab character-->
<!--解决：-->
