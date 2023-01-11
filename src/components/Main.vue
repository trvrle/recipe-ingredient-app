<template>
	<div id="main">
		<RecipeList>

		</RecipeList>
	</div>
</template>

<script>
import RecipeList from "./RecipeList.vue";

export default {
	name: "Main",
	components: {
		RecipeList
	}
}
</script>

<style>
#main {
	top: 50px;
	position: absolute;
}
</style>