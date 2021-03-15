<template>

  <div class="w-full max-w-8xl mx-auto">

<!--    <div class="grid grid-cols-3 gap-4">-->
<!--      <div class="bg-fuchsia-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold" v-for="n in 10">{{n}}</div>-->
<!--    </div>-->

    <div class="grid grid-cols-3 gap-4">

      <div><AuthorBox1></AuthorBox1></div>
      <div><AuthorBox2></AuthorBox2></div>
      <div><AuthorBox3></AuthorBox3></div>
      <div><AuthorBox4></AuthorBox4></div>
      <div><AuthorBox5></AuthorBox5></div>
      <div><AuthorBoxEyeCatching></AuthorBoxEyeCatching></div>
      <div><AuthorBoxGradient></AuthorBoxGradient></div>
      <div></div>

    </div>

<!--    <AuthorBox1></AuthorBox1>-->
<!--    <AuthorBox2></AuthorBox2>-->
<!--    <AuthorBox3></AuthorBox3>-->
<!--    <AuthorBox4></AuthorBox4>-->
<!--    <AuthorBox5></AuthorBox5>-->
<!--    <AuthorBoxEyeCatching></AuthorBoxEyeCatching>-->
<!--    <AuthorBoxGradient></AuthorBoxGradient>-->




  </div>

</template>

<script>
import AuthorBox1 from "@/components/tailwindcss/blocks/authorboxes/AuthorBox1";
import AuthorBox2 from "@/components/tailwindcss/blocks/authorboxes/AuthorBox2";
import AuthorBox3 from "@/components/tailwindcss/blocks/authorboxes/AuthorBox3";
import AuthorBox4 from "@/components/tailwindcss/blocks/authorboxes/AuthorBox4";
import AuthorBox5 from "@/components/tailwindcss/blocks/authorboxes/AuthorBox5";
import AuthorBoxEyeCatching from "@/components/tailwindcss/blocks/authorboxes/AuthorBoxEyeCatching";
import AuthorBoxGradient from "@/components/tailwindcss/blocks/authorboxes/AuthorBoxGradient";
export default {
name: "AuthorBoxesOverviewPage",
  components: {AuthorBoxGradient, AuthorBoxEyeCatching, AuthorBox5, AuthorBox4, AuthorBox3, AuthorBox2, AuthorBox1}
}
</script>

<style scoped lang="scss">

</style>