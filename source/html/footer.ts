import { createElementWithId } from "./element"
import "./footer.css"

export const FOOTER_ID = "end-of-page"

function Footer()
{
    const footer = createElementWithId("footer",FOOTER_ID)
    footer.innerText = `last updated: ${__LAST_UPDATED}`
    return footer
}

export default Footer