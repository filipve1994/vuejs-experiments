<template>
  <div class="pt-6 pb-12 bg-gray-300">
    <div id="card" class="">
      <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">Recent Articles</h2>
      <!-- container for all cards -->
      <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
        <!-- card -->
        <div v-for="(card, $index) in cards" :key="$index"
             class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
          <!-- media -->
          <div class="h-64 w-auto md:w-1/2">
            <img class="inset-0 h-full w-full object-cover object-center" :src="card.img"/>
          </div>
          <!-- content -->
          <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
            <h3 class="font-semibold text-lg leading-tight truncate">{{ card.title }}</h3>
            <p class="mt-2">
              {{ card.excerpt }}
            </p>
            <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
              {{ card.author }} &bull; {{ card.date }}
            </p>
          </div>
        </div><!--/ card-->
      </div><!--/ flex-->
    </div>
  </div>
</template>


<!--https://codepen.io/artexxx/pen/QWyZKzy -->
<script>
export default {
  name: "CardBlock12",
  data() {
    return {
      title: "Dr. Perry Williams Joins UNR as Assistant Professor",
      excerpt: "Dr. Perry Williams recently joined the faculty in the Department of Natural Resources and Environmental Science at the University of Nevada, Reno, and was kind enough to provide his biography to help us get to know him. Welcome to Nevada, Dr. Williams!",
      date: "2021-12-01",
      author: "Perry Williams",
      img: "https://source.unsplash.com/l3Jdvs1Qui4/800x600",
      cards: [
        {
          title: "Dr. Perry Williams Joins UNR as Assistant Professor",
          excerpt: "Dr. Perry Williams recently joined the faculty in the Department of Natural Resources and Environmental Science at the University of Nevada, Reno, and was kind enough to provide his biography to help us get to know him. Welcome to Nevada, Dr. Williams!",
          date: "2021-12-01",
          author: "Perry Williams",
          img: "https://source.unsplash.com/l3Jdvs1Qui4/800x600"
        }, {
          title: "Good News for a Change: Secretarial Order 3362",
          excerpt: "in Feburary 2019, the U.S. Secretary of the Interior signed Secretarial Order 3362, a framework designed to improve habitat quality and protect crucial migration corridors for several species of wildlife including pronghorn, elk, and mule deer.",
          date: "2021-12-01",
          author: "Cody Schroeder",
          img: "https://source.unsplash.com/dG_p9P6aroQ/800x600"
        }, {
          title: "Pygmy Rabbits, an Understudied Icon of the West",
          excerpt: "Pygmy rabbits are the world’s smallest, and undoubtedly the cutest, leporid, and one of only two North American rabbits to dig their own burrows.",
          date: "2021-12-01",
          author: "Miranda Crowell",
          img: "https://source.unsplash.com/mstHiGp2U6A/800x600"
        }, {
          title: "A Wonderful Life: Career Retrospective",
          excerpt: "I can’t imagine a better way to have spent my professional life than as a professor of Wildlife Ecology. Kurt Pregitzer, our Chair for several years before 2010 used to say that being a professor was the best job in the world; he was right.",
          date: "2021-12-01",
          author: "Jim Sedinger",
          img: "https://source.unsplash.com/3NI9aJGOl-4/800x600"
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">

</style>
