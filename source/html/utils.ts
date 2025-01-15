export const br = () => document.createElement("br")
export const seperator = () => document.createElement("hr")

export type HTMLContent = string | HTMLElement

export function loadImage(src: string)
{
    const img = new Image()
    img.src = src
    return img
}

export function loadImageAsync(src: string)
{
    return new Promise<HTMLImageElement>((resolve,reject) =>
    {
        const img = new Image
        img.src = src
        img.onload = () => resolve(img)
        img.onerror = () => reject()
    })
}