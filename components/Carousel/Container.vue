<template>
    <div class="carousel">
        <div class="carousel-inner">
            <CarouselIndicators :total="slides.length" :current-index="currentSlide" />
            <CarouselItem 
                v-for="(slide, index) in slides" 
                :slide="slide" 
                :key="`item-${index}`"
                :current-slide="currentSlide"
                :index="index"
                :direction="direction"
                @mouseover="stopSlideTimer"
                @mouseleave="startSlideTimer"
                @transitionstarted="setTransitionState"
                @transitionended="restartSlideTimer" />
            <CarouselControls @prev="prev" @next="next" />
        </div>
    </div>
</template>

<script>
    import CarouselItem from "./Item.vue";
    import CarouselControls from "./Controls.vue";
    import CarouselIndicators from "./Indicators.vue";

    var transitionIsHappening = false;

    export default {
        props: ["slides"],
        components: { CarouselItem, CarouselControls, CarouselIndicators },
        data: () => ({
            currentSlide: 1,
            slideInterval: null,
            direction: "right",
        }),
        methods: {
            setCurrentSlide(index) {
                if (!document.hidden) {
                    this.currentSlide = index;
                }
            },
            prev() {
                if (!transitionIsHappening && !document.hidden) {
                    const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
                    this.setCurrentSlide(index);
                    this.direction = "left";
                }
            },
            _next() {
                if (!transitionIsHappening && !document.hidden) {
                    const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
                    this.setCurrentSlide(index);
                    this.direction = "right";
                }
            },
            next() {
                if (!transitionIsHappening && !document.hidden) {
                    this._next();
                }
            },
            startSlideTimer() {
                if (!document.hidden) {
                    this.stopSlideTimer();
                    this.slideInterval = setInterval(() => {
                        this.next();
                    }, 5000);
                }
            },
            stopSlideTimer() {
                if (!document.hidden) {
                    clearInterval(this.slideInterval);
                }
            },
            restartSlideTimer() {
                if (!document.hidden) {
                    transitionIsHappening = false;
                    this.stopSlideTimer();
                    this.startSlideTimer();
                }
            },
            setTransitionState() {
                if (!document.hidden) {
                    transitionIsHappening = true;
                }
            }
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
        width: 100%;
        height: 42vw;
        min-height: 20vw;
        background-size: cover;
        overflow: hidden;
    }
</style>