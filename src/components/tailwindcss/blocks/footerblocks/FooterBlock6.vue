<template>
  <footer class="bg-dark-grey max-w flex text-white">
    <div class="container mx-auto text-center">
      <div class="py-32">
        <h1 class="text-5xl">Don't be shy. Say hi 👋</h1>
        <p class="text-2xl text-hairline py-6">Do you have a project or an idea that could use some help? <br/>Let's
          work together</p>
      </div>
      <div class="flex justify-start items-start">
        <ul class="list-reset flex pt-16 pb-16">
          <li class="mr-8">
            <a href="#" class="no-underline hover:underline text-white">
              <h2 class="text-3xl text-bold">Nussi</h2>
            </a>
          </li>
          <li class="mr-8 mt-2">
            <a class="text-grey-darker no-underline hover:text-white" href="#">Terms of Use</a>
          </li>
          <li class="mr-8 mt-2">
            <a class="text-grey-darker no-underline hover:text-white" href="#">Privacy</a>
          </li>
        </ul>

        <ul class="list-reset flex pt-16 pb-16 ml-auto">
          <li class="mr-8">
            <a class="text-grey-darker no-underline hover:text-white" href="#">Instagram</a>
          </li>
          <li class="mr-8">
            <a class="text-grey-darker no-underline hover:text-white" href="#">Facebook</a>
          </li>
          <li class="mr-8">
            <a class="text-grey-darker no-underline hover:text-white" href="#">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<!--https://codepen.io/dnuss/pen/KrExwB-->
<script>
export default {
  name: "FooterBlock6"
}
</script>

<style scoped lang="scss">
.bg-dark-grey {
  background: #1C252F
}
</style>
