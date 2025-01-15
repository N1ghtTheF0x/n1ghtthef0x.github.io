import init3DSPlatform, { is3DS } from "./3ds/main"
import initDefaultPlatform from "./default/main"

function initPlatform()
{
    if(is3DS)
        return init3DSPlatform()
    return initDefaultPlatform()
}

export default initPlatform