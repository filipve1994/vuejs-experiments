<template>
  <div class="feature-1 py-6 md:py-12">
    <div class="container px-4 mx-auto">
      <div class="flex -mx-4">
        <div class="px-4 text-center md:w-10/12 xl:w-8/12 mx-auto">
          <h1 class="mb-4 text-4xl font-medium">FWR Blocks features</h1>
          <p class="mb-4 text-xl">The main aim of creating FWR blocks is to help designers, developers and agencies create websites and web apps quickly and easily. Each and every block uses minimal custom styling and is based on the utility first Tailwind framework.</p>
          <button class="border-2 border-solid border-indigo-600 rounded py-2 px-12 text-xl text-indigo-600 hover:bg-indigo-600 hover:text-white mt-4 transition-color duration-300">Learn More</button>
        </div>
      </div>

      <div class="md:flex md:-mx-4 mt-12 md:pt-4">
        <div class="px-4 md:w-1/3 mt-6 md:mt-0">
          <div class="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
            <div class="text-xl p-4 w-16 h-16 mx-auto">
              <i class="fas fa-bolt text-indigo-600"></i>
            </div>
            <h5 class="text-xl font-medium mb-4">Fresh Design</h5>
            <p class="text-gray-600 mb-3">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable.</p>
          </div>
        </div>
        <div class="px-4 md:w-1/3 mt-6 md:mt-0">
          <div class="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
            <div class="text-xl p-4 w-16 h-16 mx-auto">
              <i class="fas fa-code text-indigo-600"></i>
            </div>
            <h5 class="text-xl font-medium mb-4">Clean Code</h5>
            <p class="text-gray-600 mb-3">FWR blocks are the cleanest pieces of HTML blocks, which are built with utmost care to quality and usability.</p>
          </div>
        </div>
        <div class="px-4 md:w-1/3 mt-6 md:mt-0">
          <div class="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
            <div class="text-xl p-4 w-16 h-16 mx-auto">
              <i class="fas fa-wrench text-indigo-600"></i>
            </div>
            <h5 class="text-xl font-medium mb-4">Perfect Tool</h5>
            <p class="text-gray-600 mb-3">FWR blocks is a perfect tool for designers, developers and agencies looking to create stunning websites in no time.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--https://codepen.io/rhythm19/pen/RwWdBrZ-->
<script>
export default {
name: "FeatureBlock8"
}
</script>

<style scoped lang="scss">

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");
$primary: #5863f8;

.feature-box {
  transition: background-color 0.3s;
  position: relative;

  &::before,
  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-radius: 0.25rem;
    border: 2px solid transparent;
  }

  &::before {
    left: -2px;
    top: -2px;
  }

  &::after {
    right: -2px;
    bottom: -2px;
  }

  &:hover {
    background-color: rgba($primary, 0.1);

    &::before,
    &::after {
      width: calc(100% + 4px);
      height: calc(100% + 4px);
    }

    &::before {
      transition: width 0.2s linear, height 0.2s linear 0.2s;
      border-top-color: $primary;
      border-right-color: $primary;
    }

    &::after {
      transition: width 0.2s linear 0.4s, height 0.2s linear 0.6s;
      border-bottom-color: $primary;
      border-left-color: $primary;
    }
  }
}

</style>
