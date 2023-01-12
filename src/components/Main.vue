<template>
	<div id="main">
		<IngredientSearch />
		<RecipeList/>
	</div>
</template>

<script>
import RecipeList from "./RecipeList.vue";
import IngredientSearch from "./IngredientSearch.vue";

export default {
	name: "Main",
	components: {
		RecipeList,
		IngredientSearch
	}
}
</script>

<style>
#main {
	min-width: 600px;
	top: 50px;
	position: absolute;
}
</style>