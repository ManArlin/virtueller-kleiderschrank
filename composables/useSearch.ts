export default function useSearch() {

    const searchInput = useState('searchInput', () => "")

    return {
        searchInput
    }
}