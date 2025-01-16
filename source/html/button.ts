export function createButton(name: string,click: () => void | Promise<void>)
{
    const button = document.createElement("button")
    button.innerText = name
    button.addEventListener("click",click)
    return button
}