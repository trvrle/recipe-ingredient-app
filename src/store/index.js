import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    recipes: [],
    autocompleteIngredients: [],
  }),
  actions: {
    async fetchRandomRecipes() {
      const request = "http://localhost:8080/api/v1/recipe/random";

      await fetch(request)
        .then((response) => response.json())
        .then((data) => (this.recipes = data))
        .catch((error) => console.log(error));
    },
    async fetchAutocompleteIngredients(text) {
      if (text === "") {
        this.autocompleteIngredients = [];
        return;
      }

      const request =
        "http://localhost:8080/api/v1/recipe/ingredient?" +
        new URLSearchParams({
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
        "http://localhost:8080/api/v1/recipe?" +
        new URLSearchParams({
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
      return state.autocompleteIngredients;
    },
  },
});
