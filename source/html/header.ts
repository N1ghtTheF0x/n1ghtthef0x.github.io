import { HIGHLIGHT_CLASS, loadImage } from "./utils"
import "./header.css"
import { createElementWithClass, createElementWithId } from "./element"

export const ICON_ID = "header-icon"
export const TITLE_ID = "header-title"
export const TITLE_CHAR_CLASS = "header-title-char"

function _load_icon()
{
    const icon = loadImage("/favicon.ico","Icon")

    icon.id = ICON_ID
    icon.width = icon.height = 128
    icon.classList.add(HIGHLIGHT_CLASS)

    return icon
}

function _create_title()
{
    const title = createElementWithId("div",TITLE_ID)

    const chars = document.title.split("").map((char) =>
    {
        const span = createElementWithClass("span",TITLE_CHAR_CLASS,HIGHLIGHT_CLASS)
        span.innerText = char
        return span
    })

    title.append(...chars)

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