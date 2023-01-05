import { ICloth } from "~/types/cloth"

export default function useClothes() {
    const clothes = useState<ICloth[]>('clothes', () => [])

    function addClothes(newCloth: ICloth) {
        clothes.value = [...clothes.value, newCloth]
        console.log("clothes: ", clothes.value)
    }

    return {
        clothes, addClothes
    }
}