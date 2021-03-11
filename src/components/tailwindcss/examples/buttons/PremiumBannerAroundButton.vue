<template>
  <div>
    <button class='relative bg-blue-500 text-white p-6 rounded text-2xl font-bold overflow-hidden'>
      Example button
      <div class="ribbon bg-red-500 text-sm whitespace-no-wrap px-4">premium</div>
    </button>
    <br/><br/><br/>
    <button class='relative bg-blue-500 text-white p-6 rounded text-2xl font-bold overflow-hidden'>
      Example button
      <div class="ribbon bg-red-500 text-sm whitespace-no-wrap px-4">for sale</div>
    </button>
    <br/><br/><br/>
    <button class='relative bg-blue-500 text-white p-6 rounded text-2xl font-bold overflow-hidden'>
      Example button
      <div class="ribbon bg-red-500 text-sm whitespace-no-wrap px-4">ABC</div>
    </button>
  </div>
</template>

<!--https://tailwindcomponents.com/component/premium-banner-around-button-->
<script>
export default {
  name: "PremiumBannerAroundButton"
}
</script>

<style scoped lang="scss">
.ribbon {
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 22px;
  margin-right: -50px;
  margin-top: 15px;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Safari prior 9.0 */
  transform: rotate(45deg); /* Standard syntax */
}
</style>
