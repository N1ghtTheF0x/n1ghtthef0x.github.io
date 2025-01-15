import { createAnchor } from "./anchor"
import Table from "./table"
import "./navigation.css"

const entries: Record<string,string> = {
    
}

export const NAV_ITEM_CLASS = "nav-item"

function Navigation()
{
    const nav = document.createElement("nav")

    const table = new Table

    for(const [name,hash] of Object.entries(entries))
    {
        const anchor = createAnchor(`#${hash}`,name)
        anchor.classList.add(NAV_ITEM_CLASS)
        table.addBodyRow(new Table.Cell(anchor))
    }

    nav.append(
        table.domElement
    )
    return nav
}

export default Navigation