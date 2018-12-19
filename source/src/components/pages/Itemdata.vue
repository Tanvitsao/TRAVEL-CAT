<template>
    <div>
        <AlertMessage></AlertMessage>
        <loading :active.sync="isLoading"></loading>
        <div class="bg-light pb-5">
            <div class="container">
                <nav aria-label="breadcrumb" class="pt-4">
                    <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                        <li class="breadcrumb-item"><router-link to="/honshu">本州</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ item.title }}</li>
                    </ol>
                </nav>

                <div class="row">
                    <div class="col-md-6">
                        <img class="w-100" :src="item.imageUrl" alt="">                    
                    </div>
                    <div class="col-md-6">
                        <h3 class="h3">{{ item.title }}</h3>
                        <p>{{ item.content }}</p>
                        <div class="border border-primary  p-4 mt-4">
                            <div class="h5 text-secondary" v-if="!item.price">NT$ {{ item.origin_price }}</div>
                            <del class="h6 text-secondary" v-if="item.price">NT$ {{ item.origin_price }}</del>
                            <div class="h4" v-if="item.price">NT$ {{ item.price }}</div>
                            <select name="" class="form-control mt-3" id="" v-model="itemNum">
                                <option :value="num" v-for="num in 10" :key="num">
                                    {{ num }} {{ item.unit }}
                                </option>
                            </select>
                            <div class="text-dark mt-4">
                                <i class="mr-2 far fa-clock"></i>
                                24小時內確認訂單
                            </div>
                            <div class="text-dark mt-2">
                                <i class="mr-2 far fa-smile-wink"></i>
                                價格保證優惠
                            </div>
                            <div class="d-flex justify-content-end mt-3">
                                <div class="mr-3 d-flex align-items-center">
                                    小計 <strong>{{ itemNum * item.price }}</strong> 元                                    
                                </div>
                                <button type="button" class="btn btn-primary btn-sm" @click="addtoCart(item.id, itemNum)">
                                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                    加到購物車
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
    export default{
        data(){
            return{
                itemId: '',
                isLoading: false,
                item: {},
                itemNum: '1',
                status: {
                    loadingItem: '',
                },

            }
        },
        methods: {
            getItem(){
                const vm = this;
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${vm.itemId}`;
                vm.isLoading = true;
                this.$http.get(api).then((response) => {
                console.log(response.data)
                vm.item = response.data.product;
                console.log(this.item)
                vm.isLoading = false;
                })
            },
            addtoCart(id, qty = 1){
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
                const vm = this;
                vm.status.loadingItem = id;
                const cart = {
                    product_id: id,
                    qty
                };
                this.$http.post(api, {data: cart}).then((response) => {
                console.log(response.data)
                vm.status.loadingItem = '';
                // vm.getCart();
                vm.$bus.$emit('message:push', '加到購物車囉！', 'success');
                })
            },
        },
        created(){
            this.itemId = this.$route.params.itemId;
            this.getItem();
        }
    }
</script>