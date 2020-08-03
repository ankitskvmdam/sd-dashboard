<template>
  <div class="table-container">
      <vs-table
        :data="users"
        @selected="handleSelected"
    >
    <template slot="header">
        <h3 style="margin-bottom: 1rem;">
          Contactless Attendence
        </h3>
      </template>
        <template slot="thead">
            <vs-th>Name</vs-th>
            <vs-th>Employee ID</vs-th>
            <vs-th>Cluster/Location</vs-th>
            <vs-th>Login Time</vs-th>
            <vs-th>Attendance Status</vs-th>
            <vs-th>Accuracy</vs-th>
        </template>

        <template slot-scope="{data}">
            <vs-tr :data="indextr" :key="'Attendance' + indextr" v-for="(tr, indextr) in data" >
                <vs-td :data="data[indextr].Name">
                    {{data[indextr].Name}}
                </vs-td>

                <vs-td :data="data[indextr]['Emp_id']">
                    {{data[indextr]['Emp_id']}}
                </vs-td>

                <vs-td :data="data[indextr]['location']">
                    {{data[indextr]['location']}}
                </vs-td>

                <vs-td :data="data[indextr]['login time']">
                    {{data[indextr]['login time']}}
                </vs-td>

                <vs-td :data="data[indextr]['attendance status']">
                    {{data[indextr]['attendance status']}}
                </vs-td>

                <vs-td :data="data[indextr]['accuracy']">
                    {{data[indextr]['accuracy']}}
                </vs-td>
            </vs-tr>
        </template>
    </vs-table>
  </div>
</template>

<script>
import Data from "@/model/attendence"

export default {
    name: "MaskCompliance",
    data() {
        return {
            users: Data,
        }
    },
    methods: {
        handleSelected(indextr) {
            this.$router.push(`/sd-4/${indextr}`)
        }
    }
}
</script>
