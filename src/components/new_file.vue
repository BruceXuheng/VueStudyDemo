<template>
	<div id="newflag">
		<h1>{{msg}}</h1>
	</div>

</template>

<script>
	export default {
		name: "newflag",
		props:{
			msg:{
				type:String,
				default:"默认文字",
			}
		},
	}
</script>

<style>

</style>