<template>
    <transition :name="transitionEffect">
        <div class="carousel-item" v-show="currentSlide === index" @mouseover="$emit('mouseover')" @mouseleave="$emit('mouseleave')" @transitionend="$emit('transitionended')" @transitionstart="$emit('transitionstarted')">
            <nuxt-img :src="slide" alt="" fit="inside" height="810" width="2000"/>
        </div>
    </transition>
</template>

<script>
    export default {
        emits: ["mouseover", "mouseleave", "transitionended", "transitionstarted"],
        props: ["slide", "currentSlide", "index", "direction"],
        computed: {
            transitionEffect() {
                return this.direction === "right" ? "slide-out" : "slide-in";
            }
        }
    };
</script>

<style scoped>
    .carousel-item {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .slide-in-enter-active, .slide-in-leave-active, .slide-out-enter-active, .slide-out-leave-active {
        transition: all 1s ease-in-out;
    }

    .slide-in-enter-from, .slide-out-leave-to {
        transform: translateX(-100%);
    }
    .slide-in-leave-to, .slide-out-enter-from {
        transform: translateX(100%);
    }
</style>