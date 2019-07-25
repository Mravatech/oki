<template>
    <div class="okike-landing">
        <div class="okike-landing-inner">
            <div class="container">
                <div class="up-intro">
                    <div class="hi-username">
                        <h1>Hi, Okey!</h1>
                        <p>Quickly grab your food now.</p>
                    </div>
                    <div class="">
                        <router-link to="ViewFood"><img src="../../assets/images/okike-menu.svg"></router-link>
                    </div>
                </div>
                <div class="locate-user">
                    <img src="../../assets/images/location2.svg">
                    <input class="input-location" type="text" name="location" placeholder="Lagos, Lekki, Nigeria">
                </div>
            </div>

                <div class="promo-today">
                    <h1>Promo Today</h1>
                    <!--<carousel :autoplay="true" :nav="false">-->
                    <div class="promo-today-slide">
                        <div class="sliding-post">
                            <router-link to="ViewFood">
                                <div class="product_img">
                                <img src="../../assets/images/abacha-meal.jpg">
                            </div>
                            <div class="food-details">
                                <p class="food-name">Boli & Titus</p>
                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                <p class="food-time">3:15pm</p>
                            </div></router-link>
                        </div>
                        <div class="sliding-post">
                            <div class="product_img">
                                <img src="../../assets/images/boli-meal.jpg">
                            </div>
                            <div class="food-details">
                                <p class="food-name">Boli & Titus</p>
                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                <p class="food-time">3:15pm</p>
                            </div>
                        </div>
                        <div class="sliding-post">
                            <div class="product_img">
                                <img src="../../assets/images/abacha-meal.jpg">
                            </div>
                            <div class="food-details">
                                <p class="food-name">Boli & Titus</p>
                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                <p class="food-time">3:15pm</p>
                            </div>
                        </div>
                        <div class="sliding-post">
                            <div class="product_img">
                                <img src="../../assets/images/boli-meal.jpg">
                            </div>
                            <div class="food-details">
                                <p class="food-name">Boli & Titus</p>
                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                <p class="food-time">3:15pm</p>
                            </div>
                         </div>
                        <div class="sliding-post">
                            <div class="product_img">
                                <img src="../../assets/images/abacha-meal.jpg">
                            </div>
                            <div class="food-details">
                                <p class="food-name">Boli & Titus</p>
                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                <p class="food-time">3:15pm</p>
                            </div>
                         </div>
                    </div>
                    <!--</carousel>-->
                    <!--<carousel :autoplay="true" :nav="false">-->
                        <!--<template slot="prev"><span class="prev">prev</span></template>-->
                        <!--<template slot="next"><span class="next">next</span></template>-->
                    <!--</carousel>-->
                </div>

                <!--<div class="promo-today-slide">-->
                    <!--<button class="tablinks" v-bind:class="{active: tab === 'cuisines'}" @click="tab = 'cuisines'">-->
                        <!--Cuisines-->
                    <!--</button>-->
                    <!--<button class="tablinks" v-bind:class="{active: tab === 'abacha'}" @click="tab = 'abacha'">-->
                        <!--Abacha-->
                    <!--</button>-->

                    <!--<vue-tabs></vue-tabs>-->
                    <!--<button class="tablinks" v-bind:class="{active: tab === 'partners'}" @click="tab = 'achicha'">-->
                        <!--Achicha-->
                    <!--</button>-->
                    <!--<button class="tablinks" v-bind:class="{active: tab === 'partners'}" @click="tab = 'okpa'">-->
                        <!--Okpa-->
                    <!--</button>-->
                    <!--<button class="tablinks" v-bind:class="{active: tab === 'partners'}" @click="tab = 'utazi'">-->
                        <!--Utazi-->
                    <!--</button>-->
                    <!--<button class="tablinks" v-bind:class="{active: tab === 'partners'}" @click="tab = 'okpa'">-->
                        <!--Okpa-->
                    <!--</button>-->
                    <!--<button class="tablinks" v-bind:class="{active: tab === 'partners'}" @click="tab = 'utazi'">-->
                        <!--Utazi-->
                    <!--</button>-->
                <!--</div>-->
                <vue-tabs class="okike-food-tabs">
                    <v-tab title="Cuisines">
                        <div class="promo-today" id="cuisines" >
                            <h1>Cuisines</h1>
                            <div class="promo-today-slide">
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                         <img src="../../assets/images/boli-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                     <img src="../../assets/images/boli-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-tab>

                    <v-tab title="Abacha">
                        <div class="promo-today" id="abacha" >
                            <h1>Abacha</h1>
                            <div class="promo-today-slide">
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/boli-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/boli-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-tab>

                    <v-tab title="Achicha">
                        <div class="promo-today" id="achicha" >
                            <h1>Achicha</h1>
                            <div class="promo-today-slide">
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/boli-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/boli-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-tab>
                    <v-tab title="Okpa">
                        <div class="promo-today" id="okpa" >
                            <h1>Okpa</h1>
                            <div class="promo-today-slide">
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/boli-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/boli-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                                <div class="sliding-post">
                                    <div class="product_img">
                                        <img src="../../assets/images/abacha-meal.jpg">
                                    </div>
                                    <div class="food-details">
                                        <p class="food-name">Boli & Titus</p>
                                        <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                        <p class="food-time">3:15pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-tab>
                </vue-tabs>




                <div class="cart-float container">
                    <router-link to="ViewFood"><img src="../../assets/images/okike-cart.svg">
                        <sup class="cart-count">12</sup></router-link>
                </div>

            </div>
        <!--</div>-->
    </div>
</template>

<script>
    // import carousel from 'vue-owl-carousel'
    import {VueTabs, VTab} from 'vue-nav-tabs'
    export default {
        name: "Landing.vue",
        isActive: true,
        components: {  VueTabs, VTab },

    }


</script>

<style scoped>
    body{
        background: #f3f5f7 !important;
    }
    .red{
        background: red;
    }

    .blue{
        background: blue;
    }

    .div{
        width: 100px;
        height: 100px;
        display: inline-block;
        border: 1px solid black;
    }
</style>