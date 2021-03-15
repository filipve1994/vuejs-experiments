<template>
  <!-- component -->
  <div class="flex py-8">
    <!-- Icons Only -->
    <div class="flex flex-col">
      <button
          class="inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300 text-gray-700"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-activity -mx-2 leading-5"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-600 border-blue-600 text-gray-100 hover:bg-blue-500 hover:border-blue-500 hover:text-gray-100"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-airplay -mx-2 leading-5"
        >
          <path
              d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
          ></path>
          <polygon points="12 15 17 21 7 21 12 15"></polygon>
        </svg>
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-green-600 border-green-600 text-gray-100 hover:bg-green-500 hover:border-green-500 hover:text-gray-100"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-archive -mx-2 leading-5"
        >
          <polyline points="21 8 21 21 3 21 3 8"></polyline>
          <rect x="1" y="3" width="22" height="5"></rect>
          <line x1="10" y1="12" x2="14" y2="12"></line>
        </svg>
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-orange-600 border-orange-600 text-gray-100 hover:bg-orange-500 hover:border-orange-500 hover:text-gray-100"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-right -mx-2 leading-5"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-red-600 border-red-600 text-gray-100 hover:bg-red-500 hover:border-red-500 hover:text-gray-100"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bell-off -mx-2 leading-5"
        >
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
          <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
          <path d="M18 8a6 6 0 0 0-9.33-5"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      </button>
    </div>

    <!-- Text Only -->
    <div class="flex flex-col ml-4">
      <button
          class="inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300 text-gray-700"
      >
        Button
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-600 border-blue-600 text-gray-100 hover:bg-blue-500 hover:border-blue-500 hover:text-gray-100"
      >
        Button
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-green-600 border-green-600 text-gray-100 hover:bg-green-500 hover:border-green-500 hover:text-gray-100"
      >
        Button
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-orange-600 border-orange-600 text-gray-100 hover:bg-orange-500 hover:border-orange-500 hover:text-gray-100"
      >
        Button
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-red-600 border-red-600 text-gray-100 hover:bg-red-500 hover:border-red-500 hover:text-gray-100"
      >
        Button
      </button>
    </div>

    <!-- With Icon -->
    <div class="flex flex-col ml-4">
      <button
          class="inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300 text-gray-700"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-activity leading-5 mr-2"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
        Button
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-600 border-blue-600 text-gray-100 hover:bg-blue-500 hover:border-blue-500 hover:text-gray-100"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-airplay leading-5 mr-2"
        >
          <path
              d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
          ></path>
          <polygon points="12 15 17 21 7 21 12 15"></polygon>
        </svg>
        Button
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-green-600 border-green-600 text-gray-100 hover:bg-green-500 hover:border-green-500 hover:text-gray-100"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-archive leading-5 mr-2"
        >
          <polyline points="21 8 21 21 3 21 3 8"></polyline>
          <rect x="1" y="3" width="22" height="5"></rect>
          <line x1="10" y1="12" x2="14" y2="12"></line>
        </svg>
        Button
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-orange-600 border-orange-600 text-gray-100 hover:bg-orange-500 hover:border-orange-500 hover:text-gray-100"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-right leading-5 mr-2"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
        Button
      </button>
      <button
          class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-red-600 border-red-600 text-gray-100 hover:bg-red-500 hover:border-red-500 hover:text-gray-100"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bell-off leading-5 mr-2"
        >
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
          <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
          <path d="M18 8a6 6 0 0 0-9.33-5"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
        Button
      </button>
    </div>
  </div>

</template>

<!--https://tailwindcomponents.com/component/buttons-3-->
<script>
export default {
name: "Buttons3"
}
</script>

<style scoped lang="scss">

</style>
