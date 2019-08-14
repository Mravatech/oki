<template>
    <div class="view-okike-food animated">
        <div class="food-overlay">
            <div class="upper-menu">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                </div>
                <div class="menu-head-title">MENU</div>
                <div class="menu-btn">
                    <router-link to="Menu"><img src="../../assets/images/menu-btn.svg" class=""></router-link>
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
            <div class="okike-food-section">
                <b-card no-body>
                    <b-tabs card>
                        <b-tab no-body title="Abacha">
                            <div class="food-promo-today"  >
                                <div class="black_dot"></div>
                                <div class="locate-user">
                                    <img src="../../assets/images/search-icon.svg">
                                    <input class="input-location" type="text" name="location" placeholder="Search your food">
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <router-link to="ViewFood"><div class="delicacy_img">
                                                <img src="../../assets/images/abacha-meal.jpg" alt="Okike Food">
                                            </div></router-link>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <router-link to="ViewFood"><div class="delicacy_img">
                                                <img src="../../assets/images/boli-meal.jpg" alt="Okike Food">
                                            </div></router-link>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <router-link to="ViewFood"><div class="delicacy_img">
                                                <img src="../../assets/images/abacha-meal.jpg" alt="Okike Food">
                                            </div></router-link>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <div class="delicacy_img">
                                                <img src="../../assets/images/boli-meal.jpg" alt="Okike Food">
                                            </div>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab no-body title="Boli">
                            <div class="food-promo-today"  >
                                <div class="black_dot"></div>
                                <div class="locate-user">
                                    <img src="../../assets/images/search-icon.svg">
                                    <input class="input-location" type="text" name="location" placeholder="Search your food">
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <router-link to="ViewFood"><div class="delicacy_img">
                                                <img src="../../assets/images/abacha-meal.jpg" alt="Okike Food">
                                            </div></router-link>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <router-link to="ViewFood"><div class="delicacy_img">
                                                <img src="../../assets/images/boli-meal.jpg" alt="Okike Food">
                                            </div></router-link>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <div class="delicacy_img">
                                                <img src="../../assets/images/abacha-meal.jpg" alt="Okike Food">
                                            </div>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <div class="delicacy_img">
                                                <img src="../../assets/images/boli-meal.jpg" alt="Okike Food">
                                            </div>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab no-body title="Drinks">
                            <div class="food-promo-today"  >
                                <div class="black_dot"></div>
                                <div class="locate-user">
                                    <img src="../../assets/images/search-icon.svg">
                                    <input class="input-location" type="text" name="location" placeholder="Search your food">
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <router-link to="ViewFood"><div class="delicacy_img">
                                                <img src="../../assets/images/abacha-meal.jpg" alt="Okike Food">
                                            </div></router-link>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <router-link to="ViewFood"><div class="delicacy_img">
                                                <img src="../../assets/images/boli-meal.jpg" alt="Okike Food">
                                            </div></router-link>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <div class="delicacy_img">
                                                <img src="../../assets/images/abacha-meal.jpg" alt="Okike Food">
                                            </div>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <div class="delicacy_img">
                                                <img src="../../assets/images/boli-meal.jpg" alt="Okike Food">
                                            </div>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab no-body title="Achicha">
                            <div class="food-promo-today"  >
                                <div class="black_dot"></div>
                                <div class="locate-user">
                                    <img src="../../assets/images/search-icon.svg">
                                    <input class="input-location" type="text" name="location" placeholder="Search your food">
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <router-link to="ViewFood"><div class="delicacy_img">
                                                <img src="../../assets/images/abacha-meal.jpg" alt="Okike Food">
                                            </div></router-link>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <router-link to="ViewFood"><div class="delicacy_img">
                                                <img src="../../assets/images/boli-meal.jpg" alt="Okike Food">
                                            </div></router-link>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <div class="delicacy_img">
                                                <img src="../../assets/images/abacha-meal.jpg" alt="Okike Food">
                                            </div>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <div class="delicacy_img">
                                                <img src="../../assets/images/boli-meal.jpg" alt="Okike Food">
                                            </div>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab no-body title="Okpa">
                            <div class="food-promo-today"  >
                                <div class="black_dot"></div>
                                <div class="locate-user">
                                    <img src="../../assets/images/search-icon.svg">
                                    <input class="input-location" type="text" name="location" placeholder="Search your food">
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <router-link to="ViewFood"><div class="delicacy_img">
                                                <img src="../../assets/images/abacha-meal.jpg" alt="Okike Food">
                                            </div></router-link>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <router-link to="ViewFood"><div class="delicacy_img">
                                                <img src="../../assets/images/boli-meal.jpg" alt="Okike Food">
                                            </div></router-link>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <div class="delicacy_img">
                                                <img src="../../assets/images/abacha-meal.jpg" alt="Okike Food">
                                            </div>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="delicacy-post">
                                            <div class="delicacy_img">
                                                <img src="../../assets/images/boli-meal.jpg" alt="Okike Food">
                                            </div>
                                            <div class="food-details">
                                                <p class="food-name">Boli & Titus</p>
                                                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                                                <p class="food-time">3:15pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>

                    </b-tabs>
                </b-card>
            </div>
        </div>


    </div>
</template>

<script>

    export default {
        name: "Delicacies.vue"
    }
</script>

<style scoped>
    .menu-head-title{
        font-family: Avenir-Black;
        font-size: 20px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        padding-top: 0.8rem;
    }
    .food-selection{
        background-color: #F3F3F3;
    }
    .promo-today{
        background-color: #F3F3F3;
    }
    .locate-user{
        margin-bottom: 20px;
    }
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
    .food-title2 h3 b{
        font-family: Avenir-Black;
        font-size: 26px;
        color: #FFFFFF;
        letter-spacing: 0;
    }
    .okike-food-section{
        position: relative;
        z-index: 2;
    }
    .delicacy-post{
        margin: 0;
        width: 100%;
        border-radius: 15px;
    }
    .delicacy_img{
        border-radius: 15px;
    }
    .delicacy-post img{
        width: 100%;
        border-radius: 15px;
        /*box-shadow: 0 2px 3px 0 rgba(0,0,0,0.25);*/
    }
    .delicacy-post p{
        margin-bottom: 0;
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

</style>