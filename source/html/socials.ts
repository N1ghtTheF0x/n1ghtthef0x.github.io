import { createAnchor } from "./anchor"
import { createElementWithId } from "./element"
import { loadImage } from "./utils"

export const SOCIALS_ID = "socials"

const socials = {
    "GitHub": ["/github-logo.png","https://github.com/N1ghtTheF0x"],
    "Twitter": ["/twitter-logo.png","https://x.com/n1ghtthef0x"]
} as const

function _create_social(img: string,name: string,href: string)
{
    const logo = loadImage(img,`Logo of ${name}`,32,32)

    return createAnchor(href,logo)
}

function Socials()
{
    const div = createElementWithId("div",SOCIALS_ID)

    div.append(
        ...Object.entries(socials)
        .map(([name,[img,url]]) => _create_social(img,name,url))
    )

    return div
}

export default Socials