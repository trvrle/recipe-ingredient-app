<template>
	<NavigationBar id="navbar"/>
	<Main></Main>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
	NavigationBar,
	Main
  }
}
</script>

<style>
#navbar {
	position: fixed;
	top: 0px;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #e0e0e0;
}

body { 
	margin: 0; 
	overflow-y: scroll;
	overflow-x: hidden;
	background-color: #212121;
}
</style>
