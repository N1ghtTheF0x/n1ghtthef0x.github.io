(function()
{
    const rndRange = (/** @type {number} */ min,/** @type {number} */ max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
    const randomClassName = "random"
    setInterval(function()
    {
        const elements = document.getElementsByClassName(randomClassName)
        for(let i = 0;i < elements.length;i++)
        {
            const element = elements.item(i)
            if (!(element instanceof HTMLElement)) continue
            const min = parseInt(element.dataset.min ?? "0")
            const max = parseInt(element.dataset.max ?? "1")
            const count = parseInt(element.dataset.count ?? "1")
            /** @type {Array<string>} */
            const values = []
            for(let c = 0;c < count;c++)
            {
                const value = rndRange(Math.max(0, min),Math.min(max,36)).toString(36).toUpperCase()
                values.push(value)
            }
            element.innerHTML = values.join("")
        }
    },1)
})()