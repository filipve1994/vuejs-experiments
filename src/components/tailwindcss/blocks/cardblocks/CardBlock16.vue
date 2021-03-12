<template>
  <body class="font-sans bg-white p-8">
  <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
    <div class="max-w-md w-full bg-gray-200 rounded-lg relative  border border-gray-300">
      <div class="bg-black p-4">
        <div class="flex items-center justify-between">
          <p class="text-gray-100 text-xl font-medium">Total Balance</p>
          <svg class="w-8 h-8 text-gray-100" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="font-bold text-4xl mt-2 text-white">
          5.615,75 €
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 w-full px-4 py-2 bg-white">
        <div class="col-span-1">
          <div class="border border-gray-300 rounded-lg px-4 py-2">
            <div class="flex items-center justify-between">
              <p class="text-gray-600">Income</p>
              <div class="rounded-full h-6 w-6 flex items-center justify-center bg-green-200">
                <svg class="h-4 w-4 fill-current text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            </div>
            <p class="text-2xl font-semibold">2.150,45 €</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="border border-gray-300 rounded-lg px-4 py-2">
            <div class="flex items-center justify-between">
              <p class="text-gray-600">Expense</p>
              <div class="rounded-full h-6 w-6 flex items-center justify-center bg-red-200">
                <svg class="h-4 w-4 fill-current text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            <p class="text-2xl font-semibold">6.450,90 €</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center pt-2 pb-2 bg-white">
        <div class="rounded-lg border-2 border-gray-400 w-8"></div>
      </div>
      <div class="bg-gray-100 h-64 p-4">
        <div class="flex items-center justify-between">
          <p class="text-2xl font-medium">Transaction</p>
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div class="flex items-center justify-between mt-2">
          <p class="text-sm text-gray-600">August, 2020</p>
          <p class="text-sm text-gray-600">+411,75</p>
        </div>
        <div class="flex items-center mt-6">
          <div class="w-1/12">
            <svg class="h-4 w-4 fill-current text-green-600" id="bold" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.25 15.5c-.853 0-1.622-.473-2.007-1.233-.386-.765-.311-1.665.196-2.352l5.823-7.915h-8.512c-1.516 0-2.75 1.233-2.75 2.75v9.5c0 1.517 1.234 2.75 2.75 2.75h5.027l.781-3.5z"/><path d="m22.241 7h-.241v-.25c0-1.517-1.234-2.75-2.75-2.75h-2.783c-.009.084-.016.169-.035.253l-.973 4.247h1.541c.861 0 1.633.479 2.015 1.25.382.769.297 1.673-.222 2.359l-5.22 6.891h5.677c1.516 0 2.75-1.233 2.75-2.75v-.25h.241c.965 0 1.75-.785 1.75-1.75v-5.5c0-.965-.785-1.75-1.75-1.75z"/><path d="m9.803 21c-.106 0-.213-.022-.315-.069-.32-.148-.493-.5-.417-.844l1.358-6.087h-3.179c-.283 0-.542-.159-.669-.412-.127-.252-.103-.555.065-.783l6.989-9.5c.209-.287.592-.388.917-.237.323.148.498.502.418.849l-1.393 6.083h3.423c.285 0 .545.161.671.416.127.255.098.56-.074.787l-7.197 9.5c-.145.192-.368.297-.597.297z"/></svg>
            <svg class="mt-4 h-4 w-4 fill-current"
                 viewBox="0 0 468 468">
              <g>
                <g>
                  <path d="M450.1,187.5l-10.2-10.8l-35.8-96.5C398,63.9,382.4,53.1,365,53H109.3c-17.4,0-33,10.9-39.1,27.2l-35.3,95.3l-14.7,13.6
								C7.4,200,0,216,0,232.8v140.6c0.1,23,18.8,41.6,41.8,41.6h26.4c23,0,41.7-18.6,41.8-41.6V353h248v20.4c0.1,23,18.8,41.6,41.8,41.6
								h26.4c23,0,41.7-18.6,41.8-41.6V229.1C467.9,213.4,461.5,198.4,450.1,187.5z M89,87c3.2-8.5,11.3-14,20.3-14h255.8
								c9,0,17.1,5.6,20.3,14l31.2,84h-23.3c-5.5-37.5-40.4-63.4-77.9-57.8c-29.9,4.4-53.4,27.9-57.8,57.8H57.8L89,87z M372.9,171h-95.1
								c5.5-26.3,31.3-43.1,57.6-37.6C354.2,137.4,368.9,152.1,372.9,171z M90,373.4c-0.1,12-9.8,21.6-21.8,21.6H41.8
								c-12,0-21.7-9.6-21.8-21.6v-26.2c6,3.9,13.9,5.8,21.8,5.8H90V373.4z M448,373.4c-0.1,12-9.8,21.6-21.8,21.6h-26.4
								c-12,0-21.7-9.7-21.8-21.6V353h48.2c7.9,0,15.8-1.9,21.8-5.8V373.4z M426.2,333H41.8c-11.9,0.1-21.7-9.4-21.8-21.4v-78.8
								c0-11,4.9-21.5,13.3-28.6c0.1-0.1,0.3-0.3,0.4-0.4L47.3,191H426l9.6,10.3c0.1,0.2,0.4,0.3,0.5,0.5c7.5,7.1,11.8,17,11.8,27.3v82.5
								h0.1C447.9,323.5,438.1,333.1,426.2,333z"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M132,231H57c-5.5,0-10,4.5-10,10v52c0,5.5,4.5,10,10,10h75c5.5,0,10-4.5,10-10v-52C142,235.5,137.5,231,132,231z M122,283
								H67v-32h55V283z"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M411,231h-75c-5.5,0-10,4.5-10,10v52c0,5.5,4.5,10,10,10h75c5.5,0,10-4.5,10-10v-52C421,235.5,416.5,231,411,231z
								M401,283h-55v-32h55V283z"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M282.3,273h-96.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h96.6c5.5,0,10-4.5,10-10S287.8,273,282.3,273z"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M282.3,242h-96.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h96.6c5.5,0,10-4.5,10-10S287.8,242,282.3,242z"/>
                </g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
            </svg>
          </div>
          <div class="w-8/12">
            <p class="font-semibold text-lg">Refund</p>
            <p class="text-gray-600">Today, 21:30</p>
          </div>
          <div class="w-3/12">
            <div class="flex items-center">
              <p class="font-semibold text-lg text-green-600">+75.15 €</p>
              <svg class="h-5 w-5 fill-current text-gray-600 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div class="border border-gray-300 mt-4 mb-2"></div>
        <div class="flex items-center mt-2">
          <div class="w-1/12">
            <svg class="w-4 h-4 fill-current text-red-600" id="Capa_1"
                 viewBox="0 0 480 480" >
              <g>
                <g>
                  <path d="M280,48H120c-4.418,0-8,3.582-8,8v96c0,4.418,3.582,8,8,8h160c4.418,0,8-3.582,8-8V56C288,51.582,284.418,48,280,48z
							M272,144H128V64h144V144z"/>
                </g>
              </g>
              <g>
                <g>
                  <rect x="240" y="112" width="16" height="16"/>
                </g>
              </g>
              <g>
                <g>
                  <rect x="208" y="112" width="16" height="16"/>
                </g>
              </g>
              <g>
                <g>
                  <rect x="176" y="112" width="16" height="16"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M256,272h-29.688l36.736-68.208c2.097-3.889,0.645-8.741-3.243-10.839c-2.689-1.45-5.968-1.243-8.453,0.535l-112,80
							c-3.596,2.566-4.432,7.562-1.865,11.159c1.502,2.104,3.928,3.354,6.513,3.353h29.688l-36.736,68.208
							c-2.097,3.889-0.645,8.741,3.243,10.839c2.689,1.45,5.968,1.243,8.453-0.535l112-80c3.596-2.566,4.432-7.562,1.865-11.159
							C261.011,273.249,258.585,272,256,272z M167.368,333.48l26.76-49.688c2.094-3.89,0.638-8.742-3.252-10.836
							c-1.167-0.628-2.471-0.956-3.796-0.956h-18.12l63.672-45.48l-26.76,49.688c-2.094,3.89-0.638,8.742,3.252,10.836
							c1.167,0.628,2.471,0.956,3.796,0.956h18.12L167.368,333.48z"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M432,40h-8V8c0-4.418-3.582-8-8-8s-8,3.582-8,8v32h-16V8c0-4.418-3.582-8-8-8s-8,3.582-8,8v32h-8c-4.418,0-8,3.582-8,8v48
							c0.024,19.001,13.389,35.373,32,39.2V368c0,6.627-5.373,12-12,12c-6.627,0-12-5.373-12-12V189.184
							c-0.018-11.297-6.809-21.482-17.232-25.84L328,154.52V40c-0.026-22.08-17.92-39.974-40-40H112C89.92,0.026,72.026,17.92,72,40v376
							H48c-4.418,0-8,3.582-8,8v48c0,4.418,3.582,8,8,8h304c4.418,0,8-3.582,8-8v-48c0-4.418-3.582-8-8-8h-24V171.68l16.728,6.48
							c4.41,1.89,7.27,6.226,7.272,11.024V368c0,15.464,12.536,28,28,28c15.464,0,28-12.536,28-28V135.2
							c18.611-3.827,31.976-20.199,32-39.2V48C440,43.582,436.418,40,432,40z M88,40c0-13.255,10.745-24,24-24h176
							c13.255,0,24,10.745,24,24v376H88V40z M344,432v32H56v-32H344z M424,96c0,13.255-10.745,24-24,24s-24-10.745-24-24V56h48V96z"/>
                </g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
            </svg>


          </div>
          <div class="w-8/12">
            <p class="font-semibold text-lg">Charging</p>
            <p class="text-gray-600">Today, 11:45</p>
          </div>
          <div class="w-3/12">
            <div class="flex items-center">
              <p class="font-semibold text-lg text-red-600">-92.25 €</p>
              <svg class="h-5 w-5 fill-current text-gray-600 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="w-full text-center mt-4">
    <div class="w-full text-center">Original design by <a class="text-blue-500 underline" href="https://dribbble.com/shots/14086219-CHRG-Network" title="alex">Alex</a></div>
    <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </div>
  </body>
</template>

<!--https://codepen.io/kdudecoder/pen/abNWJgm-->
<script>
export default {
  name: "CardBlock16"
}
</script>

<style scoped lang="scss">

</style>
