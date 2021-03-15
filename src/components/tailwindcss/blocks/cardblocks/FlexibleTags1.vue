<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="h-screen flex items-center">
    <div class='shadow rounded-md bg-white w-full max-w-lg h-48'>

      <div class='flex items-center px-5 py-3'>
        <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.pravatar.cc/200?u=007'>
        <div class='mx-3'>
          <p class='text-gray-600'>New Story from <b>Arya Stark</b>, <a class='text-blue-500 hover:text-blue-400 hover:underline'>Read now</a>.</p>
        </div>
      </div>

      <hr />

      <div class='px-5 py-3'>
        <h3 class="font-bold text-xs" >TAGS</h3>
        <!-- This is the tags container -->
        <div class='my-3 flex flex-wrap -m-1'>
          <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer" >#winter</span>
          <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#stark</span>
          <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#gameofthrones</span>
          <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#battle</span>
          <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#jhonsnow</span>
          <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#kinglandings</span>
        </div>
      </div>


    </div>
  </div>
</template>

<!--https://tailwindcomponents.com/component/flexible-tags-->
<script>
export default {
  name: "FlexibleTags1"
}
</script>

<style scoped lang="scss">

</style>
