<template>
  <el-container>
    <el-aside width="auto">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="2">
          <NuxtLink to="/">
            <span class="material-icons">
              home
            </span>
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="2">
          <NuxtLink to="/entrada">
            <span class="material-icons">
              post_add
            </span>
          </NuxtLink>
        </el-menu-item>
        <el-menu-item>
          <NuxtLink to="/producto">
            <span class="material-icons">
              inventory_2
            </span>
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="2">
          <NuxtLink to="/proceso1">
            <span class="material-icons">
              precision_manufacturing
            </span>
            <b>1</b>
          </NuxtLink>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <Nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {};
</script>
<style>
body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
