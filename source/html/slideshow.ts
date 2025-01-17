import Table from "./table"
import { HIGHLIGHT_CLASS, IElement, loadImage, resolveContent } from "./utils"
import "./slideshow.css"
import { createElementWithClass } from "./element"

const IMAGE_ITEM_CLASS = "slideshow-image-item"
const SLIDESHOW_CLASS = "slideshow"

function _load_slide_image_item(uri: string)
{
    const img = loadImage(uri,"Image in slideshow")
    img.classList.add(IMAGE_ITEM_CLASS,HIGHLIGHT_CLASS)
    return img
}

class SlideShow implements IElement
{
    public readonly domElement = createElementWithClass("div",SLIDESHOW_CLASS)
    private readonly _cur_image: HTMLImageElement
    private readonly _table = new Table
    private readonly _images: ReadonlyArray<HTMLImageElement>
    public constructor(public readonly uris: ReadonlyArray<string>)
    {
        this._cur_image = loadImage(this.uris[0],"Current image in slideshow")
        this._images = uris.map(_load_slide_image_item)
        this._table.addBodyRow(new Table.Cell(this._cur_image))
        .addBodyRow(...this._images.map((image) => new Table.Cell(image)))
        this._init_images()

        this.domElement.append(...resolveContent([
            this._cur_image,
            this._table
        ]))
    }
    private _init_images()
    {
        for(const image of this._images)
            image.addEventListener("click",() => this._cur_image.src = image.src)
    }
}

export default SlideShow