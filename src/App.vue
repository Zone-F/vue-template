<template>
  <div id="app">
    <el-container>
      <el-aside class="menu">
        <aside-menu></aside-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AsideMenu from './components/AsideMenu'  
export default {
  name: "App",
  data(){
    return{
      a:"what is love"
    }
  },
  components: {AsideMenu},
};
</script>
<style lang="css" scoped>
.menu {
  width: 200px;
  position: sticky;
  top: 0;
  height: 100%;
}
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
