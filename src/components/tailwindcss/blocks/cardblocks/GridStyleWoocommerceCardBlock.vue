<template>
  <div class="max-w-screen-xl mx-auto px-10 py-24">

    <div class="md:flex justify-center">
      <div class="grid w-full lg:w-6/12">
        <div class="w-full bg-cover bg-center relative"
             style="min-height:300px; background-image:url(https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/278453-0012_1.jpeg);">
          <div
              class="bg-gray-900 opacity-75 absolute top-0 right-0 bottom-0 left-0 hover:opacity-50 transition duration-500 ease-in-out"></div>
          <div class="text-xs text-white absolute bottom-0 left-0 right-0 p-5 mb-16 md:mb-32">
            <a href="#" class="text-indigo-500 hover:text-white transition duration-500 ease-in-out capitalize italic">add
              any text here...</a>
            <a href="#"><h3 class="w-ful sm:w-64 uppercase text-xl sm:text-3xl lg:text-5xl">new arrivals</h3></a>
            <button
                class="mt-10 px-5 py-2 border-2 border-indigo-600 5ext-indigo-600 uppercase hover:bg-indigo-600 mx-3 text-base text-white transition-200">
              browse
            </button>
            <button
                class="mt-10 px-5 py-2 border-2 border-indigo-600 text-white uppercase bg-indigo-600 hover:bg-indigo-700 transition-200 text-base">
              shop now
            </button>
          </div>
        </div>

      </div>
      <div class="w-full lg:w-3/12 mx-2">
        <div class="w-full bg-cover bg-center relative h-full"
             style="min-height:300px; background-image:url(https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/252678-0029_1.jpeg);">
          <div
              class="bg-gray-900 opacity-75 absolute top-0 right-0 left-0 hover:opacity-50 transition duration-500 ease-in-out"></div>
          <div class="text-xs text-white absolute bottom-0 left-0 right-0 p-5 text-center">
            <p class="text-xl sm:text-2xl lg:text-3xl mb-16 block w-48 p-6 mx-auto transition duration-500 ease-in-out uppercase border-2 border-b border-indigo-600">
              Add any <span class="tracking-widest">content</span> here</p>
          </div>
        </div>
      </div>
      <div class="grid grid-rows-2 w-full lg:w-3/12">
        <div class="w-full bg-cover bg-center relative"
             style="min-height:300px; background-image:url(https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_1_front.jpg);">
          <div
              class="bg-gray-900 opacity-75 absolute top-0 right-0 bottom-0 left-0 hover:opacity-50 transition duration-500 ease-in-out"></div>
          <div class="text-xs text-white absolute bottom-0 left-0 right-0 p-5 text-center">
            <p class="text-xl sm:text-2xl lg:text-3xl mb-16 block w-48 p-6 mx-auto transition duration-500 ease-in-out uppercase border-2 border-b border-indigo-600">
              Add any <span class="tracking-widest">content</span> here</p>
          </div>
        </div>
        <div class="w-full bg-cover bg-center relative mt-2"
             style="min-height:300px; background-image:url(https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_3_front.jpg);">
          <div
              class="bg-gray-900 opacity-75 absolute top-0 right-0 bottom-0 left-0 hover:opacity-50 transition duration-500 ease-in-out"></div>
          <div class="text-xs text-white absolute bottom-0 left-0 right-0 p-5 text-center">
            <p class="text-xl sm:text-2xl lg:text-3xl mb-16 block w-48 p-6 mx-auto transition duration-500 ease-in-out uppercase border-2 border-b border-indigo-600">
              Add any <span class="tracking-widest">content</span> here</p>
          </div>
        </div>
      </div>

    </div>

  </div>


</template>

<!--https://codepen.io/componentity/pen/ExKXMRR-->
<script>
export default {
  name: "GridStyleWoocommerceCardBlock"
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif !important;
}

</style>
