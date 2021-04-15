<template>
     <v-dialog
      v-model="dialogA"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
     <v-app-bar
        max-height="50"
        color="grey darken-4"
        elevate-on-scroll
        scroll-target="#pageContent"
        >
            <v-btn
                icon
                dark
                @click="$emit('switch',false)"
            >
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-app-bar>

        <v-sheet id="pageContent">
            <iframe :src="url" frameborder="0"></iframe>
        </v-sheet>
    </v-dialog>
</template>

<style scoped>
.v-dialog header {
    display: block;
    position: fixed;
    z-index: 99;
}
.v-dialog #pageContent iframe {
    margin-top: 55px;
    width: 100vw;
    height: calc(100vh - 55px);
}
</style>

<script>
export default {
  name: 'dialogA',
  props: ['dialogA', 'url'],
  data () {
    return {
    }
  }
}
</script>
