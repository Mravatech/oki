<template>
    <div class="view-okike-food">
        <div class="food-overlay">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
            </div>
            <div class="food-title">
                <h3>Boli & Titus</h3>
            </div>

        </div>
        <div class="view-food-img">
            <img src="../../assets/images/boli_view.jpg">
        </div>

        <div class="food-selection">
            <div class="food-name-price">
                <h3>Boli & Titus</h3>
                <h3>&#8358; 750</h3>
            </div>
        </div>
        <div class="buy-combo">
            <p>Boli, Utazi, Sauce,<br>
                & 2 Titus Fish.</p>
            <button class="buy-combo-btn">Buy Combo</button>
        </div>
        <div class="customize-food">
            <h4>Customize your Order</h4>
            <div class="customize-border">
                vdv
            </div>
            <div class="customize-border">
                vdv
            </div>
            <div class="customize-border">
                vdv
            </div>
            <div class="customize-border">
                vdv
            </div>
        </div>
        <div class="add-to-bag">
            <div class="add-to-bag-bg">
                <h3>&#8358; 3,300.00</h3>
                <div class="add-to-bag-inner">
                    <p>Add to Bag</p>
                    <img src="../../assets/images/btn-next.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ViewFood.vue"
    }
</script>

<style scoped>

</style>