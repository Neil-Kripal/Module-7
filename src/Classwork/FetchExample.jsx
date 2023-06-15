import { useState, useEffect } from "react"

function FetchExample() {
    const [ingredient, setIngredient] = useState('Gin');
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/' +
            'v1/1/search.php?i=' + ingredient)
            .then(response => response.json())
            .then(json => {
                setResults(json.ingredients);
            });
    }, [ingredient]); // dependency array

    const resultList = results.map(result =>
        <li key={result.idDrink}>{result.strDescription}</li>);
        
    return (
        <div className="FetchExample componentBox">
            <select value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}>
                <option>Gin</option>
                <option>Vodka</option>
                <option>Tequila</option>
            </select>
            <ul>{resultList}</ul>
        </div>
    );
}
export default FetchExample;