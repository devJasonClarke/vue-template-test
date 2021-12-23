<template>
  <div class="home">
    <img src="@/assets/logo.png" />
    <Party />
  </div>
</template>
<script>
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
export default defineComponent({
  setup() {
    const siteData = reactive({
      description: `My beautiful index page`,
    });

    useHead({
      // Can be static or computed
      title: "Home Page",
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    });
  },
});
</script>
