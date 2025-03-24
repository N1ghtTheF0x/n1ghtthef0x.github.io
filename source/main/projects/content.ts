import { PROJECTS } from "../../assets.js"
import HTMLElement from "../../builder/html/element.js"
import HTMLAnchorElement from "../../builder/html/input/anchor.js"
import { heading, p } from "../../builder/html/utils.js"
import ProjectHTMLElement from "./project.js"

class ProjectContent extends HTMLElement
{
    public constructor()
    {
        super("main")
        this.append(
            heading(2,"Projects"),
            p("Here are projects that I worked on")
        )
        .addProject(
            "The Genomenal Adventures of Dr. W (2020)",
            [
                new HTMLAnchorElement("https://github.com/N1ghtTheF0x/GENOMENAL-ADVENTURES-OF-DR.-W","The Genomenal Adventures of Dr. W"),
                " is a small game that I created for ",
                new HTMLAnchorElement("https://igem.org/","International Genetically Engineered Machine (iGEM)"),
                ". I was contacted by the TU Darmstadt team to create a game for their B-TOX project. ",
                new HTMLAnchorElement("https://2020.igem.org/Team:TU_Darmstadt/Education#Minigame","You can find more information about the game here")
            ],
            PROJECTS.IGEM_MINIGAME_PNG,
            "Title screen of the minigame The Genomenal Adventures of Dr. W"
        )
        .addProject(
            "Velvet Beautifier (2023 - present)",
            [
                new HTMLAnchorElement("https://github.com/ThemModdingHerds/velvet-beautifier","Velvet Beautifier"),
                " is a modding tool/loader for the game ",
                new HTMLAnchorElement("https://store.steampowered.com/app/574980/Thems_Fightin_Herds/","Them's Fightin' Herds"),
                ". It started as learning on how mod loaders work to being one. You can donwload it from ",
                new HTMLAnchorElement("https://github.com/ThemModdingHerds/velvet-beautifier/releases/latest","GitHub"),
                " or ",
                new HTMLAnchorElement("https://gamebanana.com/tools/15674","GameBanana")
            ]
        )
    }
    public addProject(title: string,description: Array<any>,image?: string,imageAlt?: string)
    {
        return this.append(new ProjectHTMLElement(title,description,image,imageAlt))
    }
}

export default ProjectContent