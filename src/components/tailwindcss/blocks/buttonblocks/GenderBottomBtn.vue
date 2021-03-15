<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="flex mt-5">
    <div class="m-3">
      <button
          class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
        <span class="mx-auto">Male</span>
      </button>
    </div>
    <div class="m-3">
      <button
          class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
        <span class="mx-auto">Female</span>

      </button>
    </div>
  </div>
</template>

<!--https://tailwindcomponents.com/component/gender-bottom-white-with-bottom-line-->
<script>
export default {
name: "GenderBottomBtn"
}
</script>

<style scoped lang="scss">

</style>
