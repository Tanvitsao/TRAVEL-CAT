<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <nav class="navbar navbar-expand navbar-light bg-light">
            <router-link class="navbar-brand navbar-logo" to="/">
                <i class="fas fa-cat fa-1x mr-1"></i>
                TRAVEL CAT
            </router-link>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                <router-link class="nav-item nav-link" to="/login">管理者登入</router-link>
                </div>
            </div>
        </nav>
        <div id="carouselExampleSlidesOnly" class="carousel slide banner" data-ride="carousel" data-pause="false" data-interval="4000">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 banner-1">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 banner-2">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 banner-3">
                </div>
            </div>
        </div>
        <div class="text-center  text-light banner-title">
            <h3 class="h1 mb-3">發現不一樣的日本</h3>
            <p>旅行，能讓你付出卻變得更富有。</p>
        </div>

        <div class="container  ml-auto mr-auto">
            <div class="row text-center">
                <div class="col-md-4 indexbox d-flex">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/img/bus.png" alt="">
                    </div>
                    <div class="text-left ml-3 mb-0">
                        <h4 class="h5 indexbox-text">旅遊門票</h4>
                        <p>一券在手，通行無阻！</p>
                    </div>
                </div>
                <div class="col-md-4 indexbox d-flex">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/img/park.png" alt="">
                    </div>
                    <div class="text-left ml-3">
                        <h4 class="h5 indexbox-text">一日行程</h4>
                        <p>事先預訂，免煩惱！</p>
                    </div>
                </div>
                <div class="col-md-4 indexbox d-flex">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/img/mobile.png" alt="">
                    </div>
                    <div class="text-left ml-3">
                        <h4 class="h5 indexbox-text">線上預訂</h4>
                        <p>隨訂隨付，免到場排隊！</p>
                    </div>
                </div>
            </div>
        </div>
        
        <router-view></router-view>
        <CartModal></CartModal>

        <footer class="bg-dark py-4 pt-3">
            <div class="container d-flex justify-content-center">
                <div class="mr-3 text-primary">© Copyright 2018 TARVEL CAT 旅行貓</div>
                <div>
                    <a href="#" class="text-primary mr-1"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-primary mr-1"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="text-primary mr-1"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer> 
    </div>
</template>

<script>
import CartModal from "@/components/CartModal.vue";
export default {
    components: {
        CartModal,
    },
    computed: {
        isLoading(){
            return this.$store.state.isLoading;
        }
    }
}
</script>