import { EncodingOption, mkdirSync, writeFileSync } from "node:fs"
import { dirname } from "node:path"

export function createFile(filepath: string,content: NodeJS.ArrayBufferView | string,encoding?: EncodingOption)
{
    const folderpath = dirname(filepath)
    mkdirSync(folderpath,{recursive: true})
    writeFileSync(filepath,content,encoding)
}