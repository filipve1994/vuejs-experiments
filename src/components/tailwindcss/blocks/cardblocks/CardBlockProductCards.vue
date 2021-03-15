<template>
  <div class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="bg-white max-w-xs rounded overflow-hidden shadow-xl">
      <img class="w-full" src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" alt="Trainers">
      <div class="py-4 px-6">
        <div class="font-bold text-xl">Nike Trainers</div>
        <p class="text-gray-700 mt-2">I'm the description for some trainers</p>
      </div>
      <div class="h-px bg-gray-200"></div>
      <div class="py-4 px-6">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#new</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#slick</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#velcro</span>
      </div>
    </div>
    <div class="bg-white max-w-xs rounded overflow-hidden shadow-xl ml-8">
      <img class="w-full" src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" alt="Trainers">
      <div class="py-4 px-6">
        <div class="font-bold text-xl">Nike Trainers</div>
        <p class="text-gray-700 mt-2">I'm the description for some trainers</p>
      </div>
      <div class="h-px bg-gray-200"></div>
      <div class="py-4 px-6">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#new</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#slick</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#velcro</span>
      </div>
    </div>
  </div>
</template>

<!--https://codepen.io/tomellwood/pen/MWgJbXb-->
<script>
export default {
  name: "CardBlockProductCards"
}
</script>

<style scoped lang="scss">
.transition {
  transition-duration: 300ms;
}
</style>
