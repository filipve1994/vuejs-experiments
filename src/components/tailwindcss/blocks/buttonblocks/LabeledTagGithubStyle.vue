<template>
  <!-- component -->
  <div class="flex flex-shrink-0">
    <div class="flex flex-shrink-0 text-sm items-center px-2">
      <div class="bg-gray-400 text-gray-600 px-2 py-1 rounded-l-md">Type</div>
      <div class="bg-gray-500 text-green-100 px-2 py-1 rounded-r-md">Primary</div>
    </div>

    <div class="flex flex-shrink-0 text-sm items-center pr-2">
      <div class="bg-gray-300 text-gray-600 px-2 py-1 rounded-l">Status</div>
      <div class="bg-green-200 text-green-700 px-2 py-1 rounded-r">Active</div>
    </div>

    <div class="flex flex-shrink-0 text-sm items-center pr-2">
      <div class="bg-gray-300 text-gray-600 px-2 py-1 rounded-l">Status</div>
      <div class="bg-red-200 text-red-900 px-2 py-1 rounded-r">Closed</div>
    </div>
  </div>
</template>

<!--https://tailwindcomponents.com/component/github-style-tag-->
<script>
export default {
  name: "LabeledTagGithubStyle"
}
</script>

<style scoped lang="scss">

</style>
