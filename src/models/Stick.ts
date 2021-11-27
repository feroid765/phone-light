import {Color} from 'react-color';

class Stick{
    ID: number;
    Name: string;
    Color: Color;
    
    constructor(
        ID: number,
        Name: string,
        Color: Color,
    ){this.ID=ID;this.Name=Name;this.Color=Color;}
}

export default Stick;