import { defineConfig } from "vite"
import legacy from "@vitejs/plugin-legacy"

const config = defineConfig({
    base: "/",
    build: {
        outDir: "dist"
    },
    plugins: [
        legacy({
            targets: ["last 2 versions and dead","> 0.3%","Firefox ESR"]
        })
    ]
})

export default config