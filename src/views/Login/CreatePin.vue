<template>
    <div class="okike-verify">
        <div class="okike-verify-inner">
            <div class="container okike-verify-inner2">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                </div>

                <div class="verify-title">
                    <h3>Create a PIN</h3>
                    <p>We also secure your orders while<br> you place them.</p>
                </div>
                <div class="locations">
                    <div class="verify-number">
                        <input class="verify-input" type="text" name="text" placeholder="PIN" required>
                        <input class="verify-input" type="text" name="text" placeholder="Repeat PIN" required>
                        <router-link to="Landing"><button class="verify-btn">Create PIN</button></router-link>
                    </div>
                    <div class="text-center">
                        <img src="../../assets/images/key-lock.svg">
                    </div>
                    <div class="createpin-text">
                        <p>Your transactions are secure</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreatePin.vue"
    }
</script>

<style scoped>

</style>