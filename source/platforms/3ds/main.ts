import { createElementWithId } from "../../html/element"
import "./main.css"
import { APP_DIV } from "../../utils"
import Header from "../../html/header"
import Navigation from "../../html/navigation"
import { seperator } from "../../html/utils"
import Footer from "../../html/footer"
import { MAIN } from "../../html/content"

export const is3DS = navigator.userAgent.indexOf("Nintendo 3DS") > -1

export const TOP_SCREEN_3DS = createElementWithId("div","top-3ds")
export const BOTTOM_SCREEN_3DS = createElementWithId("div","bottom-3ds")

function init3DSPlatform()
{
    // viewport shit
    const viewport = document.querySelector("meta[name=viewport]")
    viewport?.setAttribute("content","width=400, initial-scale=1")
    document.body.style.margin = "0px"
    APP_DIV.style.margin = "0px"
    // add bottom/top div
    APP_DIV.append(TOP_SCREEN_3DS,BOTTOM_SCREEN_3DS)

    TOP_SCREEN_3DS.append(
        Header(),
        Footer()
    )
    BOTTOM_SCREEN_3DS.append(
        Navigation(),
        seperator(),
        MAIN
    )
}

export default init3DSPlatform