<template>


  <div class="container mx-auto">
    <h1 class="my-10 cursor-default capitalize align-middle font-serif text-3xl text-red-light text-center">Hello
      world!! :)</h1>

    <div class="flex justify-center py-6">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-4" v-for="(card, $index) in cards" :key="$index">
        <img class="w-full" :src="card.imgSrc" :alt="card.imgAlt">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{card.title}}</div>
          <p class="text-grey-darker text-base"> {{card.description}}
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
          v-for="tag in card.tags" :key="tag">#{{tag}}</span>

        </div>
      </div>

    </div>


  </div>
</template>

<!-- https://codepen.io/Oskiposki/pen/xMKJNm -->
<script>
export default {
  name: "CardBlock2",
  data() {
    return {
      cards: [
        {
          id: 1,
          imgSrc: 'https://tailwindcss.com/img/card-top.jpg',
          imgAlt: 'Sunset in the mountains',
          title: 'The Coldest Sunset',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, ' +
              'exercitationem praesentium nihil.',
          tags: ['photography', 'travel', 'winter']
        },
        {
          id: 2,
          imgSrc: 'https://tailwindcss.com/img/card-top.jpg',
          imgAlt: 'Sunset in the mountains',
          title: 'The Coldest Sunset',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, ' +
              'exercitationem praesentium nihil.',
          tags: ['photography', 'travel', 'winter']
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">

</style>
