<template>
    <div class="okike-verify">
        <div class="okike-verify-inner">
            <div class="container okike-verify-inner2">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                </div>

                <div class="verify-code-title">
                    <h3>You’re almost there.</h3>
                    <p>Finally, let us know where you are and <br>we’ll, deliver straight to your doorstep.</p>
                </div>
                <div class="locations">
                    <div class="verify-number">
                        <router-link to="Username">
                        <div class="enter-location">
                            <div class="verify-input-location">Lagos<br><span class="location-hashtag">#AbachaInLagos</span></div>
                            <img src="../../assets/images/location.svg" >
                        </div>
                        </router-link>
                        <div class="enter-location">
                            <div class="verify-input-location">Enugu<br><span class="location-hashtag">#AbachaInEnugu</span></div>
                            <img src="../../assets/images/location.svg" >
                        </div>
                        <div class="enter-location">
                            <div class="verify-input-location">Abuja<br><span class="location-hashtag">#AbachaInAbuja</span></div>
                            <img src="../../assets/images/location.svg" >
                        </div>
                    </div>
                    <div class="abacha-everywhere">
                        <p>#AbachaEverywhere</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Location.vue"
    }
</script>

<style scoped>

</style>