<template>
<!--  <div id="app" class="text-black antialiased flex justify-center bg-gray-100 min-h-screen">-->
    <div class="w-full max-w-4xl px-4">
      <!-- header -->
      <div class="text-3xl font-bold pt-6 pb-4 px-2">Notes</div>
      <!-- Grid -->
      <div class="flex flex-wrap">
        <!-- notes -->
        <div class="w-1/3 p-2" v-for="(note, i) in notes">
          <div class="w-full bg-white border border-gray-200 h-40 flex items-start">
          <textarea v-model="notes[i]" class="flex-1 bg-transparent h-32 py-4 px-5" placeholder="Your note...">
          </textarea>
            <button class="ion-md-close text-gray-300 hover:text-gray-600 py-1 px-3" @click="notes.splice(i, 1)"></button>
          </div>
        </div>
        <!-- new note -->
        <div class="w-1/3 p-2">
          <div @click="notes.push('')" class="h-40 border border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-white">
            <div class="text-4xl font-thin text-gray-400">+</div>
          </div>
        </div>
      </div>
    </div>
<!--  </div>-->
</template>

<!--https://codepen.io/andgordy/pen/ywwOPb-->
<script>
export default {
  name: "NoteTakingBlock",
  data() {
    return {
      notes: [
        'Plumber: +1 555 800 8080',
        'Tailwind border styles: https://tailwindcss.com/docs/border-style/',
        'Buy granola and milk',
        'Peaky Blinders @ imdb: https://www.imdb.com/title/tt2442560/',
      ]
    }
  }
}
</script>

<style scoped lang="scss">
input, textarea, button:focus {
  outline: none;
  resize: none;
}

input::placeholder {
  color: #cbd5e0;
  opacity: 1;
}
</style>
