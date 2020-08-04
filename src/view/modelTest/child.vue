<template>
  <div>
    <h3>子页面</h3>
    {{msg}}
    <div @click="returnFather">返回父页面</div>
  </div>
</template>
<script>
export default {
  name:"modelChild",
  props:{
    msg:String
  },
  model:{
    prop: 'msg',
    event: 'toFather'
  },
  data(){
    return{
      
    }
  },
  methods: {
    returnFather(){
      console.log('emit');
      this.$emit('toFather','子页面返回的数据')
    }
  },
}
</script>