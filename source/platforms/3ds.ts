import { createElementWithId } from "../html/element"
import "../styles/3ds.css"
import { APP_DIV } from "../utils"

export const is3DS = navigator.userAgent.indexOf("Nintendo 3DS") > -1

export const TOP_SCREEN_3DS = createElementWithId("div","top-3ds")
export const BOTTOM_SCREEN_3DS = createElementWithId("div","bottom-3ds")

function _init_3ds()
{
    const viewport = document.querySelector("meta[name=viewport]")
    viewport?.setAttribute("content","width=400, initial-scale=1")
    document.body.style.margin = "0px"
    APP_DIV.style.margin = "0px"
    APP_DIV.append(TOP_SCREEN_3DS,BOTTOM_SCREEN_3DS)
}

export function init3DSPlatform()
{
    if(!is3DS) return
    _init_3ds()
}