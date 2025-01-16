import { createHeading } from "./heading"
import { HTMLContentLike, IElement, resolveContent } from "./utils"

class Article implements IElement
{
    public readonly domElement = document.createElement("article")
    private readonly _title: HTMLHeadingElement
    public constructor(public readonly title: string,...description: Array<HTMLContentLike>)
    {
        this._title = createHeading(2,title)

        this.domElement.append(
            ...resolveContent([
                this._title,
                ...description
            ])
        )
    }
    public addSection(title: string,...content: Array<HTMLContentLike>)
    {
        const section = document.createElement("section")
        section.append(createHeading(3,title),...resolveContent(content))

        this.domElement.append(section)
        return this
    }
}

export default Article