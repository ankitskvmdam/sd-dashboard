<template>
  <div class="route-container">
    <div class="tab-container">

      <vs-tabs alignment="fixed">
        <vs-tab label="Social Distancing">
          <SD1 />
        </vs-tab>
        <vs-tab label="Social Distancing - Mask">
          <SD2 />
        </vs-tab>
        <vs-tab label="Social Distancing - Density">
          <SD3 />
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>

<script>
import SD1 from "./SD-1.vue";
import SD2 from "./SD-2.vue";
import SD3 from "./SD-3.vue";

export default {
  name: "SocialDistancing",
  components: {SD1, SD2, SD3}
}
</script>
