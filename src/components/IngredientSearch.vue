<template>
	<div id="search">
		<v-autocomplete
			v-model="model"
			chips
			closable-chips
			clearable
			multiple
			:items="ingredients"
			label="Search for ingredients..."
			@update:search="onChange"
			item-title="name"
			no-filter
			hide-no-data
		>
		</v-autocomplete>
	</div>
</template>

<script>
import { useRecipeStore } from "@/store/index"
import { storeToRefs } from "pinia";

export default {
	name: "IngredientSearch",
	data () {
      return {
        model: null,
        ingredients: [],
      }
    },
	mounted() {
		const { getAutocompleteIngredients } = storeToRefs(useRecipeStore());
		this.ingredients = getAutocompleteIngredients;
	},
	methods: {
		onChange(text) {
			const { fetchAutocompleteIngredients } = useRecipeStore();
			fetchAutocompleteIngredients(text);
		}
	}
}
</script>

<style>
#search {
	margin-top: 15px;
}
</style>