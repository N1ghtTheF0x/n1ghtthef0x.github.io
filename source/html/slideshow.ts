import Table from "./table"
import { loadImage } from "./utils"
import "./slideshow.css"

const IMAGE_ITEM_CLASS = "slideshow-image-item"
const SLIDESHOW_CLASS = "slideshow"

function _load_slide_image_item(uri: string)
{
    const img = loadImage(uri)
    img.classList.add(IMAGE_ITEM_CLASS)
    return img
}

class SlideShow
{
    public get domElement() {return this._table.domElement}
    private readonly _cur_image: HTMLImageElement
    private readonly _table = new Table
    private readonly _images: ReadonlyArray<HTMLImageElement>
    public constructor(public readonly uris: ReadonlyArray<string>)
    {
        this.domElement.classList.add(SLIDESHOW_CLASS)
        this._cur_image = loadImage(this.uris[0])
        this._images = uris.map(_load_slide_image_item)
        this._table.addBodyRow(new Table.Cell(this._cur_image))
        .addBodyRow(...this._images.map((image) => new Table.Cell(image)))
        this._init_images()
    }
    private _init_images()
    {
        for(const image of this._images)
            image.addEventListener("click",() => this._cur_image.src = image.src)
    }
}

export default SlideShow