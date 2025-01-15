import "./footer.css"

function Footer()
{
    const footer = document.createElement("footer")
    footer.innerText = `last updated: ${__LAST_UPDATED}`
    console.log()
    return footer
}

export default Footer