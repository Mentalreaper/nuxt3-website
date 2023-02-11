<template>
    <span>
        <client-only>
            <component :is="currentIcon" :class="attributes.class"></component>
            <template #fallback></template>
        </client-only>
    </span>
</template>

<script setup lang="ts">
    const properties = defineProps<{
        name?: string
    }>()

    const currentIcon = computed(() => 
        defineAsyncComponent({
            loader: () => import(`~/assets/icons/${properties.name}.svg`),
            loadingComponent: {
                template: "<span></span>",
            },
            errorComponent: {
                template: "<span>error</span>",
            },
            delay: 200,
            timeout: 3000,
            suspensible: true,
        })
    )

    const attributes = useAttrs()
</script>