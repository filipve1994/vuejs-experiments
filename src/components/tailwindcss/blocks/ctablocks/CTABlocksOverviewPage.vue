<template>
  <div class="w-full max-w-8xl mx-auto">

    <!--    <div class="grid grid-cols-3 gap-4">-->
    <div class="grid grid-cols-1">

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CTABlock1
          </h2>
        </div>
      </div>
      <div>
        <CTABlock1></CTABlock1>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CTABlock2
          </h2>
        </div>
      </div>
      <div>
        <CTABlock2></CTABlock2>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CTABlock3
          </h2>
        </div>
      </div>
      <div>
        <CTABlock3></CTABlock3>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CTABlock4
          </h2>
        </div>
      </div>
      <div>
        <CTABlock4></CTABlock4>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CTABlock5
          </h2>
        </div>
      </div>
      <div>
        <CTABlock5></CTABlock5>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CTABlock6
          </h2>
        </div>
      </div>
      <div>
        <CTABlock6></CTABlock6>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            CTABlock7
          </h2>
        </div>
      </div>
      <div>
        <CTABlock7></CTABlock7>

      </div>

    </div>

  </div>
</template>

<script>
import CTABlock1 from "@/components/tailwindcss/blocks/ctablocks/CTABlock1";
import CTABlock2 from "@/components/tailwindcss/blocks/ctablocks/CTABlock2";
import CTABlock3 from "@/components/tailwindcss/blocks/ctablocks/CTABlock3";
import CTABlock4 from "@/components/tailwindcss/blocks/ctablocks/CTABlock4";
import CTABlock5 from "@/components/tailwindcss/blocks/ctablocks/CTABlock5";
import CTABlock6 from "@/components/tailwindcss/blocks/ctablocks/CTABlock6";
import CTABlock7 from "@/components/tailwindcss/blocks/ctablocks/CTABlock7";
export default {
  name: "CTABlocksOverviewPage",
  components: {CTABlock7, CTABlock6, CTABlock5, CTABlock4, CTABlock3, CTABlock2, CTABlock1},
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">

</style>
