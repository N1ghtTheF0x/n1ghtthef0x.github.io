import HTMLElement from "./element.js"

function __get_type__(type: ListHTMLElement.Type)
{
    if(type === "ordered")
        return "ol"
    if(type === "unordered")
        return "ul"
    throw new Error(`unknown type '${type}'`)
}

class ListHTMLElement extends HTMLElement
{
    public constructor(public readonly listType: ListHTMLElement.Type)
    {
        super(__get_type__(listType))
    }
    public addItem(...children: Array<any>)
    {
        const item = new HTMLElement("li",...children)
        this.append(item)
        return this
    }
}

namespace ListHTMLElement
{
    export type Type = "ordered" | "unordered"
}

export default ListHTMLElement