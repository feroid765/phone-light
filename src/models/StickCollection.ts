import Stick from './Stick';

class StickCollection{
    constructor(
        readonly ID: number,
        readonly Name: string,
        readonly StickList: [Stick]
    ){};
}

export default StickCollection;