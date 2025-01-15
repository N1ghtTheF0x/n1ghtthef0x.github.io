import { APP_DIV } from "./utils"
import "./main.css"
import { init3DSPlatform } from "./platforms/3ds/main"
import Header from "./html/header"
import SlideShow from "./html/slideshow"

init3DSPlatform()

const slideshow = new SlideShow([
    "https://github.com/ThemModdingHerds/velvet-beautifier/raw/main/assets/screenshots/gui-empty.png?raw=true",
    "https://github.com/ThemModdingHerds/velvet-beautifier/blob/main/assets/screenshots/gui-create-mod.png?raw=true",
    "https://github.com/ThemModdingHerds/velvet-beautifier/blob/main/assets/screenshots/gui-install-text.png?raw=true"
])

APP_DIV.append(
    Header(),
    slideshow.domElement
)