import { createList } from "../list"
import { important, p } from "../utils"

export default [
    p(important("DISCLAIMER: this website is still work in progress!")),
    p(
        "Welcome to my personal page! Here you can find",
        createList(false,[
            ["projects that I've worked on"],
            ["secrets :O"]
        ]),
        "Use the navigation bar above to select a page"
    )
]