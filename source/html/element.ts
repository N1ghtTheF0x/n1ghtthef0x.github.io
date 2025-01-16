import { HTMLContentLike, resolveContent } from "./utils"

export function createElementWithId<Type extends keyof HTMLElementTagNameMap>(type: Type,id: string)
{
    const element = document.createElement(type)
    element.id = id
    return element
}

export function createElementWithClass<Type extends keyof HTMLElementTagNameMap>(type: Type,...tokens: Array<string>)
{
    const element = document.createElement(type)
    element.classList.add(...tokens)
    return element
}

export function createElementWithContent<Type extends keyof HTMLElementTagNameMap>(type: Type,...items: Array<HTMLContentLike>)
{
    const element = document.createElement(type)
    element.append(...resolveContent(items))
    return element
}