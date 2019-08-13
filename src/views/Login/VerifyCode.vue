<template>
    <div class="okike-verify">
        <div class="okike-verify-inner">
            <div class="container okike-verify-inner2">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                </div>

                <div class="verify-title">
                    <h3>Verify phone number <br> <b>{{ getNumber($route.params.phone) }}</b></h3>
                    <p>Please enter the activation code <br>sent via SMS.</p>
                </div>
                <div class="verify-number">
                    <input class="verify-input2" type="text" v-model="otp" name="text" placeholder="Activation Code" required>
                    <button @click="onSubmit" class="verify-btn">Verify Number</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { onboard } from '../../services/onboarding.service'
    import router from "../../router";
    export default {
        name: "VerifyCode",
        data: function () {
            return {
                otp: ''
            };
        },

        methods: {
            getNumber(e){
                this.phone_number = e;
                return e;

            },
            async onSubmit() {
                // await onboard.verifyCode(this.phone_number, this.otp).then((res) => {
                //     console.log(res);
                    router.push({ path: `/Location`})
                // }).catch((err) => console.log(err));

            }
        }
    }
</script>

<style scoped>

</style>
