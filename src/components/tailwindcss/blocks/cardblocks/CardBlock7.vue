<template>
  <div class="max-w-xs rounded-lg overflow-hidden shadow-lg">
    <img class="w-full h-64 object-cover object-center" src="https://images.unsplash.com/photo-1570922552666-4c7b62225409?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Chocolate cake</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
      <div class="mt-8 flex justify-start items-center">
        <img class="w-10 h-10 rounded-full mr-4 object-cover" src="https://randomuser.me/api/portraits/men/92.jpg" alt="Avatar of Jonathan Reinink">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">Jonathan Reinink</p>
          <p class="text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!--https://codepen.io/ClemHlrdt/pen/xxOKYjV-->
<script>
export default {
  name: "CardBlock7"
}
</script>

<style scoped lang="scss">
body {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
