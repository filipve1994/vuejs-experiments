<template>
  <div>
      <h1>ComingSoonPagesOverview page</h1>
    <ul class="flex flex-row flex-wrap">
      <li class="m-2" v-for="route in routes.children">
        <router-link
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base
            font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            v-bind:to="routes.path + '/' + route.path">Show {{ route.component.name }}</router-link>
      </li>
    </ul>


    <router-view></router-view>

  </div>
</template>

<script>
import {routes} from "@/router";

export default {
  name: "ComingSoonPagesOverview",
  data() {
    return {
      routes: {}
    }
  },
  created() {
    console.log('created function.');

    this.getRoutes();

    // console.log('print magic')
    // console.log(this.$route);
    // console.log(this.$router.getRoutes());


  },
  methods: {

    getRoutes() {
      this.routes = routes.find(element => (element.name === "ComingSoonPages" || element.path === "/comingsoonpages"));
    }

  }
}
</script>

<style scoped lang="scss">

</style>
