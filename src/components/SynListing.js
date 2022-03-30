import WordInstance from "./WordInstance";

const SynListing = (props) => {
    const { synResult, savedWordsArray, setSavedWordsArray} = props;
    if (synResult.length === 0) {
        return <output id="word_output" className="col">(no results)</output>;
    }
    return (
        <output id="word_output" className="col">
            <ul>
                {synResult.map((item) =>
                    <WordInstance
                        word={item.word}
                        savedWordsArray={savedWordsArray}
                        setSavedWordsArray={setSavedWordsArray}/>
                )}
            </ul>
        </output>
    )
}

export default SynListing;