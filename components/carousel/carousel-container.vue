<template>
    <div class="carousel">
        <div class="carousel-inner">
            <carousel-item 
                v-for="(slide, index) in slides" 
                :slide="slide" 
                :key="`item-${index}`"
                :current-slide="currentSlide"
                :index="index"
                :direction="direction"
                @mouseover="stopSlideTimer"
                @mouseleave="startSlideTimer"
                >
            </carousel-item>
            <carousel-controls @prev="prev" @next="next"></carousel-controls>
        </div>
    </div>
</template>

<script>
    import CarouselItem from "./carousel-item.vue";
    import CarouselControls from "./carousel-controls.vue";

    export default {
        props: ["slides"],
        components: { CarouselItem },
        data: () => ({
            currentSlide: 1,
            slideInterval: null,
            direction: "right",
        }),
        methods: {
            setCurrentSlide(index) {
                this.currentSlide = index;
            },
            prev() {
                const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
                this.setCurrentSlide(index);
                this.direction = "left";
                this.startSlideTimer();
            },
            _next() {
                const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
                this.setCurrentSlide(index);
                this.direction = "right";
            },
            next() {
                this._next();
                this.startSlideTimer();
            },
            startSlideTimer() {
                this.stopSlideTimer();
                this.slideInterval = setInterval(() => {
                    this.next();
                }, 3000)
            },
            stopSlideTimer() {
                clearInterval(this.slideInterval);
            },
        },
        mounted() {
            this.startSlideTimer();
        },
        beforeUnmount() {
            this.stopSlideTimer();
        },
    };
</script>

<style scoped>
    .carousel {
        display: flex;
        justify-content: center;
    }

    .carousel-inner {
        position: relative;
        width: 900px;
        height: 400px;
        overflow: hidden;
    }
</style>