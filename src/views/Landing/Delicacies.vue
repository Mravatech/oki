<template>
    <div class="view-okike-food">
        <div class="food-overlay">
            <div class="upper-menu">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                </div>
                <div class="menu-btn">
                    <img src="../../assets/images/menu-btn.svg" >
                </div>
            </div>
            <div class="food-title2">
                <h3>It’s a <b>Great Day for Good Delicacies.</b></h3>
            </div>

        </div>
        <div class="view-food-img">
            <img src="../../assets/images/boli_view.jpg">
        </div>

        <div class="food-selection">
            <div class="food-name-price">
                <h3>Boli & Titus</h3>
                <h3>&#8358; 750</h3>
            </div>
        </div>
        <div class="okike-food-section">
            <b-card no-body>
                <b-tabs card>
                    <b-tab no-body title="Abacha">
                        <div class="promo-today" id="abacha" >
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

                            </div>
                        </div>
                    </b-tab>
                    <b-tab no-body title="Boli">
                        <div class="promo-today" id="boli" >
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

                            </div>
                        </div>
                    </b-tab>
                    <b-tab no-body title="Drinks">
                        <div class="promo-today" id="drinks" >
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

                            </div>
                        </div>
                    </b-tab>

                </b-tabs>
            </b-card>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Delicacies.vue"
    }
</script>

<style scoped>
    .food-title2{
        text-align: left;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: #ffffff;
        padding-top: 2rem;
        padding-left: 1rem;
    }
    .food-title2 h3{
        font-family: Avenir-Roman;
        font-size: 26px;
        color: #FFFFFF;
        letter-spacing: 0;
    }
    .okike-food-section{
        position: relative;
        z-index: 2;
    }

</style>