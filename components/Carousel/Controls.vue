<template>
    <div>
        <button class="carousel-control left" @click="$emit('prev')">&lt</button>
        <button class="carousel-control right" @click="$emit('next')">&gt</button>
    </div>
</template>

<script>
    export default {
        emits: ["prev", "next"], // vue v3
    };
</script>

<style scoped>
    .carousel-control {
        background-color: rgba(0, 0, 0, 0.5);
        color: #f3f3f3;
        display: inline-block;
        position: absolute;
        height: 50px;
        width: 70px;
        top: calc(50% - 25px);
        cursor: pointer;
    }
    .left {
        left: 0;
    }

    .right {
        right: 0;
    }
</style>