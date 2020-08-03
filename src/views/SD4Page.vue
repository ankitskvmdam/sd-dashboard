<template>
    <div class="route-container">
        <h2 style="margin-bottom: 1rem;">Contactless Attendance</h2>
        <div v-if="currentData == null">Loading...</div>
        <div v-else class="flex-wrapper">
            <div class="half">
                <br><br>
                <div>Name: <b> {{ currentData['Name'] }} </b><br><br></div>
                <div>Employee Id: <b> {{ currentData['Emp_id'] }} </b><br><br></div>
                <div>Cluster/Location: <b> {{ currentData['location'] }} </b><br><br></div>
                <div>Login Time: <b> {{ currentData['login time'] }} </b><br><br></div>
                <div>Attendance: <b> {{ currentData['attendance status'] }} </b><br><br></div>
                <div>Accuracy: <b> {{ currentData['accuracy'] }} </b><br><br></div>
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
import Data from "@/model/attendence"
import Chart from  "./Chart.vue"

export default {
    name: "SD-4",
    components: {
        Chart
    },
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