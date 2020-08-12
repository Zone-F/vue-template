<template>
  <div class="child">
    来自父页面text的值：{{text}}
    <h6 @click="changeProps">改变文本</h6>
  </div>
</template>

<script>
export default {
  name: 'child',
  components: {},
  props: {
    text:String
  },
  computed: {},
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    changeProps(){
      this.$emit('update:text', '子页面改变了text的数据')
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
