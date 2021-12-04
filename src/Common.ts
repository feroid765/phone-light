function validateHexColor(colorStr: string): Boolean{
    const ALLOW_CHARS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];

    if(colorStr.length != 7) return false;
    if(colorStr[0] != '#') return false;

    for(let i=1; i<7; i++){
        if(!ALLOW_CHARS.includes(colorStr.charAt(i).toUpperCase()))
            return false;
    }
    return true;
}

export {validateHexColor};