<template>
  <v-layout row wrap>
    <v-flex sm12>
      <v-date-picker
        v-model="picker"
        year-icon="mdi-calendar-blank"
        prev-icon="mdi-skip-previous"
        next-icon="mdi-skip-next"
      ></v-date-picker>
<!--     <v-btn slot="activator" ml0 color="info">Next</v-btn>-->
      <TestForm/>
    </v-flex>
  </v-layout>
</template>

<style scoped>
	.v-picker {
		flex-direction: row;
		width: 100%;
	}
	.info {
		margin-left: 0;
	}
</style>

<script>
  import TestForm from './TestForm';
	
  export default {
	components: {
		TestForm	  
	},
	props: ['dialog'],
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10)
      }
    }  
  }
</script>