<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="bg-light pb-5">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">四國</li>
                    </ol>
                </nav>

                <div class="row">
                    <div class="col-md-3">
                        <div class="list-group sticky-top">
                            <router-link to="/honshu" class="list-group-item list-group-item-action" data-toggle="list"><i class="fas fa-torii-gate mr-2"></i>本州</router-link>
                            <router-link to="/hokkaido" class="list-group-item list-group-item-action" data-toggle="list"><i class="fas fa-torii-gate mr-2"></i>北海道</router-link>
                            <router-link to="/shikoku" class="list-group-item list-group-item-action active" data-toggle="list"><i class="fas fa-torii-gate mr-2"></i>四國</router-link>
                            <router-link to="/kyushu" class="list-group-item list-group-item-action"><i class="fas fa-torii-gate mr-2"></i>九州</router-link>
                            <router-link to="/okinawa" class="list-group-item list-group-item-action"><i class="fas fa-torii-gate mr-2"></i>沖繩</router-link>
                        </div>
                    </div>

                    <div class="col-md-9">
                        <ShikokuCard></ShikokuCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import ShikokuCard from '@/components/ShikokuCard.vue';
    export default{
        data(){
            return{
                isLoading: false,
            }
        },
        components: {
            ShikokuCard
        },
    }
</script>