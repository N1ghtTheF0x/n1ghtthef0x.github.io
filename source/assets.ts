import { resolve } from "node:path"
import { ASSETS_FOLDERPATH } from "./folders.js"

export const MAIN_CSS = resolve(ASSETS_FOLDERPATH,"main.css")
export const PROJECTS_CSS = resolve(ASSETS_FOLDERPATH,"projects.css")
export const RANDOM_MJS = resolve(ASSETS_FOLDERPATH,"random.mjs")
export const ICON_ICO = resolve(ASSETS_FOLDERPATH,"icon.ico")

export const PROJECTS = {
    IGEM_MINIGAME_PNG: resolve(ASSETS_FOLDERPATH,"projects","iGEM-minigame.png"),
} as const