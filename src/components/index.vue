<template>
    <div class="index">
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="(item, index) in catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="(itemSon, i) in item.subcates" :key="itemSon.id">
                                                {{itemSon.title}}&nbsp;
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd>
                                                <a v-for="(itemSon, i) in item.subcates" :key="itemSon.id" href="/goods/43.html">{{itemSon.title}}</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片-->
                    <div class="left-705">
                        <el-carousel height="341px" indicator-position="outside">
                            <el-carousel-item v-for="(item, index) in sliderlist" :key="item.id">
                                <img :src="item.img_url" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!--/幻灯片-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item, index) in toplist" :key="item.id">
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{item.title}}</a>
                                    <span>{{item.add_time | cutTime }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for="(item, index) in goodList" :key="item.level1cateid">
            <div class="main-tit">
                <h2>{{item.catetitle}}}</h2>
                <p>
                    <a href="/goods/43.html" v-for="(itemson, index) in item.level2catelist">{{itemson.subcatetitle}}</a>
                  
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="(itemson, index) in item.datas" :key="itemson.artID">
                            
                            <router-link :to="'/goodsinfo/'+itemson.artID">
                                <div class="img-box">
                                    <img :src="itemson.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{itemson.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{itemson.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存{{itemson.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{itemson.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
// 导入模块
import axios from 'axios';

// 接口调用
// http://47.106.148.205:8899/site/goods/gettopdata/goods

 const baseUrl ='http://47.106.148.205:8899';

export default {
        // 数据
    data:function(){
        return {
            catelist:[],
            sliderlist:[],
            toplist:[],
            goodList:[]
        }
    },
    // 过滤器
  
    // 即将显示时调用
    beforeMount() {
        // console.log('即将要显示了哦');
        this.axios
        .get(`site/goods/gettopdata/goods`)
        .then((response)=>{
            //  console.log(response)
            // 保存数据
            this.catelist = response.data.message.catelist;
            this.sliderlist = response.data.message.sliderlist;
            this.toplist = response.data.message.toplist;
        })
        .catch((error)=>{
            // console.log(error);
        })
        this.axios.get(`site/goods/getgoodsgroup`)
        .then((response)=>{
            // console.log(response);
            this.goodList = response.data.message;
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    // 显示出来调用
    mounted() {
        
       
       
    },
};
</script>


<style scoped>

    .el-carousel__item img{
        display:block;
        width:100%;
        height:100%;
        
    }
</style>


