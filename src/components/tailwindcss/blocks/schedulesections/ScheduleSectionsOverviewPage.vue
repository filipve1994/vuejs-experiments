<template>
  <div class="w-full max-w-8xl mx-auto">

    <!--    <div class="grid grid-cols-3 gap-4">-->
    <div class="grid grid-cols-1">

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            ScheduleSectionTailwind1
          </h2>
        </div>
      </div>
      <div>
        <ScheduleSectionTailwind1></ScheduleSectionTailwind1>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            ScheduleSectionTailwind2
          </h2>
        </div>
      </div>
      <div>
        <ScheduleSectionTailwind2></ScheduleSectionTailwind2>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            ScheduleSectionTailwind3
          </h2>
        </div>
      </div>
      <div>

        <ScheduleSectionTailwind3></ScheduleSectionTailwind3>

      </div>

      <div style="background-color: #667eea">
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            ScheduleSectionTailwind1
          </h2>
        </div>
      </div>
      <div>

      </div>

    </div>

  </div>
</template>

<script>
import ScheduleSectionTailwind1 from "@/components/tailwindcss/blocks/schedulesections/ScheduleSectionTailwind1";
import ScheduleSectionTailwind2 from "@/components/tailwindcss/blocks/schedulesections/ScheduleSectionTailwind2";
import ScheduleSectionTailwind3 from "@/components/tailwindcss/blocks/schedulesections/ScheduleSectionTailwind3";
export default {
  name: "ScheduleSectionsOverviewPage",
  components: {ScheduleSectionTailwind3, ScheduleSectionTailwind2, ScheduleSectionTailwind1},
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">

</style>
