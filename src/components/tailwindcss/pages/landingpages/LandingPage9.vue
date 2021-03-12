<template>
  <div >

    <!--Header -->
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#" aria-label="Home">
                    <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Logo">
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4">
                <a href="#" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Proximamente</a>
                <a href="#" class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Proximamente</a>
                <a href="#" class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Proximamente</a>

                <a href="#" class="cursor-not-allowed ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out">Log in</a>
              </div>
            </nav>
          </div>

          <!--
            Mobile menu, show/hide based on menu open state.

            Entering: "duration-150 ease-out"
              From: "opacity-0 scale-95"
              To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
              From: "opacity-100 scale-100"
              To: "opacity-0 scale-95"
          -->
          <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md">
              <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="">
                  </div>
                  <div class="-mr-2">
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Proximamente</a>
                  <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Proximamente</a>
                  <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Proximamente</a>
                </div>
                <div>
                  <a href="#" class="cursor-not-allowed block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out " role="menuitem">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Gráficas para            <br class="xl:hidden">
                <span class="text-indigo-600">entender el mundo 🌎</span>
              </h2>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href="#" class="cursor-not-allowed w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
      </div>
    </div>



    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      <div v-for="todo in todos" class="mx-auto">
        <div class="m-8">
          <div class="sm:h-50% md:h-50% lg:h-50% xl: h-50%  max-w-sm w-full lg:max-w-full lg:flex shadow-lg" >
            <div class="h-full lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style=todo.image>
            </div>
            <div class="border-none lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <span class=" mb-2 inline-block bg-gray-800 rounded-full px-3 py-1 text-xs text-white mr-2">#D3</span>
                <hr>
                <div class="text-gray-900 font-bold text-xl my-10"><h1 class="text-5xl subpixel-antialiased text-center tracking-wide">{{todo.text}}</h1></div>
                <div class="inline-block align-top mb-2"> <hr>
                  <p class="mt-2 text-gray-700 text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="container my-2"><a class="bg-indigo-600 hover:bg-indigo-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded-md shadow" :href=todo.link>
                  Ir al ejemplo
                </a>

                </div>

              </div>

              <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" src="https://www.universetoday.com/wp-content/uploads/2009/10/globe_west_2048.jpg">
                <div class="text-sm">
                  <p class="text-gray-900 leading-none font-extrabold">Salvador De la Rosa</p>
                  <p class="text-indigo-600">Julio 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<!--https://codepen.io/jsdelarosa/pen/OeMgpK-->
<script>
export default {
name: "LandingPage9",
  data: {
    avatar: 'https://www.alternativesjournal.ca/sites/default/files/magazine/earth-global-globe-87651.jpg',
    styleObject: {
      'bg-white': true,
      'container': true,
      'mx-auto': true,
      'mt-2': true,
      'mb-6': true,
      'p-4': true,
      'rounded': true,
      'shadow-lg':true
    },
    todos: [
      { text: 'Barras', image: "background-image: url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80", link: "https://codepen.io/jsdelarosa/full/GRoBedG"},
      { text: 'Dashboard', image: "background-image: url('https://images.unsplash.com/photo-1585562125287-d748f3097a8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80')", link:"https://codepen.io/jsdelarosa/full/KKVrLyN"},
      { text: 'Línea', image: "background-image: url('https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')", link: "https://codepen.io/jsdelarosa/full/pogQmaR"},
      {text: 'Dispersión', image:"background-image: url('https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')", link:"https://codepen.io/jsdelarosa/full/rNxQgvY"}
    ]
  }
}
</script>

<style scoped lang="scss">
h1 {
  font-family: 'Anton', sans-serif;
}

p {
  font-family: 'Lato',sans-serif;
}

</style>
