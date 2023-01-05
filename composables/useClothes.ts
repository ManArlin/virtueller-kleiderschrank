import { ICloth, INewCloth} from "~/types/cloth"

let id = 0;

export default function useClothes() {
    const clothes = useState<ICloth[]>('clothes', () => [])

    function addClothes(newCloth: INewCloth) {
        //Create new Cloth Object with unique id and add to the list
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

    return {
        clothes, addClothes
    }
}