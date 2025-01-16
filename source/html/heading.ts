import { HTMLContentLike, resolveContent } from "./utils"

export function createHeading(level: 1 | 2 | 3 | 5 | 6 = 1,...items: Array<HTMLContentLike>)
{
    const heading = document.createElement(`h${level}`)
    heading.append(...resolveContent(items))
    return heading
}