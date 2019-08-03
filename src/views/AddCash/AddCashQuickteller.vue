<template>
    <div class="add-cash-card-page">
        <div class="container add-cash-card-page-inner">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
            </div>
            <div class="add-cash-card">
                <h3>Add Cash by Bank Card</h3>
                <p>Add cash through any of the existing
                    <br>Bank Cards or add multiple cards.</p>
            </div>
            <div class="">
                <div class="mastercard-input-box">
                    <div class="mb-3 pt-5">
                        <p class="addcash_txt">It’s even faster using your Bank Card to fund <br>your Okike Wallet, try it out now.</p>
                    </div>
                    <router-link to="BankTransfer">
                    <div class="mastercard_addcash">
                        <div class="card_icon"><img src="../../assets/images/card_icon.svg" ></div>
                        <button class="addcash-btn2">Add Card</button>
                        <div style="width: 44px;"></div>
                    </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddCashQuickteller.vue"
    }
</script>

<style scoped>
    .back-btn{
        text-align: left;
        padding: 30px 0;
    }

</style>