<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Choose date of cruise</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Register</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card><DataPicker/></v-card>

        <v-btn
          class="next-btn"
          disabled="disabled"
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card><UserForm/></v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
	import DataPicker from './DataPicker';
	import UserForm from './UserForm';

  	export default {
  		components: {
			DataPicker,
			UserForm
		},
    	data () {
			return {
        		e1: 0
			}
    	}
  	}
</script>