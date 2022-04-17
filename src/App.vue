<template>
  <div id="app">
    <router-view></router-view>
    <MiniTabBar></MiniTabBar>
  </div>
</template>

<script>
import MiniTabBar from "@/components/content/miniTabbar/MiniTabBar";
export default {
  name: 'App',
  components: {
    MiniTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
