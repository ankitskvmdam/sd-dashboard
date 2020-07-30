<template>
  <div class="route-container">
    <div class="tab-container">

      <vs-tabs alignment="fixed">
        <vs-tab label="Social Distancing">
          <SD1 />
        </vs-tab>
        <vs-tab label="Social Distancing - Mask">
          <div>
            Tab 2
          </div>
        </vs-tab>
        <vs-tab label="Social Distancing - Density">
          <div>
            Tab 3
          </div>
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>

<script>
import SD1 from "./SD-1.vue";

export default {
  name: "SocialDistancing",
  components: {SD1}
}
</script>
