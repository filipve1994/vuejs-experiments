<template>
  <!-- Component Code -->

  <div class="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center"
       style="background-image:url(https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);">
    <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

    <div class="z-50 flex flex-col justify-center items-center text-white w-full h-screen">
      <span class="text-bold">LOGO</span>
      <h1 class="text-5xl">We are <b>Almost</b> there!</h1>
      <p>Stay tuned for something amazing!!!</p>


    </div>

  </div>
</template>

<!--https://codepen.io/componentity/pen/dyMzoRR-->
<script>
export default {
  name: "ComingSoonPage2"
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

body {
  font-family: 'Poppins', sans-serif !important;
}

</style>
