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
                <div >
                    <b-card no-body>
                        <b-tabs card>
                            <b-tab no-body title="Cuisines">
                                <!--<b-card-img bottom src="https://picsum.photos/600/200/?image=21"></b-card-img>-->
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
                            </b-tab>

                            <b-tab no-body title="Abacha">
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
                            </b-tab>

                            <b-tab no-body title="Achicha">
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
                            </b-tab>

                            <b-tab no-body title="Okpa">
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
                            </b-tab>
                        </b-tabs>
                    </b-card>
                </div>


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
    // import {VueTabs, VTab} from 'vue-nav-tabs'
    export default {
        name: "Landing.vue",
        isActive: true,
        components: {
            // VueTabs,
            // VTab
        },

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
    .card{
        background-color: transparent;
        border: none;
    }
    .card-header {
        padding: 0.75rem 1.25rem;
        margin-bottom: 0;
        background-color: transparent !important;
        border-bottom: none !important;
    }
    a{
        text-decoration: none !important;
        color: #4A4A4A !important;
    }
    .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
        background-color: transparent;
        border-color: none;
        font-family: Avenir-Heavy;
        font-size: 20px !important;
        color: #4A4A4A !important;
        letter-spacing: 0;
    }
    .nav-tabs .nav-link {
        border: none;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        font-family: Avenir-Heavy;
        font-size: 20px !important;
        text-decoration: none !important;
        color: #BFBFBF !important;
        letter-spacing: 0;
        text-align: center;
        opacity: 0.5 !important;
    }
</style>