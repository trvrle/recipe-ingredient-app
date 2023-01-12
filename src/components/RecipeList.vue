<template>
	<RecipeCard
		v-for="recipe in recipes"
		:key="recipe.id"
		:recipe="recipe"
	>
	</RecipeCard>
</template>

<script>
import RecipeCard from './RecipeCard.vue';
import { useRecipeStore } from "@/store/index"
import { storeToRefs } from 'pinia'

export default {
	name: "RecipeList",
	components: {
		RecipeCard
	},
	data() {
		return {
			recipes: []
		}
	},
	mounted() {
		const { fetchRandomRecipes } = useRecipeStore();
		fetchRandomRecipes();
		const { getRecipes } = storeToRefs(useRecipeStore());
		this.recipes = getRecipes;
	}

};
</script>

<style>

</style>