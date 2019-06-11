<template>
  <div class="home">
    <MList/>
  </div>
</template>

<script lang="ts">
import MList from './MList.vue'
export default {
   components:{
     MList
  }
}
</script>


<style lang="scss" >
*{
  margin:0;
  padding:0;
}
html{
  font-size:10px;
}
.home{
  position: relative;
}
</style>

