<template>
  <!-- Component Code -->
  <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

    <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

      <a href="#">
        <img class="w-full"
             src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1000"
             alt="Sunset in the mountains">
      </a>
      <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
        <a href="#"
           class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
          Best Activewear from the Nordstrom Anniversary Sale</a>
        <p class="text-gray-500 text-sm">
          Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!
        </p>
        <p class="mt-5 text-gray-600 text-xs">By <a href="#"
                                                    class="text-xs text-indigo-600 transition duration-500 ease-in-out">
          Mehdi Ahmadi
        </a> | in <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
          Cooking
        </a>, <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
          Recipe
        </a></p>
      </div>

    </div>

  </div>


</template>

<!--https://codepen.io/componentity/pen/RwaogOx-->
<script>
export default {
  name: "BlogCardBlock7"
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif !important;
}

</style>
