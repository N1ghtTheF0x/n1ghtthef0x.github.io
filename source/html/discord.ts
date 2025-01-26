import { iframe } from "./iframe"

// <iframe src="https://discord.com/widget?id=1332363290180976731&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

const WIDGET_URL = "https://discord.com/widget?id=1332363290180976731&theme=dark"

export function DiscordServerWidget()
{
    const widget = iframe(WIDGET_URL)
    widget.width = "350"
    widget.height = "500"
    widget.setAttribute("allowtransparency","true")
    widget.frameBorder = "0"
    widget.setAttribute("sandbox","allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts")
    return widget
}