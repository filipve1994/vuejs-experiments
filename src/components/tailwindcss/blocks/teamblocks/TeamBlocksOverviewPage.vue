<template>
  <div class="w-full max-w-8xl mx-auto">

    <!--    <div class="grid grid-cols-3 gap-4">-->
    <div class="grid grid-cols-1">

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CardBlock1
          </h2>
        </div>
      </div>
      <div>
        <TeamBlock1></TeamBlock1>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CardBlock1
          </h2>
        </div>
      </div>
      <div>
        <TeamBlock2></TeamBlock2>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CardBlock1
          </h2>
        </div>
      </div>
      <div>
        <TeamBlock3></TeamBlock3>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CardBlock1
          </h2>
        </div>
      </div>
      <div>
        <TeamBlock4></TeamBlock4>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CardBlock1
          </h2>
        </div>
      </div>
      <div>
        <TeamBlock5></TeamBlock5>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CardBlock1
          </h2>
        </div>
      </div>
      <div>
        <TeamBlock6></TeamBlock6>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CardBlock1
          </h2>
        </div>
      </div>
      <div>

      </div>


    </div>

  </div>
</template>

<script>
import TeamBlock1 from "@/components/tailwindcss/blocks/teamblocks/TeamBlock1";
import TeamBlock2 from "@/components/tailwindcss/blocks/teamblocks/TeamBlock2";
import TeamBlock3 from "@/components/tailwindcss/blocks/teamblocks/TeamBlock3";
import TeamBlock4 from "@/components/tailwindcss/blocks/teamblocks/TeamBlock4";
import TeamBlock5 from "@/components/tailwindcss/blocks/teamblocks/TeamBlock5";
import TeamBlock6 from "@/components/tailwindcss/blocks/teamblocks/TeamBlock6";
export default {
  name: "TeamBlocksOverviewPage",
  components: {TeamBlock6, TeamBlock5, TeamBlock4, TeamBlock3, TeamBlock2, TeamBlock1},
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">

</style>
