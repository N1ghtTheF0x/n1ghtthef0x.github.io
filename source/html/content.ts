import Default from "./content/Main"
import Projects from "./content/Projects"
import { HTMLContentLike, resolveContent, TITLE } from "./utils"

export type ContentName = "Index" | "Projects"

export const MAIN = document.createElement("main")
export const CONTENT: Record<ContentName,Array<HTMLContentLike> | HTMLContentLike> = {
    "Index": Default,
    "Projects": Projects
} as const

export type Content = typeof CONTENT

export function switchContent(name: ContentName)
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