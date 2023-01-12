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
		>
		</v-autocomplete>
	</div>
</template>

<script>
export default {
	name: "IngredientSearch",
	data () {
      return {
        model: null,
        ingredients: [
          'Apple', 'Chocolate', 'Orange', 'Strawberry'
        ],
      }
    },
	mounted() {
		console.log(this.states)
	}
}
</script>

<style>
#search {
	margin-top: 15px;
}
</style>