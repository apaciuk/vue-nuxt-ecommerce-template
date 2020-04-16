<template>
    <div class="pre-loader">
        <!-- <h1>Loading...</h1> -->
        <img src="../assets/img/Infinity.svg" alt="Loading" />
    </div>
</template>

<style lang="scss" scoped>
.pre-loader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.79);
    z-index: 9999;

    img{
        position: absolute;
        left: 50%;
        top: 48%;
        transform: translate(-50%, -48%);
    }
}
</style>
