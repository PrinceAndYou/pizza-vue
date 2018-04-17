import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		currentUser:null,
		isLogin:false,
		allPizza:[]
	},
	getters:{
		currentUser:state => state.currentUser,
		isLogin:state => state.isLogin
	},
	mutations:{
		userStatus:(state,user) => {
			if(user){
				state.currentUser = user;
				state.isLogin = true;
			}else{
				state.currentUser = null;
				state.isLogin = false;
			}
		},
		getAllPizzas(state,pizzas){
			state.allPizza = pizzas;
		},
		removeOnePizza(state,pizza){
			state.allPizza.forEach((singlepizza,index)=>{
				if (pizza==singlepizza) {
					state.allPizza.splice(index,1);
				}
			})
		},
		addNewPizza(state,newPizza){
			state.allPizza.unshift(newPizza);
		}
	},
	actions:{
		setUser({commit},user){
			commit("userStatus",user)
		},
		getAllPizzas({commit},pizzas){
			commit("getAllPizzas",pizzas)
		},
		removeOnePizza({commit},newPizza){
			commit("removeOnePizza",pizza)
		},
		addNewPizza({commit},newPizza){
			commit("addNewPizza",newPizza)
		}
	}
})