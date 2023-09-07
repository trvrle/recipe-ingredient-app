<template>
  <div id="card">
    <img :src="recipe.image" />
    <div id="info">
      <h2>{{ recipe.title }}</h2>
      <div id="icon-info">
        <v-icon v-if="recipe.vegetarian" id="leaf" icon="mdi-leaf"></v-icon>
        <v-icon
          v-if="recipe.veryPopular"
          id="thumb"
          icon="mdi-thumb-up"
        ></v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["recipe"],
};
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
  width: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 0;
}

#icon-info {
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: flex-end;
}

#thumb {
  margin-right: 5px;
  color: lightgray;
}

#leaf {
  color: green;
}
</style>
