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
