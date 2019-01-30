<template>
    <div>
         <stock v-for="item in this.stocks" :key=item.id
         :name="item.name" :price="item.price" :id="item.id">{{ item.name }}
         </stock>
        
    </div>
</template>

<script>
import Stock from './Stock.vue'
//import stocks from '../../data/stocks.js'


export default {
    data: function(){
        return{
            stocks: [{id: 0, name: '', price: 0 }]
            
        }
    },
    components: {
       Stock: Stock, 
    },
    
    created: function(){
        console.log("from store");
        console.log(this.$store.getters.stocks);
        console.log("from local stocks");
        console.log(this.stocks);
        
        this.stocks=this.$store.getters.stocks;
        
    }
}
</script>

<style>

</style>
