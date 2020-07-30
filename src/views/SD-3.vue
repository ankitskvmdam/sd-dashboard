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
                                Video Not Found! <br/>
                                If you want to see video select 2nd, 3rd, and 4th row.
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

            if (tr.link !== undefined) {
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
}
</script>
