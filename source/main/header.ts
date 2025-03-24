import HTMLElement from "../builder/html/element.js"
import { heading } from "../builder/html/utils.js"
import { TITLE } from "../config.js"

class MainHeader extends HTMLElement
{
    public constructor()
    {
        super("header")
        this.append(heading(1,TITLE))
    }
}

export default MainHeader