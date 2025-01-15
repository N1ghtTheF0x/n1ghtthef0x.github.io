export function createAnchor(href: string,content: string)
{
    const anchor = document.createElement("a")

    anchor.href = href
    anchor.innerText = content

    return anchor
}