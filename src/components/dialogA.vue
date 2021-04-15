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
                <v-icon>mdi-close</v-icon>
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
    width: 100vw;
    height: 100vh;
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
