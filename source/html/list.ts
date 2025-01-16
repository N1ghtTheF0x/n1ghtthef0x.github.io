import { createElementWithContent } from "./element"
import { HTMLContentLike } from "./utils"

export function createList(ordered: boolean,items: Array<Array<HTMLContentLike>>)
{
    const list = document.createElement(ordered ? "ol" : "ul")
    const listItems = items.map((item) => createElementWithContent("li",...item))
    list.append(...listItems)
    return list
}