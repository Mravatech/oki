<template>
    <div class="login-section">
        <div class="container">
            <div class="login-page">
                <div></div>
                <img src="../../assets/images/okike-logo-white-sm.svg">
                <p class="abacha-txt">#AbachaInLagos</p>
                <div class="">
                    <router-link to="Verify"><button class="login-with-btn" >LOGIN WITH PHONE NUMBER</button></router-link>
                    <div class="login-social">
                        <button class="login-with-btn2" >LOGIN WITH</button>
                        <img src="../../assets/images/dot.svg">
                        <div class="social_icon">
                            <div class="fb">
                                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="social"/>
                            </div>
                            <div class="fb">
                                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="social"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="need-help">
                    <img src="../../assets/images/need-help.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login.vue"
    }
</script>

<style scoped>

</style>