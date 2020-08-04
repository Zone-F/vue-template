import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes:[
    {
      path:"/",
      component:(resolve) => require(['@/view/index'], resolve)

      // component:()=>{
      //   import('@/view/index.vue')
      // }
    },
    {
      path:"/imglazy",
      component:(resolve) => require(['@/view/imgLazy/imgLazy'], resolve)
      // component:()=>{
      //   import('@/view/imgLazy/imgLazy.vue')
      // }
    }
  ]
});

export {router as default}