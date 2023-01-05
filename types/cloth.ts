export enum Size {
    XS ="XS",
    S ="S",
    M ="M",
    L ="L",
    XL ="XL",
    XXL ="XXL"
}

export interface ICloth {
    name: string;
    size: Size;
    color: string;
    rating: number;
    categories: string[];
}
