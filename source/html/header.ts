import { createHeading } from "./heading"
import { loadImage } from "./utils"
import "./header.css"

function _load_icon()
{
    const icon = loadImage("/favicon.ico")

    icon.id = "header-icon"

    return icon
}

function Header()
{
    const header = document.createElement("header")

    const title = createHeading("")
    title.append(_load_icon(),document.title)

    header.append(
        title
    )
    return header
}

export default Header