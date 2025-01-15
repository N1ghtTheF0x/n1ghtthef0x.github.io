import { APP_DIV } from "../../utils"
import Header from "../../html/header"
import Content from "../../html/content"
import { seperator } from "../../html/utils"
import Navigation from "../../html/navigation"
import Footer from "../../html/footer"

function initDefaultPlatform()
{
    APP_DIV.append(
        Header(),
        seperator(),
        Navigation(),
        seperator(),
        Content(),
        Footer()
    )
}

export default initDefaultPlatform