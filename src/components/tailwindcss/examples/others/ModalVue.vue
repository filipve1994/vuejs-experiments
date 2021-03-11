<template>
  <!--  <div id="app" class="h-full w-full flex items-center justify-center">-->
  <div class="h-full w-full flex items-center justify-center">
    <transition name="fade">

      <div v-show="show_modal" class="fixed inset-0 z-30">

        <!--       background -->
        <div v-show="show_modal" @click="showModal()"
             class="bg-filter bg-white opacity-25 fixed inset-0 w-full h-full z-20">
        </div>
        <!--          -->
        <main class="flex flex-col items-center justify-center h-full w-full">
          <transition name="fade-up-down">
            <div v-show="show_modal" class="modal-wrapper inline-block flex items-center z-30">
              <div
                  class="modal max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl bg-white max-h-screen shadow-lg flex-row rounded relative">

                <div class="modal-header p-5 bg-gray-900 text-gray-900 rounded-t">
                  <h5 class="text-white text-2xl uppercase">this is header</h5>
                </div>
                <div class="modal-body p-5 w-full h-full overflow-y-auto ">
                  <p class="text-justify">
                    cilis omnis nam illum maiores, porro velit deserunt neque.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, voluptates eveniet labore dolorum
                    molestiae, modi saepe fugiat minima repudiandae repellendus obcaecati voluptatibus ab tenetur
                    recusandae eius quos at maiores atque consectetur facilis! Nisi fuga
                  </p>
                </div>
                <div class="modal-footer py-3 px-5 border0-t text-right">
                  <button class="bg-green-500 px-5 py-2 text-white" @click="showModal()">OK</button>
                </div>
              </div>
            </div>
          </transition>


        </main>
      </div>
    </transition>
    <div>
      <span class="text-gray-300 font-bold">lorem text</span><br>
      <button class="bg-green-500 text-white px-6 py-3 rounded" @click="showModal()">
        show modal
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalVue",
  data() {
    return {
      show_modal: true,
    }
  },
  methods: {
    showModal() {
      if (this.show_modal) {
        //stop screen scrolling
        document.getElementsByTagName("html")[0].classList.remove('overflow-y-hidden');
        this.show_modal = false;
      } else {
        document.getElementsByTagName("html")[0].classList.add('overflow-y-hidden');
        this.show_modal = true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.modal-body {
  max-height: 500px;
}

.bg-gray-800-opacity {
  background-color: #2D374850;
}

@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}

/* animation for vue transition tag */

.fade-up-down-enter-active {
  transition: all 0.3s ease;
}

.fade-up-down-leave-active {
  transition: all 0.3s ease;
}

.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}

.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity .3s;

}

.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


</style>
