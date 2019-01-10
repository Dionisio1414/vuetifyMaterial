<template>
		<v-form ref="form" v-model="valid" lazy-validation>
			<v-layout justify-space-between column>
					<v-text-field		v-model="companyName"	label="Company Name"	required :rules="stringRules"></v-text-field>

					<v-layout row wrap>
						<v-select		v-model="gender" 		label="Title"			required :rules="genderRule" :items="genderItems" style="width:20%"></v-select>
						<v-text-field	v-model="firstName"		label="First Name"		required :rules="stringRules"		style="width:40%; padding-left:10px"></v-text-field>
						<v-text-field	v-model="laststName"	label="Last Name"		required :rules="stringRules"		style="width:40%; padding-left:10px"></v-text-field>
					</v-layout>


					<v-text-field		v-model="street"		label="Street"			required :rules="stringRules"			></v-text-field>


					<v-layout row wrap>
						<v-text-field	v-model="zip"			label="ZIP"				required :rules="stringRules" style="width:40%;"						></v-text-field>
						<v-text-field	v-model="city"			label="City"			required :rules="stringRules" style="width:60%; padding-left:10px"		></v-text-field>
					</v-layout>

					<v-autocomplete 	v-model="country"		label="Country"			required  :items="countries"></v-autocomplete>

					<v-text-field		v-model="email"			label="E-mail"			required :rules="emailRules"						></v-text-field>
					<v-text-field		v-model="phone"			label="Phone Number"	required :rules="phoneRules"						></v-text-field>
					<v-text-field		v-model="web"			label="URL"				required :rules="urlRules"							></v-text-field>
					<v-checkbox		v-model="checkbox"		:rules="[v => !!v || 'You must agree to continue!']"     label="Do you agree?"      required    ></v-checkbox>
			</v-layout>
			<v-btn      :disabled="!valid"      @click="submit">submit</v-btn>
			<v-btn @click="clear">clear</v-btn>
		</v-form>
</template>

<script>
	import axios from 'axios';
	export default {
		data: () => ({
			valid: false,
			firstName: '',
			laststName: '',
			stringRules: [v => !!v || 'Field is required', v => (v && v.length <= 255) || 'Name must be less than 255 characters'],
			email: '',
			emailRules: [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid'],
			gender: null,
			genderRule: [v => !!v || 'Please select your Gender!'],
			genderItems: ['Mr.', 'Mrs.'],
			phoneRules: [v => !!v || 'Field is required', v => (v && v.length <= 255) || 'Name must be less than 255 characters'], // regexp to be done
			urlRules: [v => !!v || 'Field is required', v => (v && v.length <= 255) || 'Name must be less than 255 characters'], // regexp to be done
			checkbox: false,
			countries: [
				{text: 'ad', value: 'addd', avatar: 'ad'}
			]
		}),

		methods: {
			submit(event) {				
				if (this.$refs.form.validate()) {
					let data = {
						firstName: this.firstName,
						email: this.email,
						gender: this.gender,
						laststName: this.laststName,
						street: this.street,
						country: this.country,
						city: this.city,
						phone: this.phone,
						company: this.companyName,
						url: this.web,
						zip: this.zip
					}										
					axios.post('http://5dg.utest.space/api/sign_up_agency',{data})
						.then(function(){
							location.reload();
						})
						.catch(error => console.log(error));
				}
			},
			clear() {
				this.$refs.form.reset()
			},
		},
	};
</script>