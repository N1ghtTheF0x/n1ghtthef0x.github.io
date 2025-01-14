export function createElementWithId<Type extends keyof HTMLElementTagNameMap>(type: Type,id: string)
{
    const element = document.createElement(type)
    element.id = id
    return element
}