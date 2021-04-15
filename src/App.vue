<template>
  <v-app>
    <topBar/>

    <router-view></router-view>

    <bottom-navi @switch="showDialog" />
  </v-app>
</template>

<style>
.v-toolbar {
  z-index: 99;
}

iframe {
    width: 100vw;
    margin-top: -110px;
    height: calc(100vh + 55px);
    background-color: #eee;
}
</style>

<script>
import topBar from '@/components/part_top_bar'
import bottomNavi from '@/components/part_bottom_navi'

export default {
  name: 'App',

  components: {
    topBar, bottomNavi
  },
  data () {
    return {
      dialog_state: false,
      dialog_url: ''
    }
  },
  methods: {
    showDialog: function (val) {
      // console.log(this.dialog_state)
      if (val !== false) {
        this.dialog_url = val
        this.dialog_state = true
      } else {
        this.dialog_url = ''
        this.dialog_state = false
      }
    }
  }
}
</script>
