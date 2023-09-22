import { defineStore } from "pinia";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    recipes: [],
    autocompleteIngredients: [],
  }),
  actions: {
    async fetchRandomRecipes() {
      const request = process.env.VUE_APP_BASE_URL + "/api/v1/recipe/random";
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

      const params = new URLSearchParams({
        query: text,
      });

      axiosInstance
        .get("/api/v1/recipe/ingredient", { params })
        .then((response) => response.data)
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

      const params = new URLSearchParams({
        ingredients: ingredients,
      });

      axiosInstance
        .get("/api/v1/recipe", { params })
        .then((response) => response.data)
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
