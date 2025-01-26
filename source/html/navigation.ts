import Table from "./table"
import "./navigation.css"
import { createButton } from "./button"
import { HIGHLIGHT_CLASS, resolveContent, seperator } from "./utils"
import { AVAILABLE_CONTENT, initContent } from "./content"

export const NAV_ITEM_CLASS = "nav-item"

function Navigation()
{
    const nav = document.createElement("nav")

    const table = new Table

    const buttons = Object.keys(AVAILABLE_CONTENT)
    .map((name) =>
    {
        const button = createButton(name,() =>
        {
            location.hash = name
            initContent()
        })
        button.classList.add(NAV_ITEM_CLASS,HIGHLIGHT_CLASS)
        return button
    })
    const cell = new Table.Cell(...buttons)
    table.addBodyRow(cell)

    nav.append(...resolveContent([
        seperator(),
        table,
        seperator()
    ]))
    return nav
}

export default Navigation