import HTMLRootElement from "../../builder/html/core/root.js"
import HTMLElement from "../../builder/html/element.js"
import { heading } from "../../builder/html/utils.js"
import { setupHead } from "../../utils/head.js"
import MainFooter from "../footer.js"
import MainHeader from "../header.js"
import MainNav from "../nav.js"

class NotFoundDocument extends HTMLRootElement
{
    public constructor()
    {
        super()
        setupHead(this.head,"Not Found","404: Not Found")
        this.append(new MainHeader,new MainNav,new HTMLElement("main",heading(2,"nothing was found here")),new MainFooter)
    }
}

export default NotFoundDocument