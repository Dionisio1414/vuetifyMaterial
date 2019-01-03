<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
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

export default {
  name: 'App',
  components: {
    Products
  },
  data () {
    return {
      //
    }
  }
}
</script>
