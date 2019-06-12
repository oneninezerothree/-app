<template>
  <div id="app">
    <mxfooter/>
    <router-view/>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import mxfooter from '@/components/footer/footer.vue';
@Component({
  components: {
    mxfooter
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
html{
  font-size: 62.5%;
  overflow-x: hidden;
  background: #f3f3f3;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
