<template>
  <v-app>
    <v-sheet
      id="scrolling-top"
      class="overflow-y-auto"
    >
      <v-main>
        <v-parallax src="@/assets/astemo/title_bg.png">

            <div class="BrandingImage dark">
              <h2>Empowering<br />Mobility</h2>
            </div>

            <v-container id="cardArea">
              <v-card elevation="6" class="rounded-lg" to="/expo">
                <v-img
                  src="@/assets/astemo/card_bg_expo.png"
                  class="white--text align-center rounded-lg align-end"
                  height="200px"
                >
                  <v-card-title class="align-end">
                    <span>日立汽车系统参展</span>
                    <h2>第19届上海国际汽车工业展览会</h2>
                    <p class="body-2">国家会展中心（上海）<br/>4月19-28日</p>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-container>
        </v-parallax>
        <toppage/>
        <dialog-a v-bind:dialogA="dialog_state" v-bind:url="dialog_url" @switch="showDialog(false)" />

      </v-main>
    </v-sheet>
  </v-app>
</template>

<script>
import toppage from '@/components/toppage'
import dialogA from '@/components/dialogA'

export default {
  name: 'App',

  components: {
    toppage, dialogA
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
      if(val!=false) {
        this.dialog_url = val
        this.dialog_state = true
      }else{
        this.dialog_url = ""
        this.dialog_state = false
      }
    }
  }
}
</script>
