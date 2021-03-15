<template>
  <div class="mx-auto my-20 rounded max-w-sm overflow-hidden shadow-lg">

    <img class="w-full" :src="imgSrc"
         alt="card-image">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>

      <p class="text-grey-darker text-base">{{ description }} </p>
    </div>

    <div class="tags px-6 py-4">
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
            v-for="tag in tags" :key="tag"
      >{{ tag }}</span>
    </div>
  </div>

</template>

<!--https://codepen.io/joshishubham23/pen/JeJBEr -->
<script>
export default {
  name: "CardBlock1", data() {
    return {
      imgSrc: "https://i.postimg.cc/GmMSrMHf/astronomy-background-constellation-355887.jpg",
      title: 'Blue Sky at Night',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      tags: ['stars', 'night-sky', 'photography']
    }
  },
}
</script>

<style scoped lang="scss">

</style>
