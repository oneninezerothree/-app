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
import MListfoot from '../components/MListfoot.vue'
export default {
   components:{
    MListHead,
    MListBody,
    MListfoot
  },

}
</script>
<style lang="">
    
</style>