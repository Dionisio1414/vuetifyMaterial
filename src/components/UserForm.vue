<template>
	<v-container fluid grid-list-sm>
		<v-form ref="form" v-model="valid" lazy-validation>
			<v-layout justify-space-between column>

				<v-layout justify-space-between column>
					<v-layout row wrap>
						<v-select		v-model="gender" 		:rules="genderRule"	:items="genderItems" label="Title" style="width:20%"></v-select>
						<v-text-field	v-model="firstName"		:rules="nameRules"	:counter="25"		label="First Name" required style="width:40%; padding-left:10px"></v-text-field>
						<v-text-field	v-model="laststName"	:rules="nameRules"	:counter="25"		label="Last Name" required style="width:40%; padding-left:10px"></v-text-field>
					</v-layout>


					<v-text-field	v-model="street"		:rules="nameRules"	:counter="25"		label="Street"></v-text-field>


					<v-layout row wrap>
							<v-autocomplete v-model="country" :items="countries" label="Country" required style="width:40%">
								<template slot="selection" slot-scope="data">
									<img :src="require('@/assets/flags/'+data.item.avatar.toLowerCase()+'.png')">&nbsp;
									{{ data.item.value }}
								</template>
								<template slot="item" slot-scope="data">
									<img :src="require('@/assets/flags/'+data.item.avatar.toLowerCase()+'.png')">&nbsp;
									{{ data.item.value }}
								</template>
							</v-autocomplete>
							<v-text-field	v-model="city"		:rules="nameRules" style="width:60%; padding-left:10px"		label="City"></v-text-field>
					</v-layout>

					<v-text-field	v-model="email"			:rules="emailRules"						label="E-mail" required></v-text-field>
					<v-text-field	v-model="cell"			:rules="emailRules"						label="Cell-Phone" required></v-text-field>
				</v-layout>

				<v-layout justify-space-between column>
					<v-checkbox		v-model="checkbox"		:rules="[v => !!v || 'You must agree to continue!']"     label="Do you agree?"      required    ></v-checkbox>
					<v-btn      :disabled="!valid"      @click="submit">submit</v-btn>
					<v-btn @click="clear">clear</v-btn>

					<v-text-field v-model="attendees" min="1" max="5" dense  label="Number of people that are going to attend" type="number"></v-text-field>
					<v-layout justify-space-between row>

						<v-select v-model="agePerson1" label="Age (1)"	:items="ageRanges"></v-select>
						<v-select v-model="agePerson2" label="Age (2)"	:items="ageRanges" style="padding-left:20px" v-if="attendees>1"></v-select>
						<v-select v-model="agePerson3" label="Age (3)"	:items="ageRanges" style="padding-left:20px" v-if="attendees>2"></v-select>
						<v-select v-model="agePerson4" label="Age (4)"	:items="ageRanges" style="padding-left:20px" v-if="attendees>3"></v-select>
						<v-select v-model="agePerson5" label="Age (5)"	:items="ageRanges" style="padding-left:20px" v-if="attendees>4"></v-select>
					</v-layout>
					// people that are going to attend max 4: age: 0-3, 3-6, 6-12, 12-18, 18-60, >60
					// Special occasion
					// TextArea: special requests / occasion (like anniversary, marriage, ...)
					// Cell Phone
					// http://free.currencyconverterapi.com/api/v5/convert?q=CHF_EUR&compact=y
					<v-text-field type="time" v-model="test" :rules="nameRules" :items="ageRanges" label="Last Name"></v-text-field>
				</v-layout>
			</v-layout>
		</v-form>
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			valid: true,
			firstName: '',
			laststName: '',
			nameRules: [v => !!v || 'Name is required', v => (v && v.length <= 100) || 'Name must be less than 10 characters'],
			email: '',
			emailRules: [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid'],
			gender: null,
			genderRule: [v => !!v || 'Please select your Gender!'],
			genderItems: ['Mr.', 'Mrs.'],
			checkbox: false,
			attendees: 1,
			agePerson1: null,
			agePerson2: null,
			agePerson3: null,
			agePerson4: null,
			ageRanges: ['0 - 3', '3 - 6', '6 - 12', '12 - 18', '18 - 60', '> 60'],
			countries: [
				{text: 'ad', value: 'addd', avatar: 'ad'}
			]
		}),

		methods: {
			submit() {
				if (this.$refs.form.validate()) {
				//https://vuetifyjs.com/en/components/forms
				}
			},
			clear() {
				this.$refs.form.reset()
			},
		},
	};
</script>