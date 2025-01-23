import { AUTHOR, HIGHLIGHT_CLASS, loadImage, TITLE_POSTFIX } from "./utils"
import "./header.css"
import { createElementWithClass, createElementWithId } from "./element"

export const ICON_ID = "header-icon"
export const TITLE_ID = "header-title"
export const TITLE_CHAR_CLASS = "header-title-char"
export const TITLE_POSTFIX_ID = "header-title-postfix"

function _load_icon()
{
    const icon = loadImage("/favicon.ico","Icon of webpage")

    icon.id = ICON_ID
    icon.width = icon.height = 128
    icon.classList.add(HIGHLIGHT_CLASS)

    return icon
}

function _create_title()
{
    const title = createElementWithId("div",TITLE_ID)

    const author = AUTHOR.split("").map((char,index) =>
    {
        const span = createElementWithClass("div",TITLE_CHAR_CLASS,HIGHLIGHT_CLASS)
        span.style.animationDelay = `${index * 10}ms`
        span.innerText = char
        return span
    })
    const postfix = createElementWithId("div",TITLE_POSTFIX_ID)
    postfix.innerText = TITLE_POSTFIX

    title.append(...author,postfix)

    return title
}

function Header()
{
    const header = document.createElement("header")

    header.append(
        _load_icon(),
        _create_title()
    )
    return header
}

export default Header