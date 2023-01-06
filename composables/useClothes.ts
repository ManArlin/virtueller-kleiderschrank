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
    }

    //Returns the Cloth to the passed id
    function getClothById(id: number) {
        return clothes.value.find(cloth => cloth.id === id)
    }

    //Deletes the passed Cloth from the list
    function deleteCloth(cloth: ICloth) {
        const index = clothes.value.indexOf(cloth, 0)
        if (index > -1) {
            clothes.value.splice(index, 1)
        }
    }

    return {
       clothes: readonly(clothes), 
       addCloth, getClothById, deleteCloth
    }
}