import { defineNuxtConfig } from "nuxt/config";
import svgLoader from "vite-svg-loader"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image-edge"
    ],
    app: {
        head: {
            title: "Nuxt Dojo",
            meta: [
                { name: "description", content: "everything about Nuxt 3"}
            ],
            link: [
                { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
            ],
        },
    },
    vite: {
        plugins: [
            svgLoader(), // https://github.com/jpkleemans/vite-svg-loader#readme
        ],
    },
    image: {    
        // The screen sizes predefined by `@nuxt/image`:    
        screens: {      
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },
    }
});
