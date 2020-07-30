<template>
  <div class="table-container">
      <vs-table
        :data="users"
    >
        <template slot="thead">
            <vs-th>Name</vs-th>
            <vs-th>Employee ID</vs-th>
            <vs-th>Visitor ID</vs-th>
            <vs-th>Cluster/Location</vs-th>
            <vs-th>Violation Score</vs-th>
            <vs-th>Violation Density</vs-th>
        </template>

        <template slot-scope="{data}">
            <vs-tr :key="'sd' + indextr" v-for="(tr, indextr) in data" >
                <vs-td :data="data[indextr].Name">
                    {{data[indextr].Name}}
                </vs-td>

                <vs-td :data="data[indextr]['Employee ID']">
                    {{data[indextr]['Employee ID']}}
                </vs-td>

                <vs-td :data="data[indextr]['Visitor ID']">
                    {{data[indextr]['Visitor ID']}}
                </vs-td>

                <vs-td :data="data[indextr]['Cluster/Location']">
                    {{data[indextr]['Cluster/Location']}}
                </vs-td>

                <vs-td :data="data[indextr]['Voilation Score']">
                    {{data[indextr]['Voilation Score']}}
                </vs-td>

                <vs-td :data="data[indextr]['Voilation Density']">
                    {{data[indextr]['Voilation Density']}}
                </vs-td>

                <template class="expand-user" slot="expand">
                    <div class="con-expand-users">
                        <div class="con-btns-user">
                            <video
                                width="500px"
                                height="350px"
                                controls
                                style="object-fit: cover;"
                                v-if="data[indextr]['video'] != undefined || data[indextr]['video'] != null"
                            >
                            <source :src="data[indextr]['video']" type="video/mp4" />
                            </video>
                            <p v-else>
                                Video Not Found!
                            </p>
                        </div>
                    </div>
                </template>
            </vs-tr>
        </template>
    </vs-table>
  </div>
</template>

<script>
import Data from "@/model/sd"

export default {
    name: "SD-1",
    data() {
        return {
            users: Data,
        }
    },
    methods: {
    }
}
</script>
