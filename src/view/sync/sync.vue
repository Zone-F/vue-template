<template>
  <div class="sync">
    <h4>.sync 测试</h4>
    <h5>父页面</h5>
    <h5 @click="changeText">改变文本</h5>
    {{text}}
    <h5>子页面</h5>
    <child :text.sync="text" />

  </div>
</template>

<script>
import child from './child.vue'
export default {
  name: 'sync',
  components: {child},
  props: {},
  computed: {},
  data() {
    return {
      text:'来自父页面的值'
    };
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    changeText(){
      this.text = '父页面改变了text的值'
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
