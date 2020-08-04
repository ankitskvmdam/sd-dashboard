<template>
    <div class="route-container">
        <div class="back-button" @click="goBack">
            <vs-icon icon="keyboard_arrow_left"></vs-icon>
            Go back
        </div>
        <h2 style="margin-bottom: 1rem;">
            Social Distancing
        </h2>
        <div v-if="currentData == null">Loading...</div>
        <div v-else class="flex-wrapper">
            <div class="half">
                <br><br>
                <div>Name: <b> {{ currentData.Name }} </b><br><br></div>
                <div>Employee Id: <b> {{ currentData['Employee ID'] }} </b><br><br></div>
                <div>Visitor Id: <b> {{ currentData['Visitor ID'] }} </b><br><br></div>
                <div>Cluster/Location: <b> {{ currentData['Cluster/Location'] }} </b><br><br></div>
                <div>Violation Score: <b> {{ currentData['Voilation Score'] }} </b><br><br></div>
                <div>Violation Density: <b> {{ currentData['Voilation Density'] }} </b><br><br></div>
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

                <div style="margin-top: 1rem">
                    <Chart
                        :chart-data="currentData.graph"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Data from "@/model/sd"
import Chart from  "./Chart.vue"

export default {
    name: "SD-1",
    components: {
        Chart
    },
    data() {
        return {
            currentData: null,
        }
    },
    methods: {
        goBack() {
            this.$router.push("/social-distancing")
        }
    },
    mounted() {
        this.currentData = Data[Number.parseInt(this.$route.params.id)]
    }
}
</script>