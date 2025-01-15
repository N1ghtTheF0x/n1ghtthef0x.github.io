export function createHeading(content: string,level: 1 | 2 | 3 | 5 | 6 = 1)
{
    const heading = document.createElement(`h${level}`)
    heading.innerText = content
    return heading
}