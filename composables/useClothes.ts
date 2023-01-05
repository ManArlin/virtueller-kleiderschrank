import { Size, ICloth, INewCloth} from "~/types/cloth"

let id = 0;

export default function useClothes() {
    const clothes = useState<ICloth[]>('clothes', () => [
        { 
            id: id++, 
            name: "Pullover mit schwarzem Muster", 
            size: Size.L, 
            color: "weiß/schwarz",
            rating: "8", 
            categories: [ "Winter", "cozy" ]
        },
        { 
            id: id++, 
            name: "Jeanshose", 
            size: Size.XL, 
            color: "blau",
            rating: "6", 
            categories: [ "locker", "verwaschen" ]
        }
    ])


    //Creates a new Cloth Object with an unique id and adds it to the list
    function addCloth(newCloth: INewCloth) {
        const cloth: ICloth = {
            id: ++id,
            name: newCloth.name,
            size: newCloth.size,
            color: newCloth.color,
            rating: newCloth.rating,
            categories: newCloth.categories
        }
        clothes.value = [...clothes.value, cloth]
        console.log("clothes: ", clothes.value)
    }

    function getClothById(id: number) {
        return clothes.value.find(cloth => cloth.id === id);
    }

    return {
        clothes, addCloth, getClothById
    }
}