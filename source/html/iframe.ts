export function iframe(src: string)
{
    const iframe = document.createElement("iframe")
    iframe.src = src
    return iframe
}