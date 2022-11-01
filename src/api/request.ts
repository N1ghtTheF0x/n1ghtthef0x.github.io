export class NRequest
{
    async request(endpoint: string,method: NRequest.Method,payload?: NRequest.PayloadOptions)
    {
        const url = payload?.urlsp ? `${endpoint}?${payload.urlsp.toString()}` : endpoint
        const response = await fetch(url,{
            body: payload?.form,
            method,
            headers: payload?.headers,
            credentials: "include"
        })
        return response
    }
    get(endpoint: string,payload?: NRequest.PayloadOptions)
    {
        return this.request(endpoint,"get",payload)
    }
    post(endpoint: string,payload?: NRequest.PayloadOptions)
    {
        return this.request(endpoint,"post",payload)
    }
    delete(endpoint: string,payload?: NRequest.PayloadOptions)
    {
        return this.request(endpoint,"delete",payload)
    }
}

export namespace NRequest
{
    export type Method = "get" | "post" | "delete"
    export interface PayloadOptions
    {
        urlsp?: URLSearchParams
        form?: FormData
        headers?: HeadersInit
    }
}