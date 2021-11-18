import Color from 'color';

class Genre{
    constructor(
        readonly ID: number,
        readonly Name: string,
        readonly SimpleName: string,
        readonly NameKor: string,
        readonly SimpleNameKor: string,
        readonly Color: Color = Color.rgb(0, 0, 0)
    ){};
}

class SubGenre extends Genre
{
    readonly parentGenre: Genre;
    constructor(
        id: number, 
        name: string, 
        simpleName: string, 
        nameKor: string, 
        simpleNameKor: string, 
        color: Color = Color.rgb(0, 0, 0), 
        parentGenre: Genre
    ){
        super(id, name, simpleName, nameKor, simpleNameKor, color);
        this.parentGenre = parentGenre;
    }
}

export {Genre, SubGenre};