<!-- Regular Page Layout -->
<template>
    <div class="colour-001-text ">
        <header class="container mx-auto p-4 shadow-small">
            <nav class="flex justify-between">
                <nuxt-link to="/" class="font-bold colour-004-hover-text">Alexander Conn</nuxt-link>
                <ul class="flex gap-4">
                    <li>
                        <nuxt-link to="/about-me" class="colour-004-hover-text">About Me</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/blog" class="colour-004-hover-text">Blog</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/portfolio" class="colour-004-hover-text">Portfolio</nuxt-link>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- Page Content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 shadow-small">
            <nav class="flex justify-between">
                <!-- CV/Resume Link -->
                <nuxt-link to="/cv" class="font-bold colour-004-hover-text">CV/Resume</nuxt-link>
                <!-- LinkTree-Link -->
                <nuxt-link to="https://linktr.ee/alexanderconn" class="font-bold content-center colour-004-hover-text">Linktr.ee</nuxt-link>
                <!-- Social Media Links -->
                <ul class="flex gap-2">
                    <li><nuxt-link><svg-icon name="youtube" class="w-6 h-6 colour-004-hover-text" /></nuxt-link></li>
                    <li><nuxt-link><svg-icon name="instagram" class="w-6 h-6 colour-004-hover-text" /></nuxt-link></li>
                    <li><nuxt-link><svg-icon name="twitter" class="w-6 h-6 colour-004-hover-text" /></nuxt-link></li>
                    <li><nuxt-link><svg-icon name="linkedin" class="w-6 h-6 colour-004-hover-text" /></nuxt-link></li>
                </ul>
            </nav>
        </footer>
    </div>
</template>