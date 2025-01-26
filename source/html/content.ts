import Index from "./content/Index"
import Projects from "./content/Projects"
import Streamer from "./content/Streamer"
import { HTMLContentLike, resolveContent, TITLE } from "./utils"

export const MAIN = document.createElement("main")
export type Content<Names extends string> = Record<Names,Array<HTMLContentLike> | HTMLContentLike>

export type ContentName = "Index" | "Projects"
export const AVAILABLE_CONTENT: Content<ContentName> = {
    "Index": Index,
    "Projects": Projects
}

export type HiddenContentName = "Streamer"
export const HIDDEN_CONTENT: Content<HiddenContentName> = {
    "Streamer": Streamer
}

export const CONTENT = {...AVAILABLE_CONTENT,...HIDDEN_CONTENT} as const

export function switchContent(name: ContentName | HiddenContentName)
{
    const content = CONTENT[name]
    MAIN.innerHTML = ""
    MAIN.append(...resolveContent(Array.isArray(content) ? content : [content]))
    location.hash = name
    document.title = `${TITLE} - ${name}`
}

export function existsContent(name: string): name is ContentName
{
    return Object.keys(CONTENT).includes(name)
}

export function initContent()
{
    const hash = location.hash.substring(1)
    const name: ContentName = existsContent(hash) ? hash : "Index"
    switchContent(name)
}