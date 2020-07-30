<template>
  <div class="table-container">
      <vs-table
        :data="users"
        @selected="handleSelected"
    >
        <template slot="thead">
            <vs-th>Number of People</vs-th>
            <vs-th>Mask Violators</vs-th>
            <vs-th>Location</vs-th>
            <vs-th>SD Violator</vs-th>
            <vs-th>Time Span</vs-th>
        </template>

        <template slot-scope="{data}">
            <vs-tr :data="tr" :key="'density' + indextr" v-for="(tr, indextr) in data" >
                <vs-td :data="data[indextr]['number of people']">
                    {{data[indextr]['number of people']}}
                </vs-td>

                <vs-td :data="data[indextr]['mask_voilators']">
                    {{data[indextr]['mask_voilators']}}
                </vs-td>

                <vs-td :data="data[indextr]['location']">
                    {{data[indextr]['location']}}
                </vs-td>

                <vs-td :data="data[indextr]['sd_voilators']">
                    {{data[indextr]['sd_voilators']}}
                </vs-td>

                <vs-td :data="data[indextr]['time span']">
                    {{data[indextr]['time span']}}
                </vs-td>
            </vs-tr>
        </template>
    </vs-table>
  </div>
</template>

<script>
import Data from "@/model/sd_fr_density"

export default {
    name: "SD-3",
    data() {
        return {
            users: Data,
        }
    },
    methods: {
        handleSelected(tr) {
            this.$vs.notify({
                title:`Please Wait`,
                text:`Redirecting to: ${tr.link}`
            })

            setTimeout(() => {
                window.location.href = tr.link;
            }, 3000)
        }
    }
}
</script>
