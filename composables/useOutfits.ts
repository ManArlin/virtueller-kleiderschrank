import { INewOutfit, IOutfit } from "~/types/outfit"

let id = 0;

export default function useOutfits() {
    const outfits = useState<IOutfit[]>('outfits', () => [])


    //Creates a new Outfit Object with an unique id and adds it to the list
    function addOutfit(newOutfit: INewOutfit) {
        const outfit: IOutfit = {
            id: ++id,
            name: newOutfit.name,
            clothes: newOutfit.clothes,
            rating: newOutfit.rating,
            occasion: newOutfit.occasion
        }
        outfits.value = [...outfits.value, outfit]
        console.log("Outfits: ", outfits.value)
    }

    function getOutfitById(id: number) {
        return outfits.value.find(outfit => outfit.id === id);
    }

    return {
        outfits, addOutfit, getOutfitById
    }
}