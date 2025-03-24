import HTMLElement from "../element.js"
import HTMLBodyElement from "./body.js"
import HTMLHeadElement from "./head.js"

class HTMLRootElement extends HTMLElement
{
    public readonly head = new HTMLHeadElement()
    public readonly body = new HTMLBodyElement()
    public constructor(lang: string = "en")
    {
        super("html")
        this.properties["lang"] = lang
        this.append(this.head,this.body)
    }
    public override render(): string
    {
        return "<!DOCTYPE html>" + super.render()
    }
}

export default HTMLRootElement