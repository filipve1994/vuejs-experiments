<template>
  <div>
    <div class="mx-auto w-full max-w-lg">
      <form class="gradient shadow-md rounded px-8 pt-6 pb-8 mt-10 mb-4">
        <div class="flex justify-between mt-10">

          <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name" type="text" placeholder="❣️ mikado" v-model="message">

          <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name" type="text" placeholder="🌀 zvečevo" v-model="squicky">
        </div>
        <img src="https://img.shields.io/badge/Antonio-vru%C4%87e%20mi%20je!-f00.svg" alt="antonio-vruce mi je"
             class="mx-auto flex self-center">

        <div class="flex justify-between mt-10">

          <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name" type="text" placeholder="Mottley Cure" v-model="carbonara">

          <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name" type="text" placeholder="⁂⁂⁂⁂⁂⁂⁂⁂⁂⁂" v-model="mynx">

        </div>
      </form>
    </div>
    <!--<div class="container mx-auto p-8">-->

    <div class="container mx-auto p-8 flex flex-wrap justify-center">


      <!-- Start of the tag -->
      <div class="inline-flex rounded overflow-hidden mr-2 mb-2">
    <span class="px-2 leading-loose mio mao">
      Supercool
    </span>
        <span class="px-2 leading-loose bg-purple-700 text-yellow-300">
      Suprawodljivost
    </span>
      </div>
      <!-- End of the tag -->

      <!-- Start of the tag -->
      <div class="inline-flex rounded overflow-hidden mr-2 mb-2">
        <span class="px-2 leading-loose mio text-indigo-200">Falkonela</span>
        <span class="px-2 leading-loose red text-indigo-200"
              title="mliječna mala"
              v-tippy="{
  animateFill: false, arrow: true,
  theme : 'light bordered',
  animation : 'perspective', duration : '[600,300]'}">
   <i class="text-white fa fa-anchor" aria-hidden="true"></i>
   </span>

        <span class="px-2 leading-loose mio text-indigo-200">Sorbone</span>
      </div>
      <!-- End of the tag -->

      <div class="inline-flex rounded overflow-hidden mr-2 mb-2">
    <span class="px-2 leading-loose mio text-yellow-200">
      {{ message }}
    </span>
        <span class="px-2 leading-loose bg-purple-700 text-yellow-300">
      {{ squicky }}
    </span>
      </div>

      <!-- Start of the tag -->
      <div class="inline-flex rounded overflow-hidden mr-2 mb-2">
    <span class="px-2 leading-loose mio mao">
      Mottley Cure
    </span>

        <span class="px-2 leading-loose red text-white">
      {{ carbonara }}
    </span>
        <span class="px-2 leading-loose bg-purple-700 text-indigo-100">
      {{ mynx }}
    </span>
      </div>
      <!-- End of the tag -->


      <!-- Start of the tag -->
      <div class="inline-flex rounded overflow-hidden mr-2 mb-2">
    <span class="px-2 leading-loose mio mao border-r-2 border-blue-500">
      🍸
    </span>

        <span class="px-2 leading-loose mio ski">
     <b>Glacial Archer</b>
    </span>
        <span class="px-2 leading-loose bg-purple-700 text-indigo-100">
      Archer [[Mott The Hoople]]
    </span>
      </div>
      <!-- End of the tag -->


      <!-- Start of the tag -->
      <div class="inline-flex rounded overflow-hidden mr-2 mb-2">
    <span class="px-2 leading-loose bg-black moa">
    <b>Don't Disturb</b>
    </span>
        <span class="px-2 leading-loose bg-purple-700 text-indigo-100">
      <b>Tiny Grass is Dreaming</b>
    </span>
      </div>
      <!-- End of the tag -->

      <!-- Start of the tag -->
      <div class="inline-flex rounded overflow-hidden mr-2 mb-2">
        <span class="px-2 leading-loose bg-nivea text-white"><b>NIVEA</b></span>
        <span class="px-2 leading-loose nivea ski">hand cream</span>
      </div>
      <!-- End of the tag -->


      <!-- Start of the tag -->
      <div class="inline-flex rounded overflow-hidden mr-2 mb-2">
        <span class="px-2 leading-loose bg-nivea text-white"><b>MOLOKO</b></span>
        <span class="px-2 leading-loose bg-black ski">🔱</span>
        <span class="px-2 leading-loose bg-nivea text-white"><b>Forever More</b></span>

      </div>
      <!-- End of the tag -->


      <!-- Start of the tag -->
      <div class="inline-flex rounded overflow-hidden mr-2 mb-2">
        <span class="px-2 leading-loose bg-nivea text-white"><b>Marburg</b></span>
        <span class="px-2 leading-loose bg-black ski">💯</span>
        <span class="px-2 leading-loose bg-nivea text-white"><b>Njemačka</b></span>

      </div>
      <!-- End of the tag -->

      <!-- Start of the tag -->
      <div class="inline-flex rounded overflow-hidden mr-2 mb-2">
        <span class="px-2 leading-loose bg-nivea text-white"><b>staklo</b></span>
        <span class="px-2 leading-loose bg-black ski">💯</span>
        <span class="px-2 leading-loose bg-nivea text-white"><b>glacialis</b></span>

      </div>
      <!-- End of the tag -->
    </div>

  </div>
</template>

<!--https://codepen.io/diomed/pen/ewOVeK-->
<script>
export default {
  name: "TagsBlock",
  data: {
    message: 'serotonin ❣️',
    squicky: 'uikiyo-e',
    carbonara: 'Deutsche Welle',
    mynx: ''
  }
}
</script>

<style scoped lang="scss">
.gradient {
  background: linear-gradient(to top right, #524ad0 10%, #D099FA
  );
}

.mio {
  background-color: #241d42
}

.mao {
  color: #99a7ee
}

.moa {
  color: #99a7ea
}

.red {
  background-color: red
}

.ski {
  color: #679EFE
}

.bg-nivea {
  background-color: #00235d
}

.container {
  width: 50rem
}

.nivea {
  background-color: #192c7b
}
</style>
