<template>

  <div class="flex flex-col rounded shadow-xl max-w-sm">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover"
           src="https://images.unsplash.com/photo-1588453905571-300bb8aa0ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
           alt="Person hiking in the woods"/>
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm leading-5 font-medium text-teal-600">
          <a href="#" class="hover:underline">
            Adventure
          </a>
        </p>
        <a href="#" class="block">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            The best tips & tricks for hiking in the forest
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maiores reprehenderit fuga, ipsa id ipsum
            esse quam aperiam laboriosam numquam?
          </p>
        </a>
      </div>
      <div class="mt-2">
        <a class="text-teal-400 hover:text-teal-900 text-sm transition duration-150 ease-in-out" href="#">Read more
          <svg class="chev inline-block ml-1 w-2 h-2 stroke-2 stroke-current" viewBox="0 0 10 10" fill="none"
               aria-hidden="true">
            <g fill-rule="evenodd">
              <path d="M1 1l4 4-4 4"></path>
            </g>
          </svg>
          <svg class="arr hidden hover:inline-block ml-1 w-2 h-2 stroke-2 stroke-current" viewBox="0 0 10 10"
               fill="none" aria-hidden="true">
            <g fill-rule="evenodd">
              <path d="M0 5h7"></path>
              <path d="M4 1l4 4-4 4"></path>
            </g>
          </svg>
        </a>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a href="#">
            <img class="h-10 w-10 rounded-full object-cover"
                 src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=40"
                 alt=""/>
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 font-medium text-gray-900">
            <a href="#" class="hover:underline">
              Joseph Dough
            </a>
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16">
              May 04, 2020
            </time>
            <span class="mx-1">
              ·
            </span>
            <span>
              13 min read
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<!--https://codepen.io/vincenttt/pen/PoPOQdy-->
<script>
export default {
  name: "CardBlock9"
}
</script>

<style scoped lang="scss">
a:hover > .arr {
  display: inline-block;
}

a:hover > .chev {
  display: none;
}
</style>
