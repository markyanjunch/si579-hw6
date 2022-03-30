import {useEffect, useState} from "react";
import {groupBy, datamuseRequest, getDatamuseRhymeUrl, getDatamuseSimilarToUrl} from "../utils";
import SynListing from "./SynListing";
import SyllableListing from "./SyllableListing";

const OutputListing = (props) => {
    const { searchWord, searchType, savedWordsArray, setSavedWordsArray } = props;
    const [rhyResult, setRhyResult] = useState([]);
    const [synResult, setSynResult] = useState([]);
    const [loading, setLoading] = useState("");

    const rhymeCallBack = (data) => {
        const groups = groupBy(data, 'numSyllables');
        const searchResult = [];
        for (let syllable in groups) {
            searchResult.push({'syllable': syllable, 'wordsInSyllable': groups[syllable]});
        }
        setRhyResult(searchResult);
    }

    const synonymCallBack = (data) => {
        setSynResult(data);
    }

    useEffect(() => {
        if (searchType === "rhy") {
            setLoading("...loading");
            datamuseRequest(getDatamuseRhymeUrl(searchWord),rhymeCallBack);
            setLoading("");
        }
        else if (searchType === "syn") {
            setLoading("...loading");
            datamuseRequest(getDatamuseSimilarToUrl(searchWord),synonymCallBack);
            setLoading("");
        }
    }, [searchWord, searchType])

    if (searchType === "rhy") {
        if (rhyResult.length === 0) {
            return <output id="word_output" className="col">(no results)</output>;
        }
        return (
            <div className="output row">
                <output id="word_output" className="col">
                    {loading}
                    {
                        rhyResult.map((group) =>
                            <SyllableListing
                                group={group}
                                savedWordsArray={savedWordsArray}
                                setSavedWordsArray={setSavedWordsArray}
                            />
                        )
                    }
                </output>
            </div>
        );
    }
    else if (searchType === "syn") {
        return (
            <div className="output row">
                {loading}
                <SynListing
                    synResult={synResult}
                    savedWordsArray={savedWordsArray}
                    setSavedWordsArray={setSavedWordsArray}/>
            </div>
        );
    }
    else {
        return (
            <div className="output row">
                <output className="col"/>
            </div>
        );
    }
}

export default OutputListing;