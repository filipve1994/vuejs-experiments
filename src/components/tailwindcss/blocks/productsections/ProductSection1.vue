<template>
  <div class="max-w-screen-xl mx-auto py-24 bg-white p-5">
    <div class="text-center mb-10">
      <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
        BRANDS
      </p>
      <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
        Brand <span class="text-indigo-600">Shirts</span>
      </h3>
    </div>
    <div class="sm:flex items-center">
      <!--   copy this section   -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 p-5">
        <div class="sm:col-span-5">
          <a href="#"><img class="w-full h-full m:mr-10"
                           src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_front.jpg"
                           alt="Avatar of Jonathan Reinink"></a>
        </div>
        <div class="sm:col-span-7">
          <div class="text-left sm:mt-4">
            <div class="text-gray-500">
              <a href="#" class="uppercase block text-indigo-600 text-xs hover:text-gray-700">clothing</a>
              <a href="#" class="capatalize text-black text-2xl font-semibold hover:text-indigo-600">Happy Ninja</a>
              <p class="text-sm text-black">$18.00</p>

              <p class="mt-2 text-sm">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
                tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              </p>
              <div class="sm:flex justify-between items-end">
                <div class="text-sm mt-5">
                  <button
                      class="px-5 py-3 uppercase border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-200">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 my-5 p-5">
        <div class="sm:col-span-5">
          <a href="#"><img class="w-full h-full m:mr-10"
                           src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_front.jpg"
                           alt="Avatar of Jonathan Reinink"></a>
        </div>
        <div class="sm:col-span-7">
          <div class="text-left sm:mt-4">
            <div class="text-gray-500">
              <a href="#" class="uppercase block text-indigo-600 text-xs hover:text-gray-700">clothing</a>
              <a href="#" class="capatalize text-black text-2xl font-semibold hover:text-indigo-600">Happy Ninja</a>
              <p class="text-sm text-black">$18.00</p>

              <p class="mt-2 text-sm">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
                tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              </p>
              <div class="sm:flex justify-between items-end">
                <div class="text-sm mt-5">
                  <button
                      class="px-5 py-3 uppercase border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-200">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>


</template>

<!--https://codepen.io/componentity/pen/QWNgYzL-->
<script>
export default {
  name: "ProductSection1"
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

body {
  font-family: 'Poppins', sans-serif !important;
}

.h-full-img {
  height: 340px !important
}

.w-full-img {
  width: 280px !important
}

</style>
