interface DataIMC {
    rank: number;
    points: number;
    weight: number;
    height: number;
    age: number;
    last: number[];
}

interface DataCountry {
    picture: string;
    code: string;
}

type Sex = "M" | "F";

export interface DataElement {
    id: number;
    firstname: string;
    lastname: string;
    shortname: string;
    sex: Sex;
    country: DataCountry;
    picture: string;
    data: DataIMC;
}

export default interface DataInterface {
    players: DataElement[];
}
