const initBrowser = () =>
{
    window.removeEventListener("load",initBrowser)
}

window.addEventListener("load",initBrowser)