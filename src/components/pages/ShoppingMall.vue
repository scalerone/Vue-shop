<template>
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
</template>

<script>
    export default {
        data() {
            return {
                msg: "shopping mall",
                locationIcon: require('../../assets/images/location.png'),
            }
        },
    }
</script>

<style  scoped>
    .search-bar{
        height: 2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
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





</style>