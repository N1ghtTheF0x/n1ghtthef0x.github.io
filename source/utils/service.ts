export type Service = "discord" | "twitter"

export function getService(): Service | null
{
    return new URLSearchParams(location.search).get("service") as Service
}