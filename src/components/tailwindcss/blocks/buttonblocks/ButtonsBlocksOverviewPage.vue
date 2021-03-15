<template>
  <div class="w-full max-w-8xl mx-auto">

    <!--    <div class="grid grid-cols-3 gap-4">-->
    <!--      <div class="bg-fuchsia-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold" v-for="n in 10">{{n}}</div>-->
    <!--    </div>-->

    <div class="grid grid-cols-3 gap-4">


      <div><ButtonsBlock1></ButtonsBlock1></div>
      <div><ButtonsBlock2></ButtonsBlock2></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>


    </div>

  </div>
</template>

<script>
import ButtonsBlock1 from "@/components/tailwindcss/blocks/buttonblocks/ButtonsBlock1";
import ButtonsBlock2 from "@/components/tailwindcss/blocks/buttonblocks/ButtonsBlock2";
export default {
  name: "ButtonsBlocksOverviewPage",
  components: {ButtonsBlock2, ButtonsBlock1}
}
</script>

<style scoped lang="scss">

</style>