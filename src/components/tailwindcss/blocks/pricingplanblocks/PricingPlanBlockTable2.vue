<template>

  <div>
    <div class="max-w-lg mx-auto">
      <h2 class="text-2xl md:text-5xl font-semibold text-center text-gray-100">Pricing Option</h2>
      <h3 class="mt-2 text-center text-gray-500">Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</h3>
    </div>
    <div class="my-8 mt-12 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      <div class="max-w-xs rounded-md border-2 border-solid border-indigo-600 border-opacity-25 hover:border-opacity-100 px-8 pt-8 pb-4">
        <h3 class="text-2xl font-semibold text-gray-100">Starter</h3>
        <p class="mt-1 text-gray-500">Go beyond email and customize your workflow</p>
        <div class="flex items-center mt-2 mb-4">
          <h4 class="text-5xl font-semibold text-gray-100 mr-4">$19</h4>
          <span class="text-xs text-gray-500">per user <br />per month</span>
        </div>
        <button type="button" class="my-2 w-full font-semibold text-indigo-600 hover:text-gray-100 hover:bg-indigo-700 rounded border border-solid border-indigo-600 border-opacity-25 py-3">Select Plan</button>
        <button type="button" class="w-full font-semibold text-gray-100 py-3 rounded border border-solid border-transparent hover:border-indigo-700">Learn More</button>
      </div>
      <div class="max-w-xs rounded-md border-2 border-solid border-indigo-600 px-8 pt-8 pb-4">
        <h3 class="text-2xl font-semibold text-gray-100">Method Plus</h3>
        <p class="mt-1 text-gray-500">Go beyond email and customize your workflow</p>
        <div class="flex items-center mt-2 mb-4">
          <h4 class="text-5xl font-semibold text-gray-100 mr-4">$29</h4>
          <span class="text-xs text-gray-500">per user <br />per month</span>
        </div>
        <button type="button" class="my-2 w-full font-semibold text-gray-100 bg-indigo-600 hover:bg-indigo-700 py-3 rounded">Select Plan</button>
        <button type="button" class="w-full font-semibold text-gray-100 py-3 rounded border border-solid border-transparent hover:border-indigo-700">Learn More</button>
      </div>
      <div class="max-w-xs rounded-md border-2 border-solid border-indigo-600 border-opacity-25 hover:border-opacity-100 px-8 pt-8 pb-4">
        <h3 class="text-2xl font-semibold text-gray-100">Method Pro</h3>
        <p class="mt-1 text-gray-500">Go beyond email and customize your workflow</p>
        <div class="flex items-center mt-2 mb-4">
          <h4 class="text-5xl font-semibold text-gray-100 mr-4">$39</h4>
          <span class="text-xs text-gray-500">per user <br />per month</span>
        </div>
        <button type="button" class="my-2 w-full font-semibold text-indigo-600 hover:text-gray-100 hover:bg-indigo-700 rounded border border-solid border-indigo-600 border-opacity-25 py-3">Select Plan</button>
        <button type="button" class="w-full font-semibold text-gray-100 py-3 rounded border border-solid border-transparent hover:border-indigo-700">Learn More</button>
      </div>
    </div>

</div>

</template>

<!--https://codepen.io/angro/pen/XWmQqJj-->
<script>
export default {
name: "PricingPlanBlockTable2"
}
</script>

<style scoped lang="scss">

</style>
