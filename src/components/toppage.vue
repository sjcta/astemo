<template>
  <v-container id="toppageArea" class="white">
    <h2>主要产品</h2>

    <v-carousel
     cycle
     height="400"
     hide-delimiter-background
     show-arrows-on-hover
      id="productsBlock" class="pdListPage">
      <v-carousel-item v-for="(n, i) in prdDataList" :key="i" :class="n.id">
        <a v-bind:href="n.url"><h3 v-html="n.title"></h3></a>
        <p class="TextStyle1" v-html="n.desc"></p>
        <ul class="LinkListStyle1" v-if="n.products.length > 0" v-bind:class="{'split':n.products.length > 4}">
            <li v-for="(item,idx) in n.products" :key="idx"><a v-html="item.name"></a></li>
        </ul>
      </v-carousel-item>
    </v-carousel>

    <h2>最新资讯</h2>

    <div class="Section" id="newsArea">
      <dl class="newsListStyle" v-for="(news, i) in newsDataList" :key="i">
        <dt v-html="news.date"></dt>
        <dd><a :href="news.url" v-html="news.title"></a></dd>
      </dl>
    </div>

    <h2>OUR BRANDS</h2>

    <div class="Section">
      <p class="TextStyle1 CenterAdjust">
          日立安斯泰莫以汽车、摩托车用产品为中心，旗下拥有涉猎广泛事业领域的众多品牌。<br>每个品牌既是常年积累的技术能力与信赖的证明，也是孕育先进移动出行方案的基石。
      </p>
      <div class="brandList">
        <span class="hitachi"></span>
        <span class="keihin"></span>
        <span class="showa"></span>
        <span class="nissin"></span>
        <span class="tokico"></span>
        <span class="paraut"></span>
        <span class="huco"></span>
        <span class="cb"></span>
        <span class="kitplus"></span>
      </div>
    </div>

  </v-container>
</template>

<style scope>
#toppageArea {
  padding: 0;
}
#toppageArea h2 {
  padding: 30px 30px 0;
  color: #999;
  text-align: center;
}

/*********************************** products ************************************/
.Section {
  padding: 30px;
}
.TextStyle1 {
  font-size: .9em;
}

#productsBlock .v-responsive {
  padding: 30px 30px 60px;
}
#productsBlock .ps a h3::before {
    background-image: url(/image/astemo/icon/icon_ps.svg);
}
#productsBlock .chassis a h3::before {
    background-image: url(/image/astemo/icon/icon_chassis.svg);
}
#productsBlock .adas a h3::before {
    background-image: url(/image/astemo/icon/icon_adas.svg);
}
#productsBlock .motor a h3::before {
    background-image: url(/image/astemo/icon/icon_motor.svg);
}
#productsBlock .after a h3::before {
    background-image: url(/image/astemo/icon/icon_after.svg);
}
#productsBlock .rd a h3::before {
    background-image: url(/image/astemo/icon/icon_rd.svg);
}
#productsBlock a h3::before {
    content: "";
    display: inline-block;
    width: 60px;
    height: 60px;
    margin-right: 15px;
    background-color: rgba(230, 0, 39, 1);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 70%;
    transition: all 300ms;
    opacity: 1;
}

#productsBlock.pdListPage * {
    transition: all 300ms;
}
#productsBlock.pdListPage div > a {
    display: block;
    text-decoration: none;
    background-color: hsla(353, 76%, 55%, 0.9);
}
#productsBlock.pdListPage a > h3 {
    display: flex;
    align-items: center;
    color: #FFF;
    padding: 0 15px 0 0;
    margin: 0;
    font-size: 1em;
}
#productsBlock.pdListPage a > h3 br {
  display: none;
}

#productsBlock.pdListPage p.TextStyle1 {
    color: #333;
    padding: 15px 30px 0;
    font-size: .9em;
}
#productsBlock.pdListPage .v-responsive__content {
    box-shadow: 0 0 30px rgba(0,0,0,.3);
}
#productsBlock ul.LinkListStyle1 {
    padding: 0 15px 0 30px;
}
#productsBlock ul.LinkListStyle1.split {
    display: flex;
    flex-wrap: wrap;
}
#productsBlock ul.LinkListStyle1.split li {
    width: 50%;
}
#productsBlock ul.LinkListStyle1 li {
    font-size: .7em;
    line-height: 2;
}
#productsBlock ul.LinkListStyle1 li a {
  text-decoration: none;
  color: rgba(230, 0, 39, 1);
}
#productsBlock .rd ul.LinkListStyle1 li a {
  color: rgba(81, 143, 179, 1);
}
#productsBlock ul.LinkListStyle1 li a::before {
    width: 12px;
    height: 10px;
    content: "\F0765";
    display: inline-block;
    font: normal normal normal 12px/1 "Material Design Icons";
    font-size: 9px;
    margin-right: 5px;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}

#productsBlock.pdListPage .rd .v-responsive__content > a {
    background-color: rgba(81, 143, 179, .9);
}
#productsBlock.pdListPage .rd a h3::before {
    background-color: rgba(81, 143, 179, 1);
}
#productsBlock .v-carousel__controls__item {
  margin: 0;
  color: #999;
}
#productsBlock .v-btn i::before {
  font-size: 0.5em;
}
#productsBlock .v-btn--active i::before {
  color: rgba(230, 0, 39, 1);
}

#newsArea dl {
  margin-bottom: 15px;
}
#newsArea dt {
  font-size: .8em;
  color: #999;
  line-height: 2;
}
#newsArea dd {
  font-size: .9em;
  color: #333;
}
#newsArea dd a {
  color: rgba(230, 0, 39, 1);
  text-decoration: none;
}
/* brandList */

.brandList {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto 30px;
}
.brandList span {
    display: inline-block;
    height: 50px;
    min-width: 150px;
    margin: 10px;
    text-align: center;
    background-position: top center;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 100%;
    flex-basis: calc(20% - 20px);
}
.brandList span.hitachi, .brandList span.keihin, .brandList span.showa, .brandList span.nissin {
    width: 200px;
    flex-basis: calc(25% - 20px);
}

.brandList span.hitachi {  background-image: url(/image/astemo/brand_logo/hitachi.png); }
.brandList span.keihin {  background-image: url(/image/astemo/brand_logo/keihin.png); }
.brandList span.showa {  background-image: url(/image/astemo/brand_logo/showa.png); }
.brandList span.nissin {  background-image: url(/image/astemo/brand_logo/nissin.png); }
.brandList span.tokico {  background-image: url(/image/astemo/brand_logo/tokico.png); }
.brandList span.paraut {  background-image: url(/image/astemo/brand_logo/paraut.png);}
.brandList span.huco {  background-image: url(/image/astemo/brand_logo/huco.png); }
.brandList span.cb {  background-image: url(/image/astemo/brand_logo/cb.png); }
.brandList span.kitplus {  background-image: url(/image/astemo/brand_logo/kitplus.png); }

.brandList span {
    min-width: 120px;
    height: 40px;
    margin: 5px;
    background-size: 100% auto;
}
.brandList span.hitachi, .brandList span.keihin, .brandList span.showa, .brandList span.nissin {
    width: 25%;
    flex-basis: calc(25% - 20px);
}

.brandList {
    width: 100%;
    margin: 0;
}
.brandList span {
    width: 100px;
    flex-basis: calc(50% - 20px);
}

</style>

<script>
export default {
  name: 'toppage',
  data () {
    return {
      prdDataSrcFile: '/js/astemo/products_data.js',
      prdDataList: [],
      newsDataSrcFile: '/data/news.js',
      newsDataList: []
    }
  },
  mounted () {
    this.prdDataGet()
    this.newsDataGet()
  },
  methods: {
    prdDataGet () {
      var the = this

      this.$http({
        method: 'get',
        url: this.prdDataSrcFile,
        data: {
          name: 'prdData'
        }
      }).then(res => {
        the.prdDataList = res.data
      })
    },

    newsDataGet () {
      var the = this

      this.$http({
        method: 'get',
        url: this.newsDataSrcFile,
        data: {
          name: 'newsData'
        }
      }).then(res => {
        the.newsDataList = res.data
      })
    }
  }
}
</script>
