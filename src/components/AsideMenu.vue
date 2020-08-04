<template>
  <div >
    <el-row>
      <el-col>
        <h5>导航</h5>
        <el-menu
          default-active="/"
          class="el-menu-vertical-demo"
          router
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="/imglazy">
            <span slot="title">自定义指令--图片懒加载</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="css" scoped>
</style>
