<template>
  <div class="home">
    <Login/>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

@Component({
  components: {
    // HelloWorld,
    Login,
  },
})
export default class Home extends Vue {}
</script>


<style lang="scss" scoped>

html{
  font-size: 62.5%;
}
.home{
  margin-top: 6.6rem;
}
</style>

