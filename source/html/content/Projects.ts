import { createAnchor } from "../anchor"
import Article from "../article"
import { p } from "../utils"

export default new Article("Projects",p("Here are projects that I created/finished"))
.addSection(
    "The Genomenal Adventures of Dr. W (2020)",
    p(
        createAnchor("https://github.com/N1ghtTheF0x/GENOMENAL-ADVENTURES-OF-DR.-W","The Genomenal Adventures of Dr. W"),
        " is a small game that I created for ",
        createAnchor("https://igem.org/","International Genetically Engineered Machine (iGEM)"),
        " when TU Darmstadt team contacted to create a game for their B-TOX project"
    )
)
.addSection(
    "Velvet Beautifier (2023 - present)",
    p(
        createAnchor("https://github.com/ThemModdingHerds/velvet-beautifier","Velvet Beautifier"),
        " is a modding tool/loader for the game ",
        createAnchor("https://store.steampowered.com/app/574980/Thems_Fightin_Herds/","Them's Fightin' Herds")
    )
)