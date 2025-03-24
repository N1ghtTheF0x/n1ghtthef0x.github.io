import { PROJECTS_CSS } from "../../assets.js"
import HTMLRootElement from "../../builder/html/core/root.js"
import { AUTHOR, TITLE } from "../../config.js"
import { setupHead } from "../../utils/head.js"
import MainFooter from "../footer.js"
import MainHeader from "../header.js"
import MainNav from "../nav.js"
import ProjectContent from "./content.js"

class ProjectsDocument extends HTMLRootElement
{
    public constructor()
    {
        super()
        setupHead(this.head,`Projects of ${AUTHOR}`,TITLE)
        this.head.addLink("stylesheet",PROJECTS_CSS)
        this.body
        .append(new MainHeader,new MainNav,new ProjectContent,new MainFooter)
    }
}

export default ProjectsDocument