<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
</script>

<style lang="scss">
/* essential styles */
@import "./assets/styles/reboot";
@import "./assets/styles/bootstrap_grid";
@import "./assets/styles/variables";
@import "./assets/styles/typography";
@import "./assets/styles/global";
@import "./assets/styles/colors";

html,body{
  height: 100%;
}

#app{
  height: 100%;
}
</style>