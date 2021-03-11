<template>

  <main class="bg-white font-montserrat">
    <header class="h-24 xl:h-32 flex items-center">
      <div class="container mx-auto px-6 sm:px-12 flex items-center justify-between">
        <div class="uppercase text-blue-900 font-black">
          Brand Logo
        </div>
        <div class="flex items-center">
          <nav class="font-sen text-blue-900 text-lg lg:flex items-center hidden">
            <a href="#" class="py-2 px-4 flex">
              Women
              <svg class="w-2 fill-current ml-2" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1"
                   viewBox="0 0 3.5 2.5">
                <defs/>
                <path d="M3.5 0H0l1.75 2.5L3.5 0z"/>
              </svg>
            </a>
            <a href="#" class="py-2 px-4 flex">
              Men
              <svg class="w-2 fill-current ml-2" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1"
                   viewBox="0 0 3.5 2.5">
                <defs/>
                <path d="M3.5 0H0l1.75 2.5L3.5 0z"/>
              </svg>
            </a>
            <a href="#" class="py-2 px-4 flex">
              Kids
              <svg class="w-2 fill-current ml-2" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1"
                   viewBox="0 0 3.5 2.5">
                <defs/>
                <path d="M3.5 0H0l1.75 2.5L3.5 0z"/>
              </svg>
            </a>
            <a href="#" class="py-2 px-4 flex">
              Promotions
              <svg class="w-2 fill-current ml-2" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1"
                   viewBox="0 0 3.5 2.5">
                <defs/>
                <path d="M3.5 0H0l1.75 2.5L3.5 0z"/>
              </svg>
            </a>
            <a href="#" class="py-2 px-4 flex">
              More
              <svg class="w-2 fill-current ml-2" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1"
                   viewBox="0 0 3.5 2.5">
                <defs/>
                <path d="M3.5 0H0l1.75 2.5L3.5 0z"/>
              </svg>
            </a>
          </nav>
          <div class="hidden sm:block relative">
            <input type="search" name=""
                   class="border-2 border-blue-900 rounded-full bg-transparent ml-4 pl-4 pr-8 h-8 w-56 focus:outline-none font-sen text-gray-700">
            <svg class="h-8 p-2 mr-1 absolute right-0 top-0" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1"
                 viewBox="0 0 6.7 6.7">
              <defs/>
              <path fill="none" stroke="#253137" stroke-linecap="round" stroke-miterlimit="10"
                    d="M4.14 1.12a2.14 2.14 0 11-3 0 2.12 2.12 0 013 0zM4.14 4.14L6.2 6.2"/>
            </svg>
          </div>
          <button class="ml-4 flex flex-col">
            <span class="w-6 h-1 bg-blue-900 mb-1 rounded"></span>
            <span class="w-6 h-1 bg-blue-900 mb-1 rounded"></span>
            <span class="w-6 h-1 bg-blue-900 mb-1 rounded"></span>
          </button>
        </div>
      </div>
    </header>
    <div class="container mx-auto px-6 sm:px-12 lg:py-6 xl:py-16 relative flex flex-col sm:flex-row">
      <div class="sm:w-1/2 sm:pt-8 lg:pt-16 pb-8 sm:pb-16 lg:pb-32 relative z-30">
        <h2 class="uppercase text-blue-900 font-bold tracking-wider text-2xl">Special Promo</h2>
        <h1 class="uppercase font-black text-yellow-700 leading-none tracking-wider mb-6 mt-4 text-5xl lg:text-6xl xl:text-8xl">
          Autumn <br class="hidden sm:block">Sale</h1>
        <p class="text-gray-600 font-roboto text-lg sm:w-2/3 lg:w-1/2">Lorem ipsum dolor sit amet, consec tetur
          adipiscing elit, sed do eiusmod tempor incid idunt ut labore dolore.</p>
      </div>
      <div class="sm:w-1/2 lg:w-2/3 relative sm:absolute bottom-0 right-0 bg-gray-300">
        <h3 class="monteserrat font-black text-white absolute top-0 left-0 mt-32 sm:mt-32 lg:mt-56 ml-0 lg:ml-12 z-30 text-xl sm:text-3xl lg:text-4xl xl:text-5xl transform rotate-90">
          up to 50%</h3>
        <div class="left-0 bottom-0 w-full h-16 absolute z-30 flex items-center justify-center mb-12 lg:mb-24 xl:mb-32">
          <span
              class="bg-black text-white uppercase font-black xl:text-2xl py-2 px-6 rounded-full">Get the code here</span>
        </div>
        <img class="absolute left-0 right-0 w-full h-full object-cover z-10"
             src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80">
        <div class="bg-gray-500 absolute inset-0 mt-16 -ml-8"></div>
        <svg class="relative z-20 pt-8 -ml-16" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1"
             viewBox="0 0 428.29 298.11">
          <defs/>
          <path fill="#fff" d="M364.79 23.93v199h-271v-199h271m2.06-2.06H91.73V225h275.12V21.87z"/>
          <path fill="#fff"
                d="M119.74 11.53L84.99 46.29l-2.16-9.75-9.37-1.78L108.22 0l1.35 9.81 10.17 1.72zM387.74 211.53l-34.75 34.76-2.16-9.75-9.37-1.78L376.21 200l1.36 9.81 10.17 1.72z"/>
          <path fill="#b7791f"
                d="M336.29 92.93h92v5h-92zM336.29 77.93h92v5h-92zM336.29 62.93h92v5h-92zM336.29 122.93h92v5h-92zM336.29 107.93h92v5h-92z"/>
          <circle cx="1.75" cy="296.36" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="286.99" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="277.62" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="268.26" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="258.89" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="249.53" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="240.16" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="230.8" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="221.43" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="212.06" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="202.7" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="193.33" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="183.97" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="174.6" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="165.23" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="155.87" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="146.5" r="1.75" fill="#24263a"/>
          <circle cx="1.75" cy="137.14" r="1.75" fill="#24263a"/>
          <path fill="#24263a"
                d="M1.75 126A1.75 1.75 0 110 127.77 1.75 1.75 0 011.75 126zM1.75 116.65A1.76 1.76 0 110 118.41a1.75 1.75 0 011.75-1.76zM10.78 294.6A1.76 1.76 0 119 296.36a1.76 1.76 0 011.78-1.76zM10.78 285.24A1.75 1.75 0 119 287a1.75 1.75 0 011.78-1.76zM10.78 275.87A1.76 1.76 0 119 277.62a1.76 1.76 0 011.78-1.75zM10.78 266.51A1.75 1.75 0 119 268.26a1.75 1.75 0 011.78-1.75zM10.78 257.14A1.75 1.75 0 119 258.89a1.75 1.75 0 011.78-1.75zM10.78 247.77A1.76 1.76 0 119 249.53a1.76 1.76 0 011.78-1.76zM10.78 238.41A1.75 1.75 0 119 240.16a1.75 1.75 0 011.78-1.75zM10.78 229A1.76 1.76 0 119 230.8a1.76 1.76 0 011.78-1.8zM10.78 219.68A1.75 1.75 0 119 221.43a1.75 1.75 0 011.78-1.75zM10.78 210.31A1.76 1.76 0 119 212.06a1.76 1.76 0 011.78-1.75zM10.78 201A1.75 1.75 0 119 202.7a1.75 1.75 0 011.78-1.7zM10.78 191.58A1.75 1.75 0 119 193.33a1.75 1.75 0 011.78-1.75zM10.78 182.21A1.76 1.76 0 119 184a1.76 1.76 0 011.78-1.79zM10.78 172.85A1.75 1.75 0 119 174.6a1.75 1.75 0 011.78-1.75zM10.78 163.48A1.76 1.76 0 119 165.23a1.76 1.76 0 011.78-1.75zM10.78 154.12A1.75 1.75 0 119 155.87a1.75 1.75 0 011.78-1.75zM10.78 144.75A1.75 1.75 0 119 146.5a1.76 1.76 0 011.78-1.75zM10.78 135.39A1.75 1.75 0 119 137.14a1.75 1.75 0 011.78-1.75zM10.78 126A1.75 1.75 0 119 127.77a1.75 1.75 0 011.78-1.77zM10.78 116.65A1.76 1.76 0 119 118.41a1.76 1.76 0 011.78-1.76z"/>
          <circle cx="19.82" cy="296.36" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="286.99" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="277.62" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="268.26" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="258.89" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="249.53" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="240.16" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="230.8" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="221.43" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="212.06" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="202.7" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="193.33" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="183.97" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="174.6" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="165.23" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="155.87" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="146.5" r="1.75" fill="#24263a"/>
          <circle cx="19.82" cy="137.14" r="1.75" fill="#24263a"/>
          <path fill="#24263a"
                d="M19.82 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM19.82 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76z"/>
          <circle cx="28.85" cy="296.36" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="286.99" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="277.62" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="268.26" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="258.89" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="249.53" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="240.16" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="230.8" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="221.43" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="212.06" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="202.7" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="193.33" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="183.97" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="174.6" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="165.23" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="155.87" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="146.5" r="1.75" fill="#24263a"/>
          <circle cx="28.85" cy="137.14" r="1.75" fill="#24263a"/>
          <path fill="#24263a"
                d="M28.85 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM28.85 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 294.6a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 285.24a1.75 1.75 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 275.87a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 266.51a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 257.14a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 247.77a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 238.41a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 229a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 219.68a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 210.31a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 201a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 191.58a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 182.21a1.76 1.76 0 11-1.75 1.79 1.76 1.76 0 011.75-1.79zM37.88 172.85a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 163.48a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 154.12a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 144.75a1.75 1.75 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 135.39a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 116.65a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76z"/>
          <path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.219"
                d="M387.79 245.93l5.49 5.49-5.49 5.49v-10.98z"/>
          <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.219"
                d="M62.79 256.91l-5.49-5.49 5.49-5.49v10.98z"/>
        </svg>
      </div>
    </div>
  </main>
</template>

<!--https://tailwindcomponents.com/component/special-promo-->
<script>
export default {
  name: "SpecialPromo1"
}
</script>

<!--&lt;!&ndash; tailwind.config.js &ndash;&gt;-->
<!--module.exports = {-->
<!--theme: {-->
<!--extend: {-->
<!--fontSize: {-->
<!--'8xl': '6rem',-->
<!--},-->
<!--fontFamily: {-->
<!--'montserrat': ['Montserrat'],-->
<!--'sen': ['Sen'],-->
<!--'roboto': ['Roboto'],-->
<!--}-->
<!--},-->
<!--},-->
<!--};-->


<!--<link href="https://fonts.googleapis.com/css?family=Montserrat:700,900|Sen|Roboto&display=swap" rel="stylesheet">
-->
<style scoped lang="scss">

@import url("https://fonts.googleapis.com/css?family=Montserrat:700,900|Sen|Roboto&display=swap");
</style>
