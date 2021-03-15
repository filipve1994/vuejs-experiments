<template>
  <div>


    <div class="max-w-sm rounded-xl mb-4 overflow-hidden shadow-lg bg-gray-900 text-white">
      <div class="px-6 py-4 flex items-center justify-between">
        <div class="flex items-center">
          <b class="text-xs mr-2">09:00</b>
          <small class="text-xs">Tue, Aug 7</small>
        </div>
        <div class="flex items-center">
      <span class="material-icons md-14 mr-1">
        signal_wifi_4_bar
      </span>
          <span class="material-icons md-14 mr-1">
        alarm
      </span>
          <span class="material-icons md-14 mr-1">
        battery_full
      </span>
          <span class="text-xs">100%</span>
        </div>
      </div>
      <div class="px-6 py-4 flex items-center justify-between">
        <div class="flex items-center justify-center rounded-full h-12 w-12 bg-gray-200 mr-2">
      <span class="material-icons text-gray-900">
        signal_wifi_4_bar
      </span>
        </div>
        <div class="flex items-center justify-center rounded-full h-12 w-12 bg-gray-200 mr-2">
      <span class="material-icons md-24 text-gray-900 data-connection-icon">
        sync_alt
      </span>
        </div>
        <div class="flex items-center justify-center rounded-full h-12 w-12 bg-red-600 mr-2">
      <span class="material-icons text-gray-900">
        volume_off
      </span>
        </div>
        <div class="flex items-center justify-center rounded-full h-12 w-12 bg-gray-800 mr-2">
      <span class="material-icons">
        highlight
      </span>
        </div>
        <div class="flex items-center justify-center rounded-full h-12 w-12 bg-gray-800 mr-2">
      <span class="material-icons">
        bluetooth_disabled
      </span>
        </div>
        <div class="flex items-center justify-center rounded-full h-12 w-12 bg-gray-800">
      <span class="material-icons">
        cast
      </span>
        </div>
      </div>
      <div class="px-6 py-4 flex items-center justify-between">
        <div class="bg-gray-700 w-screen rounded-lg flex items-center slider-wrapper" style="">
          <div class="bg-gray-300 w-1/2 rounded-lg flex slider-pointer" style="">
          </div>
        </div>
      </div>
      <div class="px-6 py-4 flex items-center justify-between">
        <div class="flex items-center ">
      <span class="material-icons md-20 mr-1">
        signal_cellular_4_bar
      </span>
          <span class="text-sm">Fi Network</span>

        </div>
        <div class="flex items-center ">
      <span class="material-icons md-20 mr-3">
        search
      </span>
          <span class="material-icons md-20 mr-3">
        settings
      </span>
          <span class="material-icons md-20">
        account_circle
      </span>
        </div>
      </div>
    </div>
    <span class="font-bold">No notifications</span>
  </div>
</template>

<!--https://tailwindcomponents.com/component/notifications-->
<script>
export default {
  name: "NotificationsCard"
}
</script>

<style scoped lang="scss">

@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

body {
  background-image: linear-gradient(109.6deg, rgba(223, 234, 247, 1) 11.2%, rgba(244, 248, 252, 1) 61.1%);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.rounded-xl {
  border-radius: 1rem;
}

.data-connection-icon {
  transform: rotate(270deg);
  width: 24px;
}

.slider-wrapper {
  height: 1rem;
  position: relative;
  z-index: 1;
}

.slider-wrapper::before, .slider-wrapper::after {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  z-index: 2;
}

.slider-wrapper::before {
  color: #000;
  left: 8px;
  content: "-";
}

.slider-wrapper::after {
  color: #fff;
  right: 8px;
  content: "+";
}

.slider-pointer {
  height: 1.2rem;
  position: relative;
  z-index: 1;
}

.material-icons.md-14 {
  font-size: 14px;
}

.material-icons.md-20 {
  font-size: 20px;
}

.material-icons.md-24 {
  font-size: 24px;
}

</style>
