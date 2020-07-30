

<template>
  <div class="centerx">
    <vs-navbar class="navbar" color="primary">
      <div slot="title" style="display: flex; align-items: center;">
          <span>
            <vs-icon
                icon="menu"
                class="icon hover"
                @click="$store.commit('toggleSidebarActiveState')"
                round
            >
            </vs-icon>
        </span>
        <vs-spacer></vs-spacer>
        <vs-navbar-title>
          Company Name
        </vs-navbar-title>
      </div>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style lang="scss">
</style>

