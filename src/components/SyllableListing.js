import WordInstance from "./WordInstance";

const SyllableListing = (props) => {
    const { group, savedWordsArray, setSavedWordsArray} = props;
    const syllable = group.syllable;
    const wordsInSyllable = group.wordsInSyllable;

    return (
        <>
            <h3>Syllables: { syllable }</h3>
            <ul>
                {
                    wordsInSyllable.map((w) =>
                        <WordInstance
                            word={w.word}
                            savedWordsArray={savedWordsArray}
                            setSavedWordsArray={setSavedWordsArray}/>
                    )}
            </ul>
        </>
    )
}

export default SyllableListing;