<template>
  <div>
    <div class="inline-block mb-6 rounded-full bg-gray-300 pr-5 h-16 line-height-username1">
      <img class="rounded-full float-left h-full" src="https://randomuser.me/api/portraits/women/34.jpg"> <span class="ml-3">Kate Horwitz</span>
    </div>

    <div></div>

    <div class="inline-block mb-6 rounded-full bg-gray-300 pr-6 h-24 line-height-username2 text-3xl">
      <img class="rounded-full float-left h-full" src="https://randomuser.me/api/portraits/women/34.jpg"> <span class="ml-3">Kate Horwitz</span>
    </div>

    <div></div>

    <div class="inline-block rounded-full bg-gray-300 h-32 pr-8 line-height-username3 text-5xl">
      <img class="rounded-full float-left h-full" src="https://randomuser.me/api/portraits/women/34.jpg"> <span class="ml-4">Kate Horwitz</span>
    </div>
  </div>
</template>

<!--https://tailwindcomponents.com/component/avatar-with-username-->
<script>
export default {
name: "AvatarWithUsername"
}
</script>

<style scoped lang="scss">
.line-height-username1 {
  line-height: 3.75rem;
}

.line-height-username2 {
  line-height: 5.5rem;
}

.line-height-username3 {
  line-height: 7.5rem;
}
</style>
