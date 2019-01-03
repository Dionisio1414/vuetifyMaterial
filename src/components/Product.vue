<template>
	<v-layout card style="padding: 10px;">
	
		<v-flex xs12 sm6 offset-sm3 elevation-15 main-card>
			<v-card elevation-15 hover>
				<v-layout column>
					<v-flex xs4>
						<v-img :src="imageSrc" aspect-ratio="1"></v-img>
					</v-flex>
					<v-flex xs8>
						<v-layout column>
							<v-card-title primary-title>
								<div>
									<h3 class="headline mb-0">{{ title }}</h3>
									<div>{{ description }}</div>
								</div>
							</v-card-title>

							<v-card-actions class="pl-3">
								{{ priceTxt }} {{ price }} CHF<br>
								<small>(~ 440 EUR)</small>
								<v-spacer></v-spacer>
								<v-btn round color="orange" right v-on:click="resizePane">{{ caption }}</v-btn>
							</v-card-actions>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-card>
		</v-flex>
		
		<!-- Data picker -->
		
		<v-flex lg8 ml-5 v-if="isVisible">
			<DataPicker/>
		</v-flex>
		
		<!-- End data picker -->
		
	</v-layout>
</template>


<style>
	.layout.column > .flex.active {
		max-width: 50%;
	};
	
	.white-text {
		color: #fff!important!important;
	}
	
</style>
<script>
	import DataPicker from './DataPicker';
	import TestForm from './TestForm';
	
	export default {
		components: {
     		DataPicker,
    	},
		props: ['productID', 'isExpanded', 'imageSrc', 'title', 'description', 'priceTxt', 'price', 'caption', 'dialog'],
		data: () => ({
			isExpanded: false,
			isVisible: false,
			dialog: false
		}),
		methods: {
			resizePane(event) {
				let target = event.target, container = document.querySelector('.layout.row'), cards = document.body.querySelectorAll('.layout.row > .layout'), curr_el = target.closest('.layout.card');
				let currentCard = curr_el.firstChild;
				while(container.firstChild) {
					container.removeChild(container.firstChild);
				}
				container.appendChild(curr_el);
				currentCard.classList.add('lg4');
				currentCard.classList.remove('offset-sm3');
				this.isVisible = true;
				setTimeout(() => {
					let picker = document.querySelectorAll('.v-date-picker-table .v-btn');
					var counter = 0, btn = document.querySelector('.theme--dark.v-btn.v-btn--disabled[data-v-6ea021a6]:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline)');
					var btnContent = btn.querySelector('.v-btn__content');
					console.log(btnContent);
					picker.forEach((item, i) => {
						if(picker[i].classList.contains('v-btn--active')) {
							counter++;
							btn.classList.remove('v-btn--disabled');
							btn.classList.add('primary');
							btnContent.style.color = "white";
							
						} 
					},1000);
					console.log(picker);
					console.log(counter);
				})
			}
		}
	}
</script>