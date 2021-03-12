<template>
  <section class="h-screen text-center flex items-center justify-between max-w-2xl mx-auto">

    <div class="inline-flex rounded shadow-sm my-2">
      <button class="bg-gray-900 hover:bg-gray-800 text-white transition-all duration-150 ease-in-out font-semibold px-5 py-2 rounded">
        Click me
      </button>
    </div>

    <div class="inline-flex rounded shadow-sm my-2">
      <button class="bg-gray-900 hover:bg-gray-800 text-white transition-all duration-150 ease-in-out font-semibold px-5 py-2 rounded flex items-center">
        <svg viewBox="0 0 20 20" fill="currentColor" class="search w-5 h-5 mr-1"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        Search
      </button>
    </div>

    <div class="inline-flex rounded shadow-sm my-2">
      <button class="bg-transparent border-2 border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white transition-all duration-150 ease-in-out font-semibold px-5 py-2 rounded flex items-center">
        <svg viewBox="0 0 20 20" fill="currentColor" class="search w-5 h-5 mr-1"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        Search
      </button>
    </div>

    <div class="inline-flex my-2">
      <button class="bg-transparent hover:bg-gray-300 text-gray-900 hover:text-gray-900 transition-all duration-300 ease-in-out font-semibold px-5 py-2 rounded flex items-center">
        <svg viewBox="0 0 20 20" fill="currentColor" class="search w-5 h-5 mr-1"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        Search
      </button>
    </div>

  </section>
</template>

<!--https://codepen.io/danfascia/pen/RwaKNmE-->
<script>
export default {
name: "ButtonsBlock1"
}
</script>

<style scoped lang="scss">

</style>
