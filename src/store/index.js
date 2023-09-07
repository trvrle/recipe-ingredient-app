import { defineStore } from "pinia";

const API_KEY = "e08d347420b548169eb033e623bdfb88";

export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    recipes: [],
    autocompleteIngredients: [],
  }),
  actions: {
    async fetchRandomRecipes() {
      const request =
        "https://api.spoonacular.com/recipes/random?" +
        new URLSearchParams({
          apiKey: API_KEY,
          number: 10,
        });

      await fetch(request)
        .then((response) => response.json())
        .then((data) => (this.recipes = data.recipes))
        .catch((error) => console.log(error));
    },
    async fetchAutocompleteIngredients(text) {
      if (text === "") {
        this.autocompleteIngredients = [];
        return;
      }

      const request =
        "https://api.spoonacular.com/food/ingredients/autocomplete?" +
        new URLSearchParams({
          apiKey: API_KEY,
          number: 5,
          query: text,
        });

      await fetch(request)
        .then((response) => response.json())
        .then((data) => (this.autocompleteIngredients = data))
        .catch((error) => console.log(error));
    },
    async fetchFilteredRecipes(query) {
      if (Object.keys(query).length === 0) {
        this.fetchRandomRecipes();
        return;
      }

      let ingredients = "";
      for (const key in query) {
        ingredients += query[key] + ",";
      }

      const request =
        "https://api.spoonacular.com/recipes/findByIngredients?" +
        new URLSearchParams({
          apiKey: API_KEY,
          ingredients: ingredients,
        });

      await fetch(request)
        .then((response) => response.json())
        .then((data) => (this.recipes = data))
        .catch((error) => console.log(error));
    },
  },
  getters: {
    getRecipes(state) {
      return state.recipes;
    },
    getAutocompleteIngredients(state) {
      const appendImageUrl = (image) =>
        "https://spoonacular.com/cdn/ingredients_100x100/" + image;
      const capitalizeFirstLetter = (word) =>
        word.charAt(0).toUpperCase() + word.slice(1);
      return state.autocompleteIngredients.map((o) => ({
        name: capitalizeFirstLetter(o.name),
        image: appendImageUrl(o.image),
      }));
    },
  },
});
