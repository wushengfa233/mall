<template>
<div id="home">
  <NavBar class="home-nav"> <div slot="center">购物车</div></NavBar>
</div>
</template>

<script>
import NavBar from "@/components/commom/navbar/NavBar";
import {getHomeMultidata} from "@/network/home";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components:{
    NavBar
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created() {
  //  1.请求多个数据
    getHomeMultidata().then(res=>{
      console.log(res)
      // this.result=res
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.home-nav{
  background-color: #ef4562;
  color: #FFFFFF;
}
</style>
