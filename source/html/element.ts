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

export function createElementWithContent<Type extends keyof HTMLElementTagNameMap>(type: Type,content: string)
{
    const element = document.createElement(type)
    element.innerText = content
    return element
}