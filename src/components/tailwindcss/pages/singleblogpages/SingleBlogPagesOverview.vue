<template>
  <div class="">
    <!--    <h1>SingleBlogPagesOverview page</h1>-->

    <ul class="flex flex-row flex-wrap">
      <li class="m-2" v-for="route in routes.children">
        <router-link
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base
            font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            v-bind:to="routes.path + '/' + route.path">Show {{ route.component.name }}
        </router-link>
      </li>
    </ul>

    <hr/>

    <router-view></router-view>
  </div>


  <!--  <router-view></router-view>-->
</template>

<!--https://scotch.io/courses/build-an-online-shop-with-vue/nested-dynamic-routes-->
<!--https://www.digitalocean.com/community/tutorials/vuejs-nested-routes-->
<!--https://router.vuejs.org/guide/essentials/nested-routes.html-->
<!--https://dev.to/berniwittmann/my-approach-on-vue-router-architecture-and-nested-routes-2kmo-->
<!--https://javascript.plainenglish.io/defining-nested-routes-with-vue-router-2ce874cf2ca0-->
<script>

import {routes} from '@/router/index';

export default {
  name: "SingleBlogPagesOverview",
  data() {
    return {

      //https://stackoverflow.com/questions/41763723/how-can-i-run-functions-within-a-vue-data-object/41763856
      routes: {},
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
      this.routes = routes.find(element => (element.name === "SingleBlogPages" || element.path === "/singleblogpages"));
    }

  }
}
</script>

<style scoped lang="scss">

</style>
