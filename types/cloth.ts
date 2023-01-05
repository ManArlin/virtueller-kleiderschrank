export enum Size {
    XS ="XS",
    S ="S",
    M ="M",
    L ="L",
    XL ="XL",
    XXL ="XXL"
}

export interface ICloth {
    id: number;
    name: string;
    size: Size;
    color: string;
    rating: number;
    categories: string[];
}

export interface INewCloth {
    name: string;
    size: Size;
    color: string;
    rating: string;
    categories: string[];
}

