<template>
  <v-app>
    <v-sheet
      class="overflow-y-auto"
    >
      <iframe src="//www.hitachi-automotive.cn/news/expo/" frameborder="0">Your browser does not support inline frames or is currently configured not to display inline frames.</iframe>
    </v-sheet>
  </v-app>
</template>

<style scoped>
iframe {
    width: 100vw;
    margin-top: -45px;
    height: calc(100vh - 5px);
    background-color: #eee;
}
</style>

<script>

export default {
  name: 'expo',
  data () {
    return {
      url: '//www.hitachi-automotive.cn/news/expo/'
    }
  },
  methods: {
  }
}
</script>
