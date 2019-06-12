<template>
  <div id="app">
    <router-view/>
    <mxfooter />
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 50px;
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
