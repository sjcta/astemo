<template>
    <v-bottom-navigation
        absolute
        color="red darken-4"
        hide-on-scroll
        scroll-target="#scrolling-top"
        grow
        >
        <v-btn dark @click="$emit('switch','http://www.hitachi-automotive.cn/products/')">
            <span>产品</span>
            <v-icon middle>mdi-car-cog</v-icon>
        </v-btn>

        <v-btn @click="$emit('switch','http://www.hitachi-automotive.cn/news/expo/')">
            <span>展会</span>
            <v-icon middle>mdi-track-light</v-icon>
        </v-btn>

        <v-btn @click="$emit('switch','https://as.alltuu.com/album/1113662608/?from=appmessage')">
            <span>直播</span>
            <v-icon middle>mdi-video-input-antenna</v-icon>
        </v-btn>

        <v-btn @click="$emit('switch','https://www.wjx.cn/vj/eOhfc2H.aspx')">
            <span>问卷</span>
            <v-icon middle>mdi-message-text</v-icon>
        </v-btn>

        <v-btn @click="$emit('switch','http://www.hitachi-automotive.cn/about/')">
            <span>关于</span>
            <v-icon middle>mdi-information-outline</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
  name: 'bottomNavi',
  data () {
    return {
    }
  }
}
