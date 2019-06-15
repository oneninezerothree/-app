<template>
<div class="Mlist">
    <MListHead/>
    <MListBody/>
    <MListfoot/>
  </div>
</template>
<script>
import axios from "axios";
import MListHead from '../components/MListHead.vue'
import MListBody from '../components/MListBody.vue'
import MListfoot from '../components/footer/footer.vue'
export default {
   components:{
    MListHead,
    MListBody,
    MListfoot
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