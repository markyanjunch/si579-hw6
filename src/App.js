import {useState} from "react";

import SavedListing from "./components/SavedListing";
import InputGroup from "./components/InputGroup";
import OutputDescription from "./components/OutputDescription";
import OutputListing from "./components/OutputListing";

function App() {

    const [savedWordsArray, setSavedWordsArray] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [searchType, setSearchType] = useState("");

    // console.log([searchWord, searchType]);

    return (
        <main className="container">
            <h1 className="row">React Rhyme Finder (579 Problem Set 6)</h1>
            <h5>
                Link to Source Code: <a href="https://github.com/markyanjunch/si579-hw6" target="_blank" rel="noreferrer">https://github.com/markyanjunch/si579-hw6</a>
            </h5>

            <SavedListing savedWordsArray={savedWordsArray} />
            <InputGroup
                setSearchWord={setSearchWord}
                setSearchType={setSearchType} />
            <OutputDescription
                searchWord={searchWord}
                searchType={searchType} />
            <OutputListing
                searchWord={searchWord}
                searchType={searchType}
                savedWordsArray={savedWordsArray}
                setSavedWordsArray={setSavedWordsArray} />
        </main>
    );
}

export default App;
