<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn round color="orange" slot="activator">
        <span class="mr-2">Travel Agency sign up</span>
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2" style="background: #ff9800 !important;justify-content: center;"
          primary-title
        >
          Travel Agency sign up
        </v-card-title>

        <v-card-text>
          <AgencySignUpForm/>
        </v-card-text>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import AgencySignUpForm from './AgencyFormSignUp';

  export default {
    components: {
      AgencySignUpForm
    },
    data () {
      return {
        dialog: false
      }
    }
  }
</script>