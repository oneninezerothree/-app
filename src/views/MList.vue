<template>
<div class="Mlist">
    <MListHead/>
    <MListBody/>
  </div>
</template>
<script>
import axios from "axios";
import MListHead from '../components/MListHead.vue'
import MListBody from '../components/MListBody.vue'
export default {
   components:{
    MListHead,
    MListBody,
  },

}
</script>
<style >
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