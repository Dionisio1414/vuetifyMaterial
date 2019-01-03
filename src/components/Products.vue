<template>
  <v-layout row>
    <Product :productID=1 :imageSrc='products[0].imageSrc' :title='products[0].title' :description='products[0].description' :priceTxt='products[0].priceTxt' :price='products[0].price' :caption='products[0].caption' v-if='$store.state.cruiseSelected==0||$store.state.cruiseSelected==1'/>
    <Product :productID=2 :imageSrc='products[0].imageSrc' :title='products[0].title' :description='products[0].description' :priceTxt='products[0].priceTxt' :price='products[0].price' :caption='products[0].caption' v-if='$store.state.cruiseSelected==0||$store.state.cruiseSelected==2'/>
    <Product :productID=3 :imageSrc='products[0].imageSrc' :title='products[0].title' :description='products[0].description' :priceTxt='products[0].priceTxt' :price='products[0].price' :caption='products[0].caption' v-if='$store.state.cruiseSelected==0||$store.state.cruiseSelected==3'/>
  </v-layout>
</template>


<script>
  import Product from './Product';

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
		isVisible: false  
      };
    },

    computed: {
        testit() {
            return this.$store.state.cruiseSelected;
        }
    },
  }
</script>
