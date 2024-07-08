import ResultsArtisans from "../components/SearchArtisan";



const SearchResults = () => {

    const results = (data, searchText) => {
        if (!searchText) {
            return data.filter(item => item.category.toLowerCase() === searchText.toLowerCase());
        } else {
            const searchLower = searchText.toLowerCase();
            return data.filter(item =>
                item.name.toLowerCase().includes(searchLower)
            );
        }
    };

    return (
        <div className="page">
            <ResultsArtisans ResultsArtisans={results} />
        </div>

    );
};

export default SearchResults;
