<template>
  <div class="home">
    <div>张乐</div>
    <div>
      <el-button
        @click="drawer = true"
        type="primary"
        style="margin-left: 16px;"
      >
        点我打开
      </el-button>
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose"
      >
        <span>我来啦!</span>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      drawer: false,
      direction: "rtl"
    };
  },
  methods: {
    handleClose(done) {
      done();
    }
  }
};
</script>
<style lang="scss"></style>
