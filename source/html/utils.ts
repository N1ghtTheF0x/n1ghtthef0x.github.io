export const br = () => document.createElement("br")
export const seperator = () => document.createElement("hr")

export type HTMLContent = string | HTMLElement

export function loadImage(src: string)
{
    const img = new Image()
    img.src = src
    return img
}