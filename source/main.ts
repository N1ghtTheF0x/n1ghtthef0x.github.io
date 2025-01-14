import { APP_DIV } from "./utils"
import "./styles/main.css"
import { init3DSPlatform } from "./platforms/3ds"

APP_DIV.innerHTML = "Loading..."

init3DSPlatform()

APP_DIV.innerHTML = "Works in progress..."