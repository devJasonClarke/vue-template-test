<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    const siteData = reactive({
      description: `My beautiful about page`,
    })

    useHead({
      // Can be static or computed
      title: 'About Page',
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    })
  },
})
</script>
