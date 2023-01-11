import { defineStore } from "pinia";

const API_KEY = "e08d347420b548169eb033e623bdfb88";

export const useRecipeStore = defineStore("recipe", {
	state: () => ({
		recipes: []
	}),
	actions: {
		async fetchRandomRecipes() {
			const request = "https://api.spoonacular.com/recipes/random?" + 
				new URLSearchParams({
					apiKey: API_KEY,
					number: 10
				});
			
			await fetch(request)
				.then((response) => response.json())
				.then((data) => this.recipes = data.recipes)
				.catch((error) => console.log(error));
		}
	},
	getters: {
		getRecipes(state) { 
			return state.recipes;
		}
	}
});