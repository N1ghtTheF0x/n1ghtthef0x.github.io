import { APP_DIV } from "../../utils"
import Header from "../../html/header"
import { seperator } from "../../html/utils"
import Navigation from "../../html/navigation"
import Footer from "../../html/footer"
import { MAIN } from "../../html/content"

function initDefaultPlatform()
{
    APP_DIV.append(
        Header(),
        seperator(),
        Navigation(),
        seperator(),
        MAIN,
        Footer()
    )
}

export default initDefaultPlatform