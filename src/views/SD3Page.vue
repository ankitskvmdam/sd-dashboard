<template>
    <div class="route-container">
        <h2 style="margin-bottom: 1rem;">Social Distancing - Density</h2>
        <div v-if="currentData == null">Loading...</div>
        <div v-else class="flex-wrapper">
            <div class="half">
                <br><br>
                Number of People: <b> {{ currentData['number of people'] }} </b><br><br>
                Mask Violator(s): <b> {{ currentData['mask_voilators'] }} </b><br><br>
                Location: <b> {{ currentData['location'] }} </b><br><br>
                SD Violator(s): <b> {{ currentData['sd_voilators'] }} </b><br><br>
                Time Span: <b> {{ currentData['time span'] }} </b><br><br>
            </div>
            <div class="half">
                <video
                    width="500px"
                    height="350px"
                    controls
                    style="object-fit: cover;"
                    v-if="currentData.video != undefined || currentData.video != null"
                >
                <source :src="currentData.video" type="video/mp4" />
                </video>
                <p v-else>
                    Video Not Found!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Data from "@/model/sd_fr_density"

export default {
    name: "SD-3",
    data() {
        return {
            currentData: null,
        }
    },
    mounted() {
        this.currentData = Data[Number.parseInt(this.$route.params.id)]
    }
}
</script>