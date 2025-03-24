import { existsSync, readFileSync } from "node:fs"
import { hash } from "../utils/hash.js"
import { extname, resolve } from "node:path"
import { OUTPUT_FOLDERPATH } from "../../folders.js"
import { createFile } from "../utils/io.js"

class HTMLElement
{
    public children: Array<HTMLElement.Content> = []
    public properties: HTMLElement.Properties = {}
    public get id(){return this.properties["id"] as string}
    public set id(v){this.properties["id"] = v}
    public get className(){return this.properties["class"] as string}
    public set className(v){this.properties["class"] = v}
    public get content(){return this.renderChildren()}
    public set content(v){this.children = [v]}
    public constructor(public readonly type: string,...children: Array<any>)
    {
        this.append(...children)
    }
    public append(...items: Array<any>)
    {
        for(const item of items)
        {
            if(item instanceof HTMLElement)
            {
                this.children.push(item)
                continue
            }
            this.children.push(String(item))
        }
        return this
    }
    public setClassName(className: string)
    {
        this.className = className
        return this
    }
    public setId(id: string)
    {
        this.id = id
        return this
    }
    public setData(key: string,value: any)
    {
        this.properties[`data-${key}`] = value
        return this
    }
    public renderProperties()
    {
        return Object.entries(this.properties)
        .map(([key,value]) => `${key}="${value}"`)
        .join(" ")
    }
    private _move_files()
    {
        for(const [key,value] of Object.entries(this.properties))
        {
            if(existsSync(value))
            {
                const content = readFileSync(value)
                const filename = `assets/${hash("sha256",content)}${extname(value)}`
                this.properties[key] = "/" + filename
                const filepath = resolve(OUTPUT_FOLDERPATH,filename)
                createFile(filepath,content)
            }
        }
    }
    public renderChildren()
    {
        let content = ""
        for(const child of this.children)
        {
            if(child instanceof HTMLElement)
            {
                child._move_files()
                content += child.render()
                continue
            }
            content += child
        }
        return content
    }
    public render()
    {
        const tag = `${this.type} ${this.renderProperties()}`.trim()
        return `<${tag}>${this.renderChildren()}</${this.type}>`
    }
}

namespace HTMLElement
{
    export type Properties = Record<string,any>
    export type Content = HTMLElement | string
}

export default HTMLElement