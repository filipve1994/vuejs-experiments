<template>
  <div class="max-w-xs rounded-lg overflow-hidden shadow-lg">
    <img class="w-full h-64 object-cover object-center"
         :src="card.imgSrc"
         :alt="card.imgAlt">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ card.title }}</div>
      <p class="text-gray-700 text-base">
        {{
          card.description
        }}
      </p>
      <div class="mt-8 flex justify-start items-center">
        <img class="w-10 h-10 rounded-full mr-4 object-cover" :src="card.author.imgSrc"
             :alt="card.author.imgAlt">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">{{ card.author.name }}</p>
          <p class="text-gray-600">{{ card.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!--https://codepen.io/ClemHlrdt/pen/xxOKYjV-->
<script>
export default {
  name: "CardBlock7",
  data() {
    return {
      card: {
        imgSrc: 'https://images.unsplash.com/photo-1570922552666-4c7b62225409?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
        imgAlt: 'Sunset in the mountains',
        title: 'Chocolate cake',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        author: {
          name: 'Jonathan Reinink',
          imgSrc: 'https://randomuser.me/api/portraits/men/92.jpg',
          imgAlt: 'Avatar of Jonathan Reinink'
        },
        date: 'Aug 18'
      }
    }
  },
}
</script>

<style scoped lang="scss">
body {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
