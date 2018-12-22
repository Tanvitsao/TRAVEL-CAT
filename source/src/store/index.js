import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        isLoading: false,
        products: [],
        // categories: [],
        searchText: '',
    },
    actions: {
        updateLoading(context, status) {
            context.commit('LOADING', status);
        },
        getProducts(context){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
            context.commit('LOADING', true);
            axios.get(api).then((response) => {
                context.commit('PRODUCTS', response.data.products);
                // context.commit('CATEGORIES', response.data.products);
                context.commit('LOADING', false);
                console.log('取得遠端',response.data)
            })
        },
        changeText(context, place) {
            context.commit('SEARCHTEXT', place);
        }
    },
    mutations: {
        LOADING(state, status) {
            state.isLoading = status;
        },
        PRODUCTS(state, payload) {
            state.products = payload;
        },
        // CATEGORIES(state, payload) {
        //     const categories = new Set();
        //     payload.forEach((item) => {
        //         categories.add(item.category);
        //     });
        //     state.categories = Array.from(categories);
        // }
        SEARCHTEXT(state, payload) {
            state.searchText = payload;
        }
    },
    getters: {
        text(state) {
            return state.searchText;
        },
        products(state) {
            return state.products;
        },
        // categories(state) {
        //     return state.categories;
        // }
    },
});