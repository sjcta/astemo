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
</style scoped>
iframe {
    width: 100vw;
    margin-top: 56px;
    height: calc(100vh - 56px);
}
<script>

export default {
  name: 'live',
  data () {
    return {
      url: 'https://as.alltuu.com/album/1113662608/?from=appmessage'
    }
  },
  methods: {
  }
}
</script>
