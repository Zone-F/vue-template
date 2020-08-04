<template>
<!-- 之定义指令实现图片懒加载 -->
  <div>
    <h5>图片懒加载</h5>
    <img v-for="img in imgList" :key="img.id" v-lazyload="img" alt="">
  </div>
</template>
<script>
export default {
  data(){
    return{
      imgList:[
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596453465566&di=db3cb9292b2eb9602f4470fb207fa0f0&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb64543a98226cffc7a951157b8014a90f703ea9c.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596453569191&di=fd8737f0a09155f5aecda72a8f2e0bad&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F381baf328b9d2a1df43d635b1d36553f.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596453582719&di=be986db7c68e6ec42c480e6286cb5852&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fd%2F57a310cde36c5.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596453582718&di=f5cb98987969cf7b02b6ea9944dbb5a7&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201407%2F31%2F20140731205158_jmazT.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596453582715&di=941b1bffd684bbf81ab4db80f244714b&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-06-30%2F5efae0aa53166.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1724785066,3313847247&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596453664654&di=d818f158bc904dc2a5b13e4bb716d0db&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-12-13%2F5df30245ef5b0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596460646133&di=8be553bde0efc1502c743040a4663942&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201407%2F05%2F183659uk5jkma6ivv1m3je.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596460646132&di=03396a90c18605f268e9135ac9214c88&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F589d21f74171c.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596460687791&di=4da03d3d41c4c8dec27b925746397b15&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2382902574%2C600649784%26fm%3D214%26gp%3D0.jpg',
      ]
    }
  },
  methods:{

  }
}
</script>