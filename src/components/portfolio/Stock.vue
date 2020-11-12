<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price: {{stock.price}}) | Quantity : {{stock.quantity}}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
            style="maxWidth:150px"
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger:insufficientStocks}"> 
        </div>
        <div class="pull-right">
          <button 
            class="btn btn-success"
            :disabled='parseInt(quantity) <=0 || quantity=="" ||insufficientStocks' 
            @click="sellStock">{{insufficientStocks?'Insufficient Stocks':'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props:{
    stock:{
      type:Object,
      required:true
    }
  },
  data(){
    return {
      quantity:0
    }
  },
  computed:{
    insufficientStocks(){
      return parseInt(this.quantity) > this.stock.quantity
    }
  },
  methods: {
      ...mapActions({
        placeSellOrder:'sellStock'
      }),
      sellStock(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: parseInt(this.quantity)
        };
        this.quantity = 0;
        this.placeSellOrder(order);
      }
  }
}
</script>

<style scoped>
.danger{
  border:1px solid red;
}
</style>