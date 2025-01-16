import { createElementWithId } from "./element"
import "./biscuits.css"
import { createHeading } from "./heading"
import { HIGHLIGHT_CLASS, p } from "./utils"
import { createButton } from "./button"
import { APP_DIV } from "../utils"

export const BISCUITS_ID = "biscuits"
export const BISCUITS_ICON_ID = "biscuits-icon"
export const BISCUITS_ACCEPT_ID = "biscuits-accept"

const key = "biscuits"
const value = "yes, of course the lad has biscuits, not cookies"

export function hasBiscuits()
{
    return document.cookie.split("; ")
    .find((row) => row.startsWith(key + "="))
    ?.split("=")[1] === value
}

function _create_biscuit_icon()
{
    const icon = createElementWithId("span",BISCUITS_ICON_ID)
    icon.innerText = "🍪"
    icon.classList.add(HIGHLIGHT_CLASS)
    // TODO: add cartoon chomp sound effect when clicked
    return icon
}

export function createBiscuitsBanner()
{
    const banner = createElementWithId("div",BISCUITS_ID)

    const accept = createButton("Accept",() =>
    {
        document.cookie = `${key}=${value}`
        banner.remove()
    })
    accept.classList.add(HIGHLIGHT_CLASS)
    accept.id = BISCUITS_ACCEPT_ID

    banner.append(
        createHeading(2,"Biscuits, Anyone? ",_create_biscuit_icon()),
        p("Right, listen up, love! This website uses biscuits—none of that cookie nonsense, proper British biscuits, to keep things running spiffingly. By staying here and having a nosey around, you’re agreeing to our use of biscuits. Go on then, give it a click and carry on!"),
        accept
    )

    return banner
}

export function initBiscuits()
{
    if(hasBiscuits()) return
    APP_DIV.append(createBiscuitsBanner())
}