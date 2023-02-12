<template>
    <div>
        <CarouselContainer :slides="slides" />
    </div>
</template>

<script setup>
    const slides = [
        '/images/image-01.jpg',
        '/images/image-02.jpg',
        '/images/image-03.jpg',
        '/images/image-04.jpg',
        '/images/image-05.jpg',
    ];
</script>