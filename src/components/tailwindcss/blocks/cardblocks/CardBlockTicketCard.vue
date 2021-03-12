<template>
  <div class="flex h-screen items-center justify-center bg-gray-100">
    <div class="relative flex flex-col rounded-xl w-full max-w-sm bg-white shadow-md m-4 pt-4 items-center justify-center">
      <div class="absolute rounded-xl border-4 border-gray-100 p-4 bg-blue-400" style="top: -60px" width="100">
        <svg class="h-14 w-14 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <div class="py-4">
        <p class="mt-4 flex items-center justify-center text-4xl leading-none font-bold text-gray-900">100 $</p>
        <p class="mt-2 flex items-center justify-center text-md leading-none font-normal text-gray-500">November 4, 15:15 pm</p>
      </div>
      <div class="flex flex-row w-full justify-center items-center">
        <div class="rounded-full bg-gray-100" style="margin-left: -10px;height: 25px; width:25px;"></div>
        <div class="border-t-2 border-gray-400 border-dashed w-full"></div>
        <div class="rounded-full bg-gray-100" style="margin-right: -10px;height: 25px; width:25px;"></div>
      </div>

      <div class="flex flex-row w-full px-4 pt-2">
        <div class="h-12 w-24 rounded-md bg-blue-300 p-2 mr-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
          </svg>
        </div>
        <div class="flex flex-col justify-center w-full">
          <p class="text-gray-500 font-semibold">Product 1</p>
          <p class="text-gray-700 font-bold">description</p>
        </div>
        <div class="flex flex-col justify-center w-full items-end">
          <p class="text-gray-900 font-bold text-xl">50 $</p>
        </div>
      </div>
      <div class="flex flex-row w-full px-4 py-4">
        <div class="h-12 w-24 rounded-md bg-blue-300 p-2 mr-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </div>
        <div class="flex flex-col justify-center w-full">
          <p class="text-gray-500 font-semibold">Product 2</p>
          <p class="text-gray-700 font-bold">description</p>
        </div>
        <div class="flex flex-col justify-center w-full items-end">
          <p class="text-gray-900 font-bold text-xl">100 $</p>
        </div>
      </div>
      <div class="border-t-2 border-gray-300 border-separate w-full"></div>
      <div class="flex flex-row w-full px-4 justify-between pt-4">
        <p class="text-gray-700 font-semibold">Subtotal</p>
        <p class="text-gray-900 font-bold text-xl">150 $</p>
      </div>
      <div class="flex flex-row w-full px-4 justify-between pt-2 pb-6">
        <p class="text-gray-700 font-semibold">
          Discount
          <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-200 text-gray-800"> 20% </span>
        </p>
        <p class="text-blue-500 font-bold text-xl">- 30 $</p>
      </div>
    </div>
  </div>

</template>

<!--https://codepen.io/54nd10/pen/OJRXGZd-->
<script>
export default {
  name: "CardBlockTicketCard"
}
</script>

<style scoped lang="scss">

</style>
