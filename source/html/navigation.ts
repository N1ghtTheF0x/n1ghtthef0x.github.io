import Table from "./table"

function Navigation()
{
    const nav = document.createElement("nav")

    const table = new Table

    nav.append(
        table.domElement
    )
    return nav
}

export default Navigation