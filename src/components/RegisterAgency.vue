<template>
<<<<<<< HEAD
    <div class="text-xs-center">
        <v-menu
                v-model="menu"
                :close-on-content-click="false"
                offset-y>
            <v-btn round color="error" slot="activator">
                <span class="mr-2">Travel Agency sign up</span>
            </v-btn>
            <v-card>
                <v-card-text>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-layout justify-space-between column>
                            <v-text-field v-model="email" label="E-mail" required :rules="emailRules"></v-text-field>
                            <v-text-field v-model="password" label="Password" required :rules="passRules"></v-text-field>
                        </v-layout>
                        <v-btn :disabled="!valid" @click="submit">submit</v-btn>
                        <v-btn @click="clear">clear</v-btn>
                        <v-dialog
                                v-model="dialog"
                                width="500">
                            <v-btn flat slot="activator">
                                <span class="mr-2">Not registered yet, please click here!</span>
                            </v-btn>
                            <v-card>
                                <v-card-title
                                        class="headline grey lighten-2"
                                        style="background: #ff9800 !important;justify-content: center;"
                                        primary-title>
                                    Travel Agency sign up
                                </v-card-title>

                                <v-card-text>
                                    <AgencySignUpForm/>
                                </v-card-text>
                                <v-divider></v-divider>
                            </v-card>
                        </v-dialog>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
    import AgencySignUpForm from './AgencyFormSignUp';
    import axios from 'axios';
    export default {
        components: {
            AgencySignUpForm
        },
        data: () => ({
            valid: false,
            emailRules: [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid'],
            email: '',
            password: '',
            passRules: [v => !!v || 'Password is required']
        }),

        methods: {
            submit(event) {             
                if (this.$refs.form.validate()) {
                    let data = {
                        email: this.email,
                        password: this.password
                    }                                       
                    axios.post('http://5dg.utest.space/api/sign_in_agency',{data})
                        .then(function(res){
                            if(res.data == 401){
                                console.log('error');
                            }else if(res.data == 200){
                                location.reload();
                            }
                        })
                        .catch(error => console.log(error));
                }
            },
            clear() {
                this.$refs.form.reset()
            },
        },
    }
=======
  <div class="text-xs-center">
    <v-menu offset-y>
      <v-btn round color="error" slot="activator">
        <span class="mr-2">Travel Agency sign up</span>
      </v-btn>
        <v-list>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout justify-space-between column>
            <v-text-field	v-model="email"	label="E-mail" required :rules="emailRules"></v-text-field>
            <v-text-field	v-model="password" label="Password"	required :rules="emailRules"></v-text-field>
        </v-layout>
        <v-btn      :disabled="!valid"      @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
          <v-dialog
                  v-model="dialog"
                  width="500"
          >
              <v-btn round color="orange" slot="activator">
                  <span class="mr-2">Not registered yet, please click here!</span>
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
      </v-form>
        </v-list>
    </v-menu>
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
>>>>>>> 3d418027217701907117a6841624c5cc98623c58
</script>