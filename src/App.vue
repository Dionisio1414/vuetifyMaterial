<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Dropdown/>
      <RegisterAgency/>      
    </v-toolbar>

    <v-content>
      <v-parallax src="http://www.5degeneve.ch/images/5degeneve-1.jpg" height="500">
        <v-layout column align-center justify-center class="white--text"></v-layout>
      </v-parallax>
      <Products/>
    </v-content>
  </v-app>
</template>

<script>
import Products from './components/Products';
import Dropdown from './components/Dropdown';
import RegisterAgency from './components/RegisterAgency'
export default {
  name: 'App',
  components: {
    Products,
	  Dropdown,
    RegisterAgency
  },
  data () {
    return {
      //
    }
  }
}
</script>
