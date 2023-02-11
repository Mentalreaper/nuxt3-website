import { defineNuxtConfig } from "nuxt/config";
import svgLoader from "vite-svg-loader"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss"
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
});
