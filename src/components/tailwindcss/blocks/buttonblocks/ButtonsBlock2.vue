<template>
<div>
  <button class="inline-block px-4 py-2 mr-2 bg-gray-900 hover:bg-gray-800 rounded font-semibold text-white">
    Filled Button
  </button>

  <button class="inline-block px-4 py-2 mr-2 border-2 border-gray-900 hover:bg-gray-800 rounded font-semibold text-black hover:text-white">
    Hollow Button
  </button>


  <button class="inline-block pl-2 pr-4 py-2 mr-2 bg-gray-900 hover:bg-gray-800 rounded font-semibold text-white">
    <svg class="float-left w-6 h-6 fill-current mr-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m72.082 36.668l-17.914 17.914v-42.082h-8.3359v42.082l-17.914-17.914-5.8359 5.832 27.918 27.918 27.918-27.918z"/>
        <path d="m27.082 79.168h45.832v8.332h-45.832z"/>
      </g>
    </svg>

    Filled Icon Button
  </button>

  <button class="inline-block pl-2 pr-4 py-2 mr-2 border-2 border-gray-900 hover:bg-gray-800 rounded font-semibold text-black hover:text-white">
    <svg class="float-left w-6 h-6 fill-current mr-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m72.082 36.668l-17.914 17.914v-42.082h-8.3359v42.082l-17.914-17.914-5.8359 5.832 27.918 27.918 27.918-27.918z"/>
        <path d="m27.082 79.168h45.832v8.332h-45.832z"/>
      </g>
    </svg>
    Hollow Button
  </button>



  <br>


  <button class="inline-block px-4 py-2 mr-2 bg-gray-200 hover:bg-gray-800 rounded font-semibold text-black hover:text-white">
    Light Button
  </button>

  <button class="inline-block pl-2 pr-4 py-2 mr-2 bg-gray-200 hover:bg-gray-800 rounded font-semibold text-black hover:text-white">
    <svg class="float-left w-6 h-6 fill-current mr-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m72.082 36.668l-17.914 17.914v-42.082h-8.3359v42.082l-17.914-17.914-5.8359 5.832 27.918 27.918 27.918-27.918z"/>
        <path d="m27.082 79.168h45.832v8.332h-45.832z"/>
      </g>
    </svg>
    Light Icon Button
  </button>

  <button class="inline-block px-4 py-2 mr-2 bg-gray-900 hover:bg-gray-800 rounded font-semibold text-white hover:shadow-xl">
    Hover Shadow Button
  </button>

  <button class="inline-block pl-2 pr-4 py-2 mr-2 bg-gray-900 hover:bg-gray-800 rounded font-semibold text-white hover:shadow-xl">
    <svg class="float-left w-6 h-6 fill-current mr-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m72.082 36.668l-17.914 17.914v-42.082h-8.3359v42.082l-17.914-17.914-5.8359 5.832 27.918 27.918 27.918-27.918z"/>
        <path d="m27.082 79.168h45.832v8.332h-45.832z"/>
      </g>
    </svg>

    Filled Icon Button
  </button>

</div>
</template>

<!--https://codepen.io/danfascia/pen/vYEeaEE-->
<script>
export default {
name: "ButtonsBlock2"
}
</script>

<style scoped lang="scss">
button {
  margin: .61rem;
  transition: all ease-in-out 0.2s;
}
</style>
