import { createElementWithContent } from "./element"

export const TITLE = "N1ghtTheF0x's Page"

export const br = () => document.createElement("br")
export const seperator = () => document.createElement("hr")
export const p = (...content: Array<HTMLContent>) => createElementWithContent("p",...content)

export interface IElement
{
    readonly domElement: HTMLElement
}

export type HTMLContent = string | HTMLElement
export type HTMLContentLike = HTMLContent | IElement

export function resolveContent(content: Array<HTMLContentLike>): Array<HTMLContent>
{
    return content.map((element) =>
    {
        if(typeof element == "string" || element instanceof HTMLElement)
            return element
        return element.domElement
    })
}

export function loadImage(src: string,alt: string,width?: number,height?: number)
{
    const img = new Image()
    if(typeof width == "number")
        img.width = width
    if(typeof height == "number")
        img.height = height
    img.src = src
    img.alt = alt
    return img
}

export const HIGHLIGHT_CLASS = "highlight"