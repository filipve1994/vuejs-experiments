<template>

  <div>



  <!-- component -->
  <div class="text-white body-font fixed top-0 bg-gradient-to-b from-black w-full z-50">
    <div class=" px-16 flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png" class="w-24" alt="">
      </a>
      <ul class="hidden lg:flex flex-row space-x-3 w-1/2 ml-12 text-sm">

        <li class="font-semibold">Beranda</li>
        <li>Acara Tv</li>
        <li>Film</li>
        <li>Terbaru</li>
        <li>Daftar Saya</li>

      </ul>
      <nav  class="md:ml-auto hidden lg:flex flex-wrap space-x-6 items-center text-base justify-center font-semibold">
        <svg class="w-6 h-6 font-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
        <button class="flex items-center">
          <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABTw7t_oDR-SWh9ddj9kh9AlOqCabZMupMWano7R5wg9x1_KPjvABqKHNeCxcMddK7Ku9HsV6keglPmWPZeh0lKU.png?r=fcc" alt="">
          <svg class="w-5 h-5 stroke-current text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </nav>
    </div>
  </div>
  <div class="w-full h-screen relative">
    <div class="absolute w-full h-full z-10 ">
      <div class="px-16  h-full flex items-center justify-start">
        <div class="hidden lg:flex flex-col w-2/5 space-y-4 py-12 ">
          <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABe_MJtJKPmsSU3pjUiW7bRyT8Hg_kAJPLRj6rNNltpjGgSphvfVGjXLQ-_Ic1FIYJ319RRDnIdqPk9D8Uq2X8oHSGVrwbHfx3j1dW_6GncJ2IKZ3OVRybWHjTMdUVY_CLeo3z2EQotzC1-faA7LSygaF5sxsqoskzrVPj6n-NS80jg.png?r=4af" alt="">
          <h3 class="text-2xl font-semibold text-white ">Episode Baru Tayangan Mulai Rabu</h3>
          <p class="text-lg text-white">Di dunia tempat data tidak lagi bersifat pribad, para penipu mengungkap skema pengawasan jahat yang dikepalai oleh pemerintah bersama korporasi yang tamak</p>
          <div class="flex space-x-4 flex-row w-full">
            <button class=" px-3 mt-5 items-center shadow-md rounded-lg bg-white  space-x-2 py-2 justify-center flex w-32">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
              <span class="text-gray-800 font-semibold">Putar</span>
            </button>
            <button class=" px-3 mt-5 items-center shadow-md rounded-lg bg-gray-500 bg-opacity-50  space-x-2 py-2 justify-center flex w-auto">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span class="text-white font-semibold">Selengkapnya</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute w-full h-64 bottom-0 bg-gradient-to-t from-black">

    </div>
    <video class="w-full h-64 lg:h-screen object-cover -mt-8    " autoplay muted loop >
      <source class="h-screen object-contain" src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4" type="video/mp4">
    </video>

  </div>


  </div>
</template>

<!--https://tailwindcomponents.com/component/netflix-clone-->
<script>
export default {
name: "NetflixClone"
}
</script>

<style scoped lang="scss">

</style>
