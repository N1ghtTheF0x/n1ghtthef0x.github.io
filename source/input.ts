import { ICON_ID } from "./html/header"

const konamiCode = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"] as const
let konamiCodeIndex = 0

export const KONAMI_CODE_EVENT_NAME = "konami-code"

export function isKonamiCode()
{
    return konamiCodeIndex == konamiCode.length
}

function _on_konami_code()
{
    window.dispatchEvent(new Event(KONAMI_CODE_EVENT_NAME))
    const icon = document.getElementById(ICON_ID)!
    icon.style.animation = "spin 5s linear infinite"
    document.body.style.filter = "invert(100%)"
    document.body.style.backgroundColor = "white"
}

export function initInput()
{
    window.addEventListener("keydown",(ev) =>
    {
        const keycode = ev.code
        const code = konamiCode[konamiCodeIndex]
        konamiCodeIndex = keycode === code ? konamiCodeIndex + 1 : 0
        if(isKonamiCode())
            _on_konami_code()
    })
}