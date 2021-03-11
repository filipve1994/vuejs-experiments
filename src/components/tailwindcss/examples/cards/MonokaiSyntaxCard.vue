<template>
  <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
    <div class="rounded-lg shadow-xl bg-gray-900 text-gray-400">

      <div class="border-b border-gray-800 px-8 py-3">
        <div class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
        <div class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
        <div class="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
      </div>

      <div class="px-8 py-6 font-mono break-all">
        <p>&lt;!<span class="text-pink-500">DOCTYPE</span> html&gt;</p>
        <p>&lt;<span class="text-pink-500">html</span>&gt;</p>
        <p>&lt;<span class="text-pink-500">head</span>&gt;</p>
        <p class="ml-10">&lt;<span class="text-pink-500">meta</span>
          <span class="text-yellow-200">charset=</span>
          <span
            class="text-green-300">"utf-8"</span>&gt;</p>

        <p class="ml-10">&lt;<span class="text-pink-500">meta</span> <span
            class="text-yellow-200">http-equiv=</span><span class="text-green-300">"X-UA-Compatible"</span> <span
            class="text-yellow-200">content=</span><span class="text-green-300">"IE=edge"</span>&gt;</p>

        <p class="ml-10">&lt;<span class="text-pink-500">meta</span> <span class="text-yellow-200">name=</span>
          <span
            class="text-green-300">"viewport"
            <span class="text-yellow-200">content=</span>
            <span class="text-green-300">"width=device-width, initial-scale=1, user-scalable=yes"</span>&gt;
          </span>
        </p>
        <p class="ml-10">&lt;<span class="text-pink-500">title</span>&gt;<span class="text-gray-200">Tailwind</span>&lt;/<span
            class="text-pink-500">title</span>&gt;</p>
        <p class="ml-10">&lt;<span class="text-pink-500">link</span> <span class="text-yellow-200">rel=</span>
          <span
            class="text-green-300">"stylesheet" <span class="text-yellow-200">href=</span>
          <span class="text-green-300">"https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"</span>&gt;
          </span>
        </p>
        <p>&lt;/<span class="text-pink-500">head</span>&gt;</p>
        <p>&lt;<span class="text-pink-500">body</span>&gt;</p>
        <p class="ml-10">&lt;<span class="text-pink-500">main</span> <span class="text-yellow-200">class=</span><span
            class="text-green-300">"p-5"</span>&gt;</p>
        <p class="ml-20">&lt;<span class="text-pink-500">h1</span> <span class="text-yellow-200">class=</span><span
            class="text-green-300">"text-3xl font-bold text-gray-800 mb-3"</span>&gt;<span class="text-gray-200">Hello World</span>&lt;/<span
            class="text-pink-500">h1</span>&gt;</p>
        <p class="ml-20">&lt;<span class="text-pink-500">p</span> <span class="text-yellow-200">class=</span><span
            class="text-green-300">"text-gray-700"</span>&gt;<span class="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum eius voluptates, aliquam similique obcaecati impedit dolorum, aliquid nulla adipisci, accusantium sed doloremque commodi dicta animi ratione aperiam praesentium saepe.</span>&lt;/<span
            class="text-pink-500">p</span>&gt;</p>
        <p class="ml-10">&lt;/<span class="text-pink-500">main</span>&gt;</p>
        <p>&lt;/<span class="text-pink-500">body</span>&gt;</p>
        <p>&lt;/<span class="text-pink-500">html</span>&gt;</p>
      </div>
    </div>
  </div>
</template>

<!--https://tailwindcomponents.com/component/monokai-syntax-->
<script>
export default {
  name: "MonokaiSyntaxCard"
}
</script>

<style scoped lang="scss">

</style>
