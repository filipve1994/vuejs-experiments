<template>
  <section class="pt-4 bg-white rounded-xl shadow mx-auto my-10 w-4/5 md:w-3/5">
    <blockquote class="m-8">
      <p class="font-semibold">"{{ blockquotetext }}"</p>
    </blockquote>

    <div
      class="text-white bg-pink-600 p-8 rounded-b-xl md:flex md:items-center"
    >
      <img
        :src="imgsrc"
        alt=""
        class="w-24 h-24 rounded-full border-4 border-white md:mr-4"
      />
      <div>
        <p class="font-bold">{{ name }}</p>
        <p>{{ role }}</p>
      </div>
    </div>
  </section>
</template>

<!--https://dev.to/developeraspire/building-a-testimonial-card-with-tailwindcss-p64 -->
<script>
export default {
  name: "TestimonialCard",
  data() {
    return {
      blockquotetext:
        "I had no design skills prior to using TailwindCSS, but with this amazing tools, I got better at CSS and design in general, it is an amazing tool",
      imgsrc:
        "https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      name: "Franklin Okolie",
      role: "Software Engineer New"
    };
  }
};
</script>

<style scoped></style>
