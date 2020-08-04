<template>
  <div>
    <h1>父页面</h1>
    {{msg}}
    <children v-model="msg"></children>
  </div>
</template>
<script>
import children from './child';
export default {
  name:'modelFather',
  components:{ 
    children
  },
  data(){
    return {
      msg  : " from Father",
      shwo:'true'
    }
  },
  methods: {
    toFather(msg){
      console.log('ss');
      console.log('收到消息',msg);
    }
  },
}
</script>