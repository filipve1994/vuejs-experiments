<template>
  <!-- component -->
  <div class=" w-full  flex  flex-row  flex-wrap  bg-gray-600  p-10  py-20  justify-center" style="background-repeat: no-repeat; background-size: cover; background-blend-mode: multiply;background-position: center center;background-image: url('https://images.unsplash.com/photo-1573079487717-f8ebae0b1539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');">
    <div class=" w-full  text-center">
      <div class=" text-3xl  text-center text-white  antialiased">Get Updates</div>
      <div class="text-xl   text-center  text-white antialiased">Find out about events and other news</div>
    </div>

    <form class=" mt-3  flex   flex-row   flex-wrap" action="" method="POST">
      <div class="text-gray-600  w-2/3">
        <input type="text" name="email" class="  w-full  p-2   rounded-l-lg" placeholder="john@mail.com"/>
      </div>
      <div class=" w-1/3">
        <button class=" w-full text-white  p-2  bg-indigo-400  rounded-r-lg text-center hover: bg-indigo-300" type="submit">Subscribe</button>
      </div>
    </form>
  </div>
</template>

<!--https://tailwindcomponents.com/component/subscription-card-->
<script>
export default {
name: "SubscriptionCard"
}
</script>

<style scoped lang="scss">

</style>
