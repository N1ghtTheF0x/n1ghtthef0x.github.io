import { HTMLContentLike, resolveContent } from "./utils"

export function createAnchor(href: string,...items: Array<HTMLContentLike>)
{
    const anchor = document.createElement("a")

    anchor.href = href
    anchor.append(...resolveContent(items))

    return anchor
}