<template>

  <div>

    <svg class="visually-hidden" focusable="false" aria-hidden="true">
      <symbol id="location" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
        <g>
          <g>
            <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257
			c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22
			C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34
			C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180
			C406.1,207.121,398.689,233.688,384.866,256.818z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z
			 M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2
			C316.1,212.683,289.784,240.2,256,240.2z"/>
          </g>
        </g>
      </symbol>
      <symbol role="img" viewBox="0 0 24 24" id="google">
        <path d="M16.214 8.69l6.715-1.679A12.027 12.027 0 0 1 24 11.972C24 18.57 18.569 24 11.968 24c-.302 0-.605-.011-.907-.034l4.905-8.347c.356-.376.655-.803.881-1.271a5.451 5.451 0 0 0-.043-4.748 5.156 5.156 0 0 0-.59-.91zm-3.24 8.575l-2.121 6.682C4.738 23.345 0 18.14 0 11.977 0 9.592.709 7.26 2.038 5.279l4.834 8.377c.18.539 1.119 2.581 3.067 3.327.998.382 2.041.481 3.035.282zM11.973 7.62c-2.006.019-3.878 1.544-4.281 3.512a4.478 4.478 0 0 0 1.237 4.032c1.214 1.186 3.14 1.578 4.734.927 1.408-.576 2.47-1.927 2.691-3.431.272-1.856-.788-3.832-2.495-4.629a4.413 4.413 0 0 0-1.886-.411zM7.046 9.962L2.259 4.963A12.043 12.043 0 0 1 11.997 0c4.56 0 8.744 2.592 10.774 6.675H12.558c-1.811-.125-3.288.52-4.265 1.453a5.345 5.345 0 0 0-1.247 1.834z"/>
      </symbol>
    </svg>

    <div class="bg-gray-200 min-h-screen flex justify-center items-center">
      <div class="w-auto rounded-lg bg-white custom-width container mx-auto shadow-lg p-4 relative">
        <div class="">
          <span class="block font-light">MusixMatch</span>
          <span class="block text-xl font-bold">Senior UX Design Lead</span>
          <div class="absolute top-0 right-0 mr-4 mt-4">
            <svg class="w-10 h-10">
              <use xlink:href="#google"></use>
            </svg>
          </div>
          <div class="">
            <svg class="w-4 h-4 inline-block align-middle">
              <use xlink:href="#location"></use>
            </svg>
            <span class="inline-block text-sm mb-2">Remote - Bologna, Emilia-Romagna</span>
          </div>
          <div class="">
            <p class="text-sm text-gray-600">The world's largest lyrics platform - where you can search, enjoy, and share lyrics from any track, anywhere in the world.</p>
          </div>
          <p class="absolute text-xs text-gray-600 bottom-0 right-0 mr-4 mb-2" >Today</p>
        </div>
      </div>

    </div>

  </div>

</template>

<!--https://codepen.io/codyjarrett_ae/pen/LYYvpmR-->
<script>
export default {
  name: "CardBlock11"
}
</script>

<style scoped lang="scss">
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}

.custom-width {
  width: 24rem;
}
</style>
