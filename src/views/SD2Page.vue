<template>
    <div class="route-container">
        <h2 style="margin-bottom: 1rem;">Mask Compliance</h2>
        <div v-if="currentData == null">Loading...</div>
        <div v-else class="flex-wrapper">
            <div class="half">
                <br><br>
                Name: <b> {{ currentData.Name }} </b><br><br>
                Employee Id: <b> {{ currentData['Empid'] }} </b><br><br>
                Visitor Id: <b> {{ currentData['Visitorid'] }} </b><br><br>
                Cluster/Location: <b> {{ currentData['cluster/location'] }} </b><br><br>
                Violation Score: <b> {{ currentData['voilation score'] }} </b><br><br>
                Violation Density: <b> {{ currentData['voilation density'] }} </b><br><br>
                Mask: <b> {{ currentData['mask'] }} </b><br><br>
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
import Data from "@/model/sd_fr_mask"

export default {
    name: "SD-2",
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