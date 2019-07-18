<template>
    <div class="okike-verify">
        <div class="okike-verify-inner">
            <div class="container okike-verify-inner2">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                </div>

                <div class="verify-title">
                    <h3>Verify phone number <br> <b>+234 801 234 5678</b></h3>
                    <p>Please enter the activation code <br>sent via SMS.</p>
                </div>
                <div class="verify-number">
                    <input class="verify-input2" type="text" name="text" placeholder="Activation Code" required>
                    <router-link to=""><button class="verify-btn">Verify Number</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VerifyCode.vue"
    }
</script>

<style scoped>

</style>