<template>
	<div id="card">
		<img :src="recipe.image"/>
		<div id="info">
			<h2>{{ recipe.title }}</h2>
			<p>{{  }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "RecipeCard",
	props: ["recipe"]
}
</script>

<style>
#card {
	display: flex;
	padding: 10px;
	width: 600px;
	height: 200px;
	background-color: #080808;
	border-radius: 5px;
	margin-bottom: 15px;
}

#card:hover {
	opacity: 0.8;
	cursor: pointer;
}

img {
	max-width: 200px;
	object-fit: cover; 
	object-position: center;
}

#info {
	margin-left: 10px;
	display: flex;
	flex-direction: column;
}

h2 {
	margin: 0;
}
</style>