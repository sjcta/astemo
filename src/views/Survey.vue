<template>
  <v-app>
    <v-sheet
      class="overflow-y-auto"
    >
      <iframe :src="url" frameborder="0"></iframe>
    </v-sheet>
  </v-app>
</template>

<style scoped>
iframe {
    width: 100vw;
    margin-top: 55px;
    height: calc(100vh - 56px);
}
</style>

<script>

export default {
  name: 'survey',
  data () {
    return {
      url: 'https://www.wjx.cn/vj/eOhfc2H.aspx'
    }
  },
  methods: {
  }
}
</script>
