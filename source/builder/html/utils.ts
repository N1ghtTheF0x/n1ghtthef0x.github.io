import HTMLElement from "./element.js"

export const br = () => new HTMLElement("br")
export const p = (...args: Array<any>) => new HTMLElement("p",...args)
export function image(src: string,alt: string)
{
    const image = new HTMLElement("img")
    image.properties = {
        src,alt
    }
    return image
}
export const heading = (level: 1 | 2 | 3 | 4 | 5 | 6,...args: Array<any>) => new HTMLElement(`h${level}`,...args)