<template>
  <div class="bg-gray-200 min-h-screen p-8 flex items-center justify-center">

    <div class="bg-white border rounded-lg overflow-hidden">
      <img :src="property.imageURL" :alt="property.imageAlt">
      <div class="p-6">
        <div class="text-gray-600 font-semibold tracking-wide text-xs uppercase">
          {{ property.beds }} beds &bull; {{ property.baths }} baths
        </div>
        <div class="font-semibold text-lg leading-tight truncate">
          {{ property.title }}
        </div>
        <div class="mt-1">
          {{ property.formattedPrice }}
          <span class="text-gray-600 text-sm">/ wk</span>
        </div>
        <div class="mt-2 flex items-center">
          <svg v-for="i in 5"
               :key="i"
               :class="i <= property.rating ? 'text-teal-500': 'text-gray-500'"
               class="h-4 w-4 fill-current"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
          >
            <path
                d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z"/>
          </svg>
          <span class="ml-2 text-gray-600 text-sm">{{ property.reviewCount }} reviews</span>
        </div>
      </div>
    </div>

  </div>
</template>

<!--https://codepen.io/pepas_24/pen/zgmvrm-->
<script>
export default {
  name: "CardBlockProperty",
  data() {
    return {
      property: {
        imageURL: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        imageAlt: 'An awesome proterty',
        beds: 3,
        baths: 2,
        title: 'Modern home in center city',
        priceInCents: 1900000,
        formattedPrice: '$1,900.00',
        reviewCount: 345,
        rating: 4
      }
    }
  },
}
</script>

<style scoped lang="scss">

</style>
