<!-- Regular Page Layout -->
<template>
    <div>
        <header class="shadow-small bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <nuxt-link to="/" class="font-bold">Nuxt Dojo</nuxt-link>
                <ul class="flex gap-4">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/About">About</nuxt-link></li>
                    <li><nuxt-link to="/Products" class="btn">Products</nuxt-link></li>
                    <li><nuxt-link to="/abc">error link test</nuxt-link></li>
                    <li><nuxt-link to="/Products/abc">error product test</nuxt-link></li>
                </ul>
            </nav>
        </header>

        <!-- Page Content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>