import { ICloth } from "./cloth"

export interface IOutfit {
    id: number;
    name: string;
    clothes: ICloth[];
    rating: number;
    occasion: string[]; //Anlass
}

export interface INewOutfit {
    name: string;
    clothes: ICloth[];
    rating: string;
    occasion: string[]; //Anlass
}