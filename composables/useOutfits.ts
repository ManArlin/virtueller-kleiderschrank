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

    //Returns the Outfit to the passed id
    function getOutfitById(id: number) {
        return outfits.value.find(outfit => outfit.id === id)
    }

    //Deletes the passed Outfit from the list
    function deleteOutfit(outfit: IOutfit) {
        const index = outfits.value.indexOf(outfit, 0)
        if(index > -1) {
            outfits.value.splice(index, 1)
        }
    }

    return {
        outfits, addOutfit, getOutfitById, deleteOutfit
    }
}