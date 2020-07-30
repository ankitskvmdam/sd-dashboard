<template lang="html">

  <div>
    <vs-sidebar
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="$store.state.sidebarActiveState"
    >

      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px" :src="AvatarImg" alt="user_img" />

        <h4>
          User's Name
        </h4>

      </div>

      <vs-sidebar-item index="1" icon="apps" to="/">
        Dashboard
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="linear_scale" to="/social-distancing">
        Social Distancing
      </vs-sidebar-item>

      <vs-divider icon="person" position="left">
        User
      </vs-divider>

      <vs-sidebar-item index="3" icon="verified_user">
        Configurations
      </vs-sidebar-item>
      <vs-sidebar-item index="4" icon="account_box">
        Profile
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button> 
      </div>

    </vs-sidebar>
  </div>

</template>

<script>
import AvatarImg from "@/assets/img_avatar.png";

export default {
    name: "Sidebar",
    data() {
        return {
            AvatarImg,            
        }
    }
}
</script>
