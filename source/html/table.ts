import { HTMLContent } from "./utils"

class Table
{
    public readonly domElement = document.createElement("table")
    private readonly _head = document.createElement("thead")
    private readonly _body = document.createElement("tbody")
    public constructor(init: Table.Init = {})
    {
        this.domElement.append(
            this._head,
            this._body
        )
        if(Array.isArray(init.header))
            this.addHeaderRow(...init.header)
        if(Array.isArray(init.body))
            for(const row of init.body)
            for(const items of row)
                this.addBodyRow(new Table.Cell(...items))
    }
    public appendHeader(...headers: Array<Table.Header>)
    {
        this._head.append(...headers.map((header) => header.domElement))
        return this
    }
    public appendBody(...rows: Array<Table.Row>)
    {
        this._body.append(...rows.map((row) => row.domElement))
        return this
    }
    public addHeaderRow(...items: Array<HTMLContent>)
    {
        return this.appendHeader(new Table.Header(...items))
    }
    public addBodyRow(...cells: Array<Table.Cell>)
    {
        return this.appendBody(new Table.Row(...cells))
    }
}

namespace Table
{
    export interface Init
    {
        header?: Array<HTMLContent>
        body?: Array<Array<Array<HTMLContent>>>
    }
    export class Header
    {
        public readonly domElement = document.createElement("th")
        public constructor(...items: Array<HTMLContent>)
        {
            this.append(...items)
        }
        public append(...items: Array<HTMLContent>)
        {
            this.domElement.append(...items)
            return this
        }
    }
    export class Row
    {
        public readonly domElement = document.createElement("tr")
        public constructor(...cells: Array<Cell>)
        {
            this.append(...cells)
        }
        public append(...cells: Array<Cell>)
        {
            this.domElement.append(...cells.map((cell) => cell.domElement))
            return this
        }
        public addCell(...items: Array<HTMLContent>)
        {
            return this.append(new Cell(...items))
        }
    }
    export class Cell
    {
        public readonly domElement = document.createElement("td")
        public constructor(...items: Array<HTMLContent>)
        {
            this.append(...items)
        }
        public append(...items: Array<HTMLContent>)
        {
            this.domElement.append(...items)
            return this
        }
    }
}

export default Table