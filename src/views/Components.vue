<template>
  <div class="components">
    <div>
      <h1>GithubCard component</h1>
      <hr />
      <GithubCard username="filipve1994"></GithubCard>
    </div>

    <div>
      <h1>Tailwindcss TestimonialCard component</h1>
      <hr />
      <TestimonialCard></TestimonialCard>
    </div>

    <div>
      <h1>Tailwindcss CardUI 1 component</h1>
      <hr />
      <CardUI1></CardUI1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GithubCard from "@/components/GithubCard";
import TestimonialCard from "@/components/tailwindcss/TestimonialCard";
import CardUI1 from "@/components/tailwindcss/CardUI1";

export default {
  name: "Components",
  components: {
    CardUI1,
    TestimonialCard,
    GithubCard
  },
  data() {
    return {
      username: ""
    };
  }
};
</script>

<style></style>
