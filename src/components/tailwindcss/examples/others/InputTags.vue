<template>
  <!-- component -->
  <div class="max-w-lg m-6">
    <div class="relative">
      <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter some tags">
      <div class="hidden">
        <div class="absolute z-40 left-0 mt-2 w-full">
          <div class="py-1 text-sm bg-white rounded shadow-lg border border-gray-300">
            <a class="block py-1 px-5 cursor-pointer hover:bg-indigo-600 hover:text-white">Add tag "<span class="font-semibold" x-text="textInput"></span>"</a>
          </div>
        </div>
      </div>
      <!-- selections -->
      <div class="bg-blue-100 inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden">
        <span class="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1" x-text="tag">tag</span>
        <button class="w-6 h-8 inline-block align-middle text-gray-500 bg-blue-200 focus:outline-none">
          <svg class="w-6 h-6 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<!--https://tailwindcomponents.com/component/input-tags-->
<script>
export default {
name: "InputTags"
}
</script>

<style scoped lang="scss">

</style>
