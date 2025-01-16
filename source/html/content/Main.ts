import { createList } from "../list"
import { p } from "../utils"

export default [
    p("DISCLAIMER: this website is still work in progress!"),
    p(
        "Welcome to my personal page! Here you can find things about me like",
        createList(false,[
            ["Projects"]
        ]),
        "Use the navigation bar above to select a page"
    )
]