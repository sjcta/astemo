<template>
  <v-app>
    <v-sheet
      class="overflow-y-auto"
    >
      <iframe src="//www.hitachi-automotive.cn/about" frameborder="0"></iframe>
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
  name: 'App',

  data () {
    return {
      url: 'http://www.hitachi-automotive.cn/about/'
    }
  },
  methods: {
  }
}
</script>
