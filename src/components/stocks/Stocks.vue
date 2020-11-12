<template>
  <div class="row m-0 p-2">
    <app-stock :key="item.id" v-for="item in stocks" :stock="item"/>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  components:{
    appStock:Stock
  },
  computed:{
    stocks(){
      return this.$store.getters.stocks
    }
  }
}
</script>

<style>

</style>