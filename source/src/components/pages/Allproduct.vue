<template>
    <div>
        <div class="bg-light pb-5">
            <div class="container">
                <h3 class="h3 text-center pt-5 mb-4">熱門地區</h3>
                <div class="row">
                    <div class="col-md-3">
                        <div class="row">
                            <router-link to="/honshu" class="col-10 mr-auto ml-auto mb-2 hotspot-1 d-flex align-items-center justify-content-center">
                                <h2 class="h2 text-light">
                                    本州
                                </h2>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="row">
                            <router-link to="/hokkaido" class="col-10 mr-auto ml-auto mb-2 hotspot-2 d-flex align-items-center justify-content-center">
                                <div class="h2 text-light">
                                    北海道
                                </div>    
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="row">
                            <router-link to="/shikoku" class="col-10 mr-auto ml-auto mb-2 hotspot-3 d-flex align-items-center justify-content-center">
                                <div class="h2 text-light">
                                    四國
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="row">
                            <router-link to="/kyushu" class="col-10 mr-auto ml-auto mb-2 hotspot-4 d-flex align-items-center justify-content-center">
                                <div class="h2 text-light">
                                    九州
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-5">
                <h3 class="h3 text-center pt-5 mb-4">一起去探索旅行的意義吧！</h3>
                <AllproductCard></AllproductCard>
            </div>
        </div>
    </div>
</template>


<script>
import $ from 'jquery';
import AllproductCard from '@/components/AllproductCard';
    export default{
        components: {
            AllproductCard
        },
    }
</script>