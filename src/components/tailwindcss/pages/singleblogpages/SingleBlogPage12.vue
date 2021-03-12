<template>

  <div>
    <!-- <div class="relative flex justify-center items-center h-64">
      <img class="absolute top-0 left-0 z-0 h-full" src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="computer">
      <h1 class="z-10 text-bold text-3xl"> Blog Post Title</h1>
    </div> -->

    <header>
      <div class="w-full bg-cover bg-center h-32"
           style="height:32rem; background-image: url(https://images.unsplash.com/photo-1593642532744-d377ab507dc8);">
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div class="text-center">
            <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl mb-2">Blog Post Title</h1>
            <ul>
              <li class="space-x-2">
                <a class="text-white px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-600"
                   href="#">topic</a>
                <a class="text-white px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-600"
                   href="#">topic</a>
                <a class="text-white px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-600"
                   href="#">topic</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="p-6 sm:container xs:container md:w-2/3 md:max-w-4xl mx-auto text-gray-800 text-lg">
      <h2>Section</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat quo officia fugiat provident minima
        praesentium quibusdam pariatur consequuntur, possimus aperiam optio, quod aut consequatur. Ratione, dolor!
        Tempore, voluptas ex.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat quo officia fugiat provident minima
        praesentium quibusdam pariatur consequuntur, possimus aperiam optio, quod aut consequatur. Ratione, dolor!
        Tempore, voluptas ex.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat quo officia fugiat provident minima
        praesentium quibusdam pariatur consequuntur, possimus aperiam optio, quod aut consequatur. Ratione, dolor!
        Tempore, voluptas ex.
      </p>
    </div>


  </div>
</template>

<!--https://codepen.io/pjlamb12/pen/oNxJppP-->
<script>
export default {
  name: "SingleBlogPage12"
}
</script>

<style scoped lang="scss">
/*

 No custom CSS thanks to Tailwind!
 tailwindcss.com

*/
p {
  margin-bottom: 1rem;
}
h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
}

</style>
