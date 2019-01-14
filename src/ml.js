import Vue from 'vue'
<<<<<<< HEAD
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
import Datetime from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime);
Vue.use(MLInstaller);
=======
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'
 
Vue.use(MLInstaller)
>>>>>>> 3d418027217701907117a6841624c5cc98623c58
 
export default new MLCreate({
  initial: 'russian',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('english').create({
	  logo:'logo-english',
      title: 'Hello {0}!',
      msg: 'You have {f} friends and {l} likes'
    }),
 
    new MLanguage('china').create({
      title: 'Oi {0}!',
      msg: '你有{f}朋友和{l}喜欢'
    }),
	  
	new MLanguage('russian').create({
		title: 'Привет {0}',
	  	msg: 'У вас есть {f} друзья и {l} лайки'
	})  
  ]
})

