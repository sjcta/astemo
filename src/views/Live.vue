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
