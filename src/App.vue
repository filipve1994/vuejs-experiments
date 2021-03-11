<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->

    <div id="nav">
      <template v-for="route in routes">
        <router-link v-bind:to="route.path">{{route.name}}</router-link> |
      </template>

    </div>

    <router-view />
  </div>
</template>

<script>

import {routesNav} from '../src/router/index';

export default {
  data() {
    return {
      routes: routesNav
    }
  },
}
</script>

<style lang="scss">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;


}

#nav {
  padding: 30px;

  border-bottom: 1px solid;
  background-color: yellow;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
