<template>
  <div class="table-container">
      <vs-table
        stripe
        :data="users"
        v-model="selected"
        @selected="handleSelected"
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
            <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
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
            selected: []
        }
    },
    methods: {
        handleSelected(tr) {
            this.$vs.notify({
                title:`Test Notification`,
                text:`Its working`
            })
        },
    }
}
</script>
