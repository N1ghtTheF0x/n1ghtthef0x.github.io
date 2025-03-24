import Builder from "./builder/index.js"

import MainDocument from "./main/index.js"
import NotFoundDocument from "./main/not_found/index.js"
import ProjectsDocument from "./main/projects/index.js"

const builder = new Builder

builder.addDocument("index",new MainDocument)
builder.addDocument("projects",new ProjectsDocument)
builder.addDocument("not_found",new NotFoundDocument)

builder.clean()
builder.build()