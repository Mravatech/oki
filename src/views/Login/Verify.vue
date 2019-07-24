<template>
    <div class="okike-verify">
        <div class="okike-verify-inner">
            <div class="container okike-verify-inner2">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                </div>

                <div class="verify-title">
                    <h3>Hi, we need your phone number to get started.</h3>
                    <p>An activation code will be sent to you<br> for verification.</p>
                </div>
                <div class="verify-number">
                    <input class="verify-input" v-model="phone_number" type="text" name="text" placeholder="E.g 0801 234 5678" required>
                    <button class="verify-btn" @click="onSubmit">Verify Number</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { onboard } from '../../services/onboarding.service'
    import router from "../../router";


    export default {
        name: "Verify",
        data: function () {
            return {
                phone_number: '',
            };
        },

        methods: {
            async onSubmit() {
                await onboard.phoneNumber(this.phone_number).then((res) => {
                    console.log(res);
                    router.push({ path: `/VerifyCode/${this.phone_number}`})
                }).catch((err) => console.log(err));

            }
        }
    }
</script>

<style scoped>

</style>
