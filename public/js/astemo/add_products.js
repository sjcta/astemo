// Jquery




// VUEJS

Vue.component('modalBrand', {
    props: ['brands'],
    template: '<div class="brandList"><template v-for="(logo,index) in brands"><span v-bind:class="logo.name"></span></template></div>'
});
  

// 产品模块
new Vue({
    el: '#productsBlock',
    data: {
        dataSrcFile: "/js/astemo/products_data.js",
        dataList: []
    },
    mounted: function () {

        var the = this;

        if(typeof the.dataSrcFile !== "undefined") {
            axios.get(the.dataSrcFile)
            .then(function (response) {
                the.dataList = response.data;
            }).catch(function (error) {
                console.log(error);
            })
        }else{
            console.log("data is missing...");
        }
    },
    methods: {
        titleReset: function(title) {

            //console.log(title);
            
            var title = title.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
                title = title.replace(/[|]*\n/, '') //去除行尾空格
                title = title.replace(/&npsp;/ig, ''); //去掉npsp
            return title;
        }
    }
})


// 产品详情页切换Tab
new Vue({
    el: '#productDetail',
    data: {
        currentTab: typeof(_hash) != "undefined" ? _hash : ''
    },
    mounted: function () {
        //console.log(this.currentTab)
    },
    methods: {
        checkTab: function(val) {

            //console.log('val:' + val, this.currentTab);

            if(!val && this.currentTab == "") {
                return true;
            }else{
                if(val==this.currentTab) {
                    return true;
                }else{
                    return false;
                }
            }

        },
        activeTab: function(val) {
            this.currentTab = typeof(val) != "undefined" ? val : ''
            return false;
        }
    }
})

// 品牌列表
new Vue({
    el: '#brandList',
    data: {
        brandsData: [{
                        name: "hitachi", link: "/"
                    },{
                        name: "keihin", link: "https://www.keihin-corp.co.jp/en/product/"
                    },{
                        name: "showa", link: "https://www.showa1.com/en/product/automobile/index.html"
                    },{
                        name: "nissin", link: "http://www.nissinkogyo.co.jp/en/product/"
                    },{
                        name: "tokico", link: ""
                    },{
                        name: "paraut", link: ""
                    },{
                        name: "huco", link: ""
                    },{
                        name: "cb", link: ""
                    },{
                        name: "kitplus", link: ""
                    }]
    }
})