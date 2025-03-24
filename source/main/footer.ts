import HTMLElement from "../builder/html/element.js"
import { p } from "../builder/html/utils.js"
import { AUTHOR } from "../config.js"

class MainFooter extends HTMLElement
{
    public constructor()
    {
        super("footer")
        this.append(p(`©Copyright ${new Date().getFullYear()} by ${AUTHOR}. All rights reversed.`))
    }
}

export default MainFooter