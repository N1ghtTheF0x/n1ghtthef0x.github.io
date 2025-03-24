import HTMLRootElement from "../builder/html/core/root.js"
import { AUTHOR, TITLE } from "../config.js"
import { setupHead } from "../utils/head.js"
import MainContent from "./content.js"
import MainFooter from "./footer.js"
import MainHeader from "./header.js"
import MainNav from "./nav.js"

class MainDocument extends HTMLRootElement
{
    public constructor()
    {
        super()
        setupHead(this.head,`Personal website of ${AUTHOR}`,TITLE)
        this.body
        .append(new MainHeader,new MainNav,new MainContent,new MainFooter)
    }
}

export default MainDocument