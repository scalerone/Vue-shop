<template>
<div>
     <div class="search-bar">
            <van-row>
                <van-col span="3">
                    <img :src="locationIcon" width="80%" class="location-icon"/>
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input" placeholder="搜索"/>
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <!--轮播图-->
        <div class="swiper-area">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img v-lazy="banner.image" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 分类列表 -->
        <div class="type-bar">
            <div  v-for="(cate,index) in category" :key="index" >
                    <img v-lazy="cate.image" width="90%" />
                    <span>{{cate.mallCategoryName}}</span> 
            </div>
        </div>
        <!--广告条-->
        <div class="ad-banner">
            <div>
                <img v-lazy="adBanner" width="100%" />
            </div>
        </div>
        <!--商品推荐-->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                   <swiper :options="swiperOption" >
                   <swiper-slide v-for="(item,index) in recommendGoods " :key="index" >
                       <div class="recommend-item">
                           <img :src="item.image" width="80%">
                           <div>{{item.goodsName}}</div>
                           <div>￥{{item.price}}</div>
                       </div>
                   </swiper-slide> 
                </swiper>
            </div>
        </div>
<swiperDefault></swiperDefault>
<swiperDefault3></swiperDefault3>
<swiperText></swiperText>
    </div>
</template>

<script>
    import { getIndex } from "@/api/index.js";
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import swiperDefault from '../swiper/swiperDefault'
    import swiperDefault3 from '../swiper/swiperDefault3'
    import swiperText from '../swiper/swiperText'
    export default {
        data() {
            return {
                 swiperOption:{
                    slidesPerView:3
                },
                msg: "shopping mall",
                locationIcon: require('../../assets/images/location.png'),
                bannerPicArray:[
                // {image:'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175111_9509.jpg'},
                // {image:'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175040_1780.jpg'},
                // {image:'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175142_6947.jpg'},
                //  
                ],
                category:[],
                adBanner:'',
                recommendGoods:[],

            }
        },
    created(){
     getIndex()
        .then(res => {
          if (res.status === 200) {
            let getData = JSON.parse(res.data.data);
            res.data.data = getData.data
            this.bannerPicArray = res.data.data.slides;
            this.category = res.data.data.category;
            this.adBanner = res.data.data.advertesPicture.PICTURE_ADDRESS;
            this.recommendGoods = res.data.data.recommend;
        
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
     components: {
        swiper,
        swiperSlide,
        swiperDefault,
        swiperDefault3,
        swiperText
    }



    }
</script>

<style  scoped>
    .search-bar{
        height: 2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }
    .search-input{
            width:100%;
            height: 1.3rem;
            border-top:0px;
            border-left:0px;
            border-right:0px;
            border-bottom:1px solid #fff !important;
            background-color: #e5017d;
            color:#fff;
        }
      .location-icon{
        padding-top:.2rem;
        padding-left:.3rem;
    }

::-webkit-input-placeholder {  /* WebKit, Blink, Edge */
    color:    #fff;
    font-size: .75rem; 
}
:-moz-placeholder {   /* Mozilla Firefox 4 to 18 */
   color:    #fff;
   font-size: .75rem; 
}
::-moz-placeholder {   /* Mozilla Firefox 19+ */
   color:    #fff;
   font-size: .75rem; 
}
:-ms-input-placeholder {  /* Internet Explorer 10-11 */
   color:    #fff;
   font-size: .75rem; 
}

.swiper-area{
        clear:both;
        max-height:10rem;
        overflow: hidden;
    }
.type-bar{
      background-color: #fff;
      margin:0 .3rem .3rem .3rem;
      border-radius: .3rem;
      font-size:14px;
      display: flex;
      flex-direction:row;
      flex-wrap:nowrap;
  }
  .type-bar div{
      padding: .3rem;
      font-size: 12px;
      text-align: center;
  }

 .recommend-area{
        background-color: #fff;
        margin-top:.3rem;
    }
 .recommend-title{
        border-bottom:1px solid #eee;
        font-size:14px;
        padding:.2rem;
        color:#e5017d;
    }
   .recommend-body{
        border-bottom:1px solid #eee;
    }
    .recommend-item{
        width:99%;
        border-right:1px solid #eee;
        font-size:12px;
        text-align: center;
    }


</style>