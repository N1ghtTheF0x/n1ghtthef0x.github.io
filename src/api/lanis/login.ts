import { NRequest } from "../request"
import { LOGIN_URL, START_URL } from "./const"

export class NLanisLogin
{
    #request: NRequest = new NRequest()
    async request(payload: NLanisLogin.Payload,fix: boolean = true)
    {
        const urlsp = new URLSearchParams({
            "url": String(payload.url),
            "skin": String(payload.skin),
            "i": String(payload.i)
        })
        const form = new FormData()
        form.append("url",String(payload.url))
        form.append("timezone",String())
        form.append("skin",String(payload.skin))
        form.append("user2",String(payload.user2))
        form.append("user",String(payload.user))
        form.append("password",String(payload.password))
        form.append("stayconnected",String(payload.stayconnected))

        const response = await this.#request.post(LOGIN_URL,{
            urlsp,form
        })
        if(fix) 
        {
            const fixResponse = await this.#request.get(`${START_URL}/index.php?i=${payload.i}`)
            return fixResponse
        }
        else return response
    }
}

export namespace NLanisLogin
{
    export interface QueryPayload
    {
        url: string
        skin: string
        i: number
    }
    export interface FormPayload
    {
        url: string
        timezone: undefined
        skin: string
        user2: string
        user: string
        password: string
        stayconnected: 1 | 0
    }
    export type Payload = QueryPayload & FormPayload
}