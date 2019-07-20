<template>
    <div class="okike-verify">
        <div class="okike-verify-inner">
            <div class="container okike-verify-inner2">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                </div>

                <div class="verify-title">
                    <h3>What should we call you?</h3>
                    <p>Give us a name you’d like us to <br>call you.</p>
                </div>
                <div class="locations">
                    <div class="verify-number">
                        <input class="verify-input" type="text" name="text" placeholder="Username" required>
                        <router-link to=""><button class="verify-btn">Welcome to Okike</button></router-link>
                    </div>
                    <div class="text-center">
                        <img src="../../assets/images/okike-logo-sm.svg">
                    </div>
                    <div class="abacha-everywhere">
                        <p>#AbachaInLagos</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Username.vue"
    }
</script>

<style scoped>

</style>