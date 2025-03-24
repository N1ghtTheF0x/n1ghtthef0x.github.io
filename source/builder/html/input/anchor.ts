import HTMLElement from "../element.js"

class HTMLAnchorElement extends HTMLElement
{
    public get href(){return this.properties["href"] as string}
    public set href(v){this.properties["href"] = v}
    public constructor(href: string,...children: Array<any>)
    {
        super("a",...children)
        this.href = href
    }
}

export default HTMLAnchorElement