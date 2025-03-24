import HTMLElement from "../builder/html/element.js"
import HTMLAnchorElement from "../builder/html/input/anchor.js"
import ListHTMLElement from "../builder/html/list.js"
import { heading, p } from "../builder/html/utils.js"

class MainContent extends HTMLElement
{
    public constructor()
    {
        super("main")
        this.append(
            heading(2,"Welcome to my home page"),
            p("Here you can find various things about me such as:"),
            new ListHTMLElement("unordered")
            .addItem(new HTMLAnchorElement("/projects.html","Projects")," that I've worked on"),
            p("You can use the navigation bar above to visit a specific page too")
        )
    }
}

export default MainContent