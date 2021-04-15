<template>
    <v-bottom-navigation
        absolute
        color="red darken-4"
        scroll-target="#scrolling-top"
        grow
        >
        <v-btn dark to="/products">
            <span>产品</span>
            <v-icon middle>mdi-car-cog</v-icon>
        </v-btn>

        <v-btn to="/expo">
            <span>展会</span>
            <v-icon middle>mdi-track-light</v-icon>
        </v-btn>

        <v-btn to="/live">
            <span>直播</span>
            <v-icon middle>mdi-video-input-antenna</v-icon>
        </v-btn>

        <v-btn to="/survey">
            <span>问卷</span>
            <v-icon middle>mdi-message-text</v-icon>
        </v-btn>

        <v-btn to="/about">
            <span>关于</span>
            <v-icon middle>mdi-information-outline</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<style scoped>
.v-item-group.v-bottom-navigation .v-btn {
    min-width: 60px;
}
</style>

<script>
export default {
  name: 'bottomNavi',
  data () {
    return {
    }
  }
}
</script>
