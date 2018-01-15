<template>
	<div id="app1">
		{{message}}
		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "test",
		data() {
			return {
				items:[{title:"items 1"},
				{title:"items 2"},
				{title:"items 3"}
				],
			}
		}

	}
	
</script>

<style>

</style>