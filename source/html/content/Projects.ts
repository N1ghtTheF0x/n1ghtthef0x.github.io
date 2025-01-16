import { createAnchor } from "../anchor"
import Article from "../article"
import { loadImage, p } from "../utils"
import TGAoDW_Title from "./Projects/TGAofDW-title.png"
import VB_GUI from "./Projects/VB-GUI.png"

export default new Article("Projects",p("Here are projects that I created/finished"))
.addSection(
    "The Genomenal Adventures of Dr. W (2020)",
    loadImage(TGAoDW_Title,"Title Screen of \"The Genomenal Adventures of Dr. W\"",undefined,200),
    p(
        createAnchor("https://github.com/N1ghtTheF0x/GENOMENAL-ADVENTURES-OF-DR.-W","The Genomenal Adventures of Dr. W"),
        " is a small game that I created for ",
        createAnchor("https://igem.org/","International Genetically Engineered Machine (iGEM)"),
        " when I was contacted by TU Darmstadt team to create a game for their B-TOX project"
    )
)
.addSection(
    "Velvet Beautifier (2023 - present)",
    loadImage(VB_GUI,"GUI of Velvet Beautifier",300),
    p(
        createAnchor("https://github.com/ThemModdingHerds/velvet-beautifier","Velvet Beautifier"),
        " is a modding tool/loader for the game ",
        createAnchor("https://store.steampowered.com/app/574980/Thems_Fightin_Herds/","Them's Fightin' Herds")
    )
)