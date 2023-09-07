<template>
  <v-app>
    <v-main id="vuetify-main">
      <NavigationBar id="navbar" />
      <Main></Main>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    Main,
  },
};
</script>

<style>
#navbar {
  position: fixed;
  top: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #e0e0e0;
}

#vuetify-main {
  display: flex;
  justify-content: center;
  background-color: #212121;
}

body {
  margin: 0;
  background-color: #212121;
}
</style>
