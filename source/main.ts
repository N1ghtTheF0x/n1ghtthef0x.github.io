import "./styles"

import { initBiscuits } from "./html/biscuits"
import { initContent } from "./html/content"
import { initInput } from "./input"
import initPlatform from "./platforms/main"

initPlatform()
initContent()
initBiscuits()
initInput()

if(import.meta.env.PROD)
console.warn("Listen dude, you won't find anything here")