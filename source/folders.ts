import { resolve } from "node:path"

export const OUTPUT_FOLDERPATH = resolve(process.cwd(),"dist")
export const ASSETS_FOLDERPATH = resolve(import.meta.dirname,"assets")