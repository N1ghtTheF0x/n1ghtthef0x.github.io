import { createElementWithContent, createElementWithId } from "./element"
import Navigation from "./navigation"
import { seperator } from "./utils"

export const ID = "header"

function Header()
{
    const header = createElementWithId("header",ID)

    const title = createElementWithContent("h1",document.title)

    header.append(
        title,
        seperator(),
        Navigation()
    )
    return header
}

export default Header