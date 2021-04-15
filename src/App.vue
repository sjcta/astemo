<template>
  <v-app>
    <topBar/>

    <v-sheet
      id="scrolling-top"
      class="overflow-y-auto"
    >
      <v-main>
        <v-parallax src="./assets/astemo/title_bg.png">

            <div class="BrandingImage dark">
              <h2>Empowering<br />Mobility</h2>
            </div>

            <v-container id="cardArea">
              <v-card elevation="6" class="rounded-lg">
                <v-img
                  src="./assets/astemo/card_bg_expo.png"
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
    <bottom-navi @switch="showDialog" />
  </v-app>
</template>

<style scoped>
    .v-dialog .v-toolbar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
  #scrolling-top {
      max-height: 100vh;
      padding-top: 55px;
      padding-bottom: 55px;
      /* background: #ededed url("./assets/astemo/title_bg.png") top center no-repeat;
      background-size: contain; */
  }
  .v-bottom-navigation {
    bottom: 0;
  }
  .BrandingImage {
    height: 80vw;
    padding: 20px 15px;
  }
  .BrandingImage h2 {
    font-size: 2.5em;
    font-style:italic;
    color: #FFF;
    text-shadow: 0 3px 10px rgba(0,0,0,.7);
    line-height: 1.2;
  }
  #cardArea {
    padding-bottom: 30px;
  }
  .v-card .v-card__title span {
    font-size: .8em;
  }
  .v-card .v-card__title h2 {
    font-size: 1em;
    margin-bottom: 20px;
  }
  .v-card .v-card__title h2 p {
    margin-bottom: 0;
  }
</style>

<script>
import topBar from './components/part_top_bar'
import bottomNavi from './components/part_bottom_navi'
import toppage from './components/toppage'
import dialogA from './components/dialogA'

export default {
  name: 'App',

  components: {
    topBar, bottomNavi, toppage, dialogA
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
