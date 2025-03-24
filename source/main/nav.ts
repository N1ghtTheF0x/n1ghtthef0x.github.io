import HTMLElement from "../builder/html/element.js"
import HTMLAnchorElement from "../builder/html/input/anchor.js"
import HTMLTableElement from "../builder/html/table.js"

export const MAIN_NAV_ITEMS_CLASS_NAME = "nav-items"

class MainNav extends HTMLElement
{
    public readonly items = new HTMLTableElement()
    public constructor()
    {
        super("nav")
        this.append(this.items)
        this.items.addBody().addRow()
        this._add_link("Home","/index.html")
        this._add_link("Projects","/projects.html")
        
    }
    private _add_link(name: string,href: string)
    {
        const a = new HTMLAnchorElement(href,name)
        a.className = MAIN_NAV_ITEMS_CLASS_NAME
        this.items.children[0].children[0].addCell(a)
        return this
    }
}

export default MainNav