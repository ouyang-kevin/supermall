<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper class="home-swiper" :banners ="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :title="['流行', '新款', '精选']" class="tab-control"/>
    <ul>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
    </ul>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from  'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import {getHomeMultidata} from 'network/home'

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar, 
      TabControl
    },
    data () {
      return {
        banners: [],
        recommends: []
      }
    },
    created () {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }
  .home-swiper {
    padding-top: 44px;
  }
  .tab-control {
    background-color: #fff;
    position: sticky;
    top: 44px;
  }
</style>
