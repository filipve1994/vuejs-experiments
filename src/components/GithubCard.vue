<template>
  <!-- Template from Semntic UI docs -->
  <div class="max-w-sm rounded overflow-hidden shadow-lg text-center">
    <div class="image">
      <img class="w-full" :src="user.avatar_url" />
    </div>

    <div class="px-6 py-4">
      <!--        <div class="font-bold text-xl mb-2">-->
      <div class="font-bold text-xl">
        <a :href="`https://github.com/${username}`" class="header">{{
          user.name
        }}</a>
      </div>
      <div class="mt-1 max-w-2xl text-base text-gray-500">
        <span class="date">Joined in {{ user.created_at }}</span>
      </div>

      <p class="text-gray-700 text-base">
        {{ user.bio }}
      </p>
    </div>

    <div
      class="px-6 pt-4 pb-2 border-solid border-l-0 border-r-0 border-b-0 border-t"
    >
      <!--        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>-->
      <a
        :href="`https://github.com/${username}?tab=followers`"
        class="text-gray-700"
      >
        <i class="user icon"></i>
        {{ user.followers }} Followers
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GithubCard",
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: {
        avatar_url: "https://avatars.githubusercontent.com/u/47209284?v=4",
        name: "Default Github name",
        created_at: "2019-01-31T09:13:59Z",
        bio: "",
        followers: "7"
      }
    };
  },
  async created() {
    const response = await axios.get(
      `https://api.github.com/users/${this.username}`
    );
    this.user = response.data;
  }
};
</script>

<style scoped></style>
