<template>
  <div class="flex items-center justify-center bg-gray-300 h-screen">
    <section class="p-6 w-full max-w-lg mx-auto bg-white rounded-md shadow-md">
      <div class="flex flex-col">
        <div
            role="tablist"
            aria-label="Sample Tabs"
            class="flex border rounded-full"
        >
          <button
              v-for="(tab, tabIndex) in tabs"
              :key="tabIndex"
              role="tab"
              :aria-selected="String(tab.isSelected)"
              :aria-controls="`panel-${tabIndex + 1}`"
              :id="`tab-${tabIndex + 1}`"
              class="relative flex-1 p-2 text-lg font-medium uppercase rounded-full focus:outline-none"
              :class="
              tab.isSelected
                ? 'text-white bg-gradient-to-tr from-indigo-500 to-indigo-700 z-10'
                : 'text-indigo-600 bg-white'
            "
              @click="changeTab(tabIndex)"
          >
            {{ tab.name }}
          </button>
        </div>
        <div class="p-4">
          <div
              id="panel-1"
              role="tabpanel"
              aria-labelledby="tab-1"
              :hidden="currentTab !== 0"
          >
            <p>Content for the first panel</p>
          </div>
          <div
              id="panel-2"
              role="tabpanel"
              aria-labelledby="tab-2"
              :hidden="currentTab !== 1"
          >
            <p>Content for the second panel</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<!--https://codepen.io/azrikahar/pen/xxOzyQN-->
<script>
export default {
name: "TabsBlock",
  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          name: "First tab",
          isSelected: true
        },
        {
          name: "Second tab",
          isSelected: false
        }
      ]
    };
  },
  methods: {
    changeTab(targetTabIndex) {
      this.currentTab = targetTabIndex;
      this.tabs.forEach((tab, index) => {
        tab.isSelected = index === targetTabIndex;
      });
    }
  }
}
</script>

<style scoped lang="scss">

</style>
