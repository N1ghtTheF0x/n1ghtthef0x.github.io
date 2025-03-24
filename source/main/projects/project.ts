import HTMLElement from "../../builder/html/element.js"
import HTMLImageElement from "../../builder/html/media/image.js"
import { heading, p } from "../../builder/html/utils.js"

class ProjectHTMLElement extends HTMLElement
{
    public static readonly CLASS_NAME = "project"
    public static readonly IMAGE_CLASS_NAME = "project-image"
    public constructor(title: string,description: Array<any>,image?: string,imageAlt?: string)
    {
        super("article")
        this.className = ProjectHTMLElement.CLASS_NAME
        this.append(heading(3,title))
        if(typeof image == "string")
            this.append(
                new HTMLImageElement(image,imageAlt)
                .setClassName(ProjectHTMLElement.IMAGE_CLASS_NAME)
            )
        this.append(p(...description))
    }
}

export default ProjectHTMLElement