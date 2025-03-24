import { ICON_ICO, MAIN_CSS } from "../assets.js"
import HTMLHeadElement from "../builder/html/core/head.js"
import { AUTHOR, COLOR_SCHEMA, THEME_COLOR, TITLE } from "../config.js"

export function setupHead(head: HTMLHeadElement,description: string,title: string)
{
    head
    .addLink("icon",ICON_ICO)
    .addLink("stylesheet",MAIN_CSS)
    .addMeta("author",AUTHOR)
    .addMeta("description",description)
    .addMeta("theme-color",THEME_COLOR,{"data-react-helmet": true})
    .addMeta("color-schema",COLOR_SCHEMA)
    .addProperty("og:title",title)
    .addProperty("og:description",description)
    .addProperty("og:site_name",TITLE)
    .setTitle(title)
}