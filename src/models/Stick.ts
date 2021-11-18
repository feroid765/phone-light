import color from 'color';
import { Genre } from './Genre';

class Stick{
    constructor(
        readonly ID: number,
        readonly Genre: Genre,
        readonly Name: string,
        readonly NameKor: string,
        readonly Color: color
    ){}
}

export default Stick;