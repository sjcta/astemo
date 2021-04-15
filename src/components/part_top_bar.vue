<template>
    <v-app-bar
      absolute
      color="grey darken-4"
      elevate-on-scroll
      scroll-target="#scrolling-top"
    >
        <div class="white--text">
          <v-btn to="/"><v-icon middle>mdi-home</v-icon></v-btn>
           日立安斯泰莫汽车系统
        </div>
    </v-app-bar>
</template>

<script>
export default {
  name: 'topBar'
}
</script>

<style scoped>
header {
  z-index: 99 !important;
}
</style>
