<template>
  <div
    class="flex items-center bg-indigo-100 w-screen "
    style="font-family: 'Muli', sans-serif;"
  >
    <div class="container ml-auto mr-auto flex flex-wrap items-start">
      <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
        <h1 class="text-3xl lg:text-4xl text-gray-700 font-extrabold">
          Best Sellers
        </h1>
      </div>

      <!--      vue v-for -->

      <div
        class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2"
        v-for="(product, $index) in products"
        :key="$index"
      >
        <div
          class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300"
        >
          <figure class="mb-2">
            <img :src="product.imgsrc" alt="" class="h-64 ml-auto mr-auto" />
          </figure>
          <div
            class="rounded-lg p-4 flex flex-col"
            v-bind:class="product.bgColorInfo"
          >
            <div>
              <h5 class="text-white text-2xl font-bold leading-none">
                {{ product.name }}
              </h5>
              <span class="text-xs text-gray-400 leading-none">{{
                product.subtitle
              }}</span>
            </div>
            <div class="flex items-center">
              <div class="text-lg text-white font-light">
                {{ product.currency }}{{ product.price }}
              </div>
              <button
                href="javascript:;"
                class="rounded-full text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                v-bind:class="product.btnBgColor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="stroke-current m-auto"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--https://codepen.io/ilkerkurtel/pen/MWaJzzw -->
<!--https://dev.to/ratracegrad/intro-to-vue-looping-over-lists-of-data-3ko9-->
<!--https://vuejs.org/v2/guide/list.html-->
<!--https://vuejs.org/v2/guide/class-and-style.html-->
<script>
export default {
  name: "CardUI1",
  data() {
    return {
      products: [
        {
          id: 1,
          imgsrc:
            "https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png",
          bgColorInfo: "bg-purple-700",
          name: "iPhone 11 Pro Max",
          subtitle: "And then there was Pro.",
          currency: "$",
          price: "1099,00",
          btnBgColor: "bg-purple-900"
        },
        {
          id: 2,
          imgsrc:
            "https://srv-cdn.onedio.com/store/7fd6410ffac110960cb4a60b09878db19ebbdf3c8b6e842918d16f3c61784763.png",
          bgColorInfo: "bg-purple-600",
          name: "iPhone 11",
          subtitle: "Just the right amount of everything.",
          currency: "$",
          price: "699,00",
          btnBgColor: "bg-purple-800"
        },
        {
          id: 3,
          imgsrc:
            "https://srv-cdn.onedio.com/store/988bccbdb9ca395f581f98faa9ce3a55123f12bfcef608c838532b813646e557.png",
          bgColorInfo: "bg-gray-700",
          name: "iPhone XR",
          subtitle: "Brilliant. In every way.",
          currency: "$",
          price: "599,00",
          btnBgColor: "bg-gray-900"
        },
        {
          id: 4,
          imgsrc:
            "https://srv-cdn.onedio.com/store/cfdd8ebc1b39e215c44c7c9a02bfaa49287f79b806ec5743124d0aea25c2b0c3.png",
          bgColorInfo: "bg-gray-600",
          name: "iPhone SE",
          subtitle: "Lots to love. Less to spend.",
          currency: "$",
          price: "399,00",
          btnBgColor: "bg-gray-800"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
//<link href="https://fonts.googleapis.com/css2?family=Muli:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
@import url("https://fonts.googleapis.com/css2?family=Muli:wght@200;300;400;500;600;700;900&display=swap");
</style>
