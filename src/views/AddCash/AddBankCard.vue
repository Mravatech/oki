<template>
    <div class="add-bank-card-page">
        <div class="add-bank-card-inner">
            <div class="container add-bank-card-inner2">
                <div class="upper-menu">
                    <div class="back-btn">
                        <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                    </div>
                    <div class="addbankcard-btn">
                        <img src="../../assets/images/key-sm-white.svg" >
                        <router-link to="WalletBalance"><p>Add Bank Card</p></router-link>
                    </div>
                </div>
                <div class="customer-name">
                    <div class="verify-number">
                        <input class="addcard-input" type="text" name="text" placeholder="Username" required>
                    </div>
                    <div class="expiry-label">
                        <p>Expiry MM/YY</p>
                        <P>What's CVV <span class="questionmark"> ?</span></P>
                    </div>
                    <div class="expiry-date">
                        <input class="expiry-input" type="text" name="text" placeholder="MM" required>
                        <input class="expiry-input" type="text" name="text" placeholder="YY" required>
                        <input class="expiry-input" type="text" name="text" placeholder="CVV" required>
                    </div>
                    <div class="card-pin">
                        <input class="card-pin-input" type="text" name="text" placeholder="PIN" required>
                        <div class="atm-card-type">
                            <img src="../../assets/images/key-xs-white.svg" >
                            <img src="../../assets/images/verve.svg" >
                            <img src="../../assets/images/visa.svg" >
                            <img src="../../assets/images/mastercard.svg" >
                        </div>
                    </div>
                </div>


                <div class="add-card-button">
                    <router-link to="WalletBalance"><button class="addcard-btn">Add Card</button></router-link>
                    <div class="key-lock">
                        <img src="../../assets/images/key-white.svg" >
                    </div>
                </div>

                <div class="add-money-foot">
                    <div class="paystack_img">
                        <p>100% secure, payment is being encrypted and processed by</p>
                        <img src="../../assets/images/paystack.png" >
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddBankCard.vue"
    }
</script>

<style scoped>
    .upper-menu{
        padding: 1.5rem 0;
    }

    a{
        text-decoration: none;
        color: #ffffff;
        font-family: Avenir-Heavy;
        font-size: 22px;
        letter-spacing: 0;
    }
    .addbankcard-btn{
        padding-top: 7px;
        display: flex;
    }
    .addbankcard-btn p{
        padding-top: 8px;
        padding-left: 5px;
        margin-bottom: 0;
    }
    .addcard-input{
        border: none;
        background: #888888;
        border-radius: 35px;
        padding: 1rem 2rem;
        color: #ffffff;
        font-size: 18px;
        width: 100%;
        margin-bottom: 20px;
    }
    .addcard-input::placeholder{
        color: #ffffff;
    }
    .expiry-date{
        display: flex;
        justify-content: space-between;
    }

    .expiry-input{
        border: none;
        background: #888888;
        border-radius: 35px;
        padding: 1rem 2rem;
        color: #ffffff;
        font-size: 18px;
        width: 30%;
        margin-bottom: 20px;
    }
    .expiry-input::placeholder{
        color: #ffffff;
    }
    .card-pin{
        display: flex;
        justify-content: space-between;
    }
    .card-pin-input{
        border: none;
        background: #888888;
        border-radius: 35px;
        padding: 1rem 2rem;
        color: #ffffff;
        font-size: 18px;
        width: 50%;
        margin-bottom: 20px;
    }
    .card-pin-input::placeholder{
        color: #ffffff;
    }
    .atm-card-type{
        padding-top: 8px;
    }
    .atm-card-type img{
        padding-left: 5px;
    }
    .addcard-btn{
        border: none;
        width: 100%;
        background: #FFFFFF;
        border-radius: 35px;
        font-family: Montserrat-Medium;
        font-size: 18px;
        color: #252525;
        letter-spacing: 0;
        text-align: center;
        padding: 1rem 2rem;
        margin-bottom: 10px;
    }
    .expiry-label{
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        padding: 5px;
    }
    .expiry-label p{
        font-family: Avenir-Roman;
        font-size: 15px;
        color: #FFFFFF;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .questionmark{
        border: 1px solid #ffffff;
        border-radius: 50%;
        padding: 1px 8px;
    }
    .add-money-foot{
        padding-bottom: 1rem;
    }
    .paystack_img p{
        font-family: Avenir-Roman;
        font-size: 12px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        margin-bottom: 0;
    }
    .paystack_img img{
        width: 95px;
    }

</style>