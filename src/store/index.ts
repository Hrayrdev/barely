import {createStore} from 'vuex'

export default createStore({
    state: {
        count: 1,
        basketList: []

    },
    getters: {},
    mutations: {
        increment(state, payload) {
            state.basketList = [state.basketList, ...payload];
            this.commit('saveBasketList')
        },
        saveBasketList(state){
            localStorage.setItem('basketList', JSON.stringify(state.basketList))
        },

        getBasketList(state) {
            if(localStorage.getItem('basketList')){

            state.basketList = JSON.parse(localStorage.getItem('basketList'))
            return JSON.parse(localStorage.getItem('basketList'))
            }
        }


    },
    actions: {},
    modules: {}
})
