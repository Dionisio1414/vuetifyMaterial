<template>
  <v-layout row>
<!--
    <Product :productID='info[0].id' :imageSrc='info[0].img' :title='info[0].title' :description='info[0].description' :priceTxt='products[0].priceTxt' :price='info[0].price' :caption='products[0].caption' v-if='$store.state.cruiseSelected==0||$store.state.cruiseSelected==1'/>
    <Product :productID='info[1].id' :imageSrc='info[1].img' :title='info[1].title' :description='info[0].description' :priceTxt='products[0].priceTxt' :price='info[1].price' :caption='products[0].caption' v-if='$store.state.cruiseSelected==0||$store.state.cruiseSelected==2'/>
    <Product :productID='info[2].id' :imageSrc='info[2].img' :title='info[2].title' :description='info[0].description' :priceTxt='products[0].priceTxt' :price='info[2].price' :caption='products[0].caption' v-if='$store.state.cruiseSelected==0||$store.state.cruiseSelected==3'/>    
-->
    
    <Product v-for='(value, key) in info' :productID='info[key].id' :imageSrc="'http://5dg.utest.space/storage/app/public/'+info[key].img" :title='info[key].title' :description='info[key].desc' :priceTxt='products[0].priceTxt' :price='info[key].price' :type='info[key].type' :caption='products[0].caption' v-if='$store.state.cruiseSelected==0||$store.state.cruiseSelected==key'/>
  </v-layout>
</template>


<script>
  import Product from './Product';
  import axios from 'axios';

  export default {
    components: {
     	Product,
    },

    data() {
      return {
        products: [
          {
            imageSrc: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
            title: 'Boat Cruise',
            description: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...',
            priceTxt: 'priceTxt',
            price: '486',
            caption: 'Learn more'
          }
        ],
		isVisible: false,
		info: null
      };
    },

    computed: {
        testit() {
            return this.$store.state.cruiseSelected;
        }
    },
	  
	created() {
		axios.get('http://5dg.utest.space/api/cruises')
			.then(response => (this.info = response.data))
			.catch(error => console.log(error));
	}  
  }
</script>
<style>
  .desr {
    width: 14vw;
    word-break: break-all;
  }
  .v-card{
    height: 100%;
  }
</style>