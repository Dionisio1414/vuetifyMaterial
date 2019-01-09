<template>
	<v-layout card sm6 style="padding: 10px;">
	
		<v-flex sm6 offset-sm3>
			<v-card :data-id="productID" elevation-15 hover>
				<v-layout column>
					<v-flex col-xs-4>
						<v-img :src="imageSrc" aspect-ratio="1"></v-img>
					</v-flex>
					<v-flex xs8>
						<v-layout column>
							<v-card-title primary-title>
								<div>
									<h3 class="headline mb-0">{{ title }}</h3>
									<div class="desr">{{ description }}</div>
								</div>
							</v-card-title>

							<v-card-actions class="pl-3">
								{{ price }} EUR
								<v-spacer></v-spacer>
								<v-btn round color="orange" right v-on:click="resizePane">{{ caption }}</v-btn>
							</v-card-actions>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-card>
		</v-flex>
		
		<!-- Start stepper -->
		
		<v-flex lg4 ml-5 v-if="isVisible">
			<Stepper/>
		</v-flex>
		
		<!-- End stepper -->
		
	</v-layout>
</template>


<style>
	.layout.column > .flex.active {
		max-width: 50%;
	};
	
	.white-text {
		color: #fff!important;
	}
	
	.desr {
		height: 130px;
		overflow: auto;
	}
	
</style>
<script>
	import Stepper from './Stepper';
	
	export default {
		components: {
     		Stepper
    	},
		props: ['productID', 'imageSrc', 'title', 'description', 'priceTxt', 'price', 'caption', 'info'],
		data: () => ({
			isExpanded: false,
			isVisible: false
		}),
		methods: {
			resizePane(event) {
				let target = event.target, container = document.querySelector('.layout.row'), cards = document.body.querySelectorAll('.layout.row > .layout'), curr_el = target.closest('.layout.card');
				let currentCard = curr_el.firstChild;
				while(container.firstChild) {
					container.removeChild(container.firstChild);
				}
				target.closest('button').remove();
				container.appendChild(curr_el);
				let img = container.getElementsByClassName('v-image__image');
				img[0].style.backgroundSize = "100%";
				img[0].style.backgroundPosition = "top";
				container.getElementsByClassName('v-responsive__sizer')[0].style.paddingBottom="50%";
				currentCard.classList.add('lg4');
				currentCard.classList.remove('offset-sm3');
				container.getElementsByClassName('desr')[0].style.width="unset";
				this.isVisible = true;
				setTimeout(() => {
					let picker = document.querySelectorAll('.v-date-picker-table .v-btn');
					var counter = 0, btn = document.querySelector('.theme--dark.v-btn.v-btn--disabled[data-v-6ea021a6]:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline)');
					picker.forEach((item, i) => {
						if(picker[i].classList.contains('v-btn--active')) {
							counter++;
							btn.classList.remove('v-btn--disabled');
							btn.classList.add('primary');
							btnContent.style.color = "white";
							
						} 
					},1000);
				})
			}
		}
	}
</script>