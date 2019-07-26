<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
  
#app, html, body {
  height: 100%;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
}
</style>
