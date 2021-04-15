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
  name: 'Products',

  data () {
    return {
      url: 'http://www.hitachi-automotive.cn/products/'
    }
  },
  methods: {
  }
}
</script>
