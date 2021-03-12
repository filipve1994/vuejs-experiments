<template>
<div>
  <AboutSection1></AboutSection1>
  <AboutSection2></AboutSection2>
  <AboutSection3></AboutSection3>
  <AboutSection4></AboutSection4>
</div>
</template>

<script>
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "@/components/tailwindcss/blocks/aboutsections/AboutSection2";
import AboutSection3 from "@/components/tailwindcss/blocks/aboutsections/AboutSection3";
import AboutSection4 from "@/components/tailwindcss/blocks/aboutsections/AboutSection4";
export default {
  name: "AboutSectionOverviewPage",
  components: {AboutSection4, AboutSection3, AboutSection2, AboutSection1}
}
</script>

<style scoped lang="scss">

</style>
