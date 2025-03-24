import { existsSync, mkdirSync, rmSync } from "node:fs"
import { OUTPUT_FOLDERPATH } from "../folders.js"
import HTMLRootElement from "./html/core/root.js"
import { resolve } from "node:path"
import { createFile } from "./utils/io.js"

class Builder
{
    private _docs: Record<string,HTMLRootElement> = {}
    public addDocument<D extends HTMLRootElement>(name: string,doc = new HTMLRootElement as D)
    {
        this._docs[name] = doc
        return doc
    }
    public clean()
    {
        if(existsSync(OUTPUT_FOLDERPATH))
            rmSync(OUTPUT_FOLDERPATH,{recursive: true})
        mkdirSync(OUTPUT_FOLDERPATH,{recursive: true})
    }
    public build()
    {
        for(const [name,doc] of Object.entries(this._docs))
        {
            const filename = `${name}.html`
            const filepath = resolve(OUTPUT_FOLDERPATH,filename)
            createFile(filepath,doc.render())
        }
    }
}

export default Builder