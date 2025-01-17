import { createElementWithId } from "./element"
import "./footer.css"
import Socials from "./Socials"

export const FOOTER_ID = "end-of-page"

function Footer()
{
    const footer = createElementWithId("footer",FOOTER_ID)
    const lastUpdated = `last updated: ${__LAST_UPDATED}`
    footer.append(
        Socials(),
        lastUpdated
    )
    return footer
}

export default Footer