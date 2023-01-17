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
			@update:search="onSearch"
			@update:model-value="onChange"
			item-title="name"
			item-value="name"
			no-filter
			hide-no-data
		>
			<template v-slot:chip="{ props, item }">
				<v-chip
					v-bind="props"
					:prepend-avatar="item.raw.avatar"
					:text="item.raw.name"
				></v-chip>
			</template>

			<template v-slot:item="{ props, item }">
				<v-list-item
					v-bind="props"
					:prepend-avatar="item?.raw?.image"
					:title="item?.raw?.name"
				></v-list-item>
			</template>
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
		onSearch(text) {
			const { fetchAutocompleteIngredients } = useRecipeStore();
			fetchAutocompleteIngredients(text);
		},
		onChange() {
			const { fetchFilteredRecipes } = useRecipeStore();
			fetchFilteredRecipes(this.model);
		}
	}
}
</script>

<style>
#search {
	margin-top: 15px;
}
</style>