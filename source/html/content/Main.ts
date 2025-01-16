import { createList } from "../list"
import { p } from "../utils"

export default [
    p("DISCLAIMER: this website is still work in progress!"),
    p(
        "Welcome to my personal page! Here you can find",
        createList(false,[
            ["my (personal) projects"],
            ["secrets :O"]
        ]),
        "Use the navigation bar above to select a page"
    )
]