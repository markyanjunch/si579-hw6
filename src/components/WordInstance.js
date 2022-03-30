const WordInstance = (props) => {
    const { word, savedWordsArray, setSavedWordsArray} = props;

    function addToSavedWords(word) {
        if (!savedWordsArray.includes(word)) {
            setSavedWordsArray((previous) => {
                return [...previous, word]
            });
        }
    }
    
    return (
        <li>
            { word }
            <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => addToSavedWords(word)} >
                (Save)
            </button>
        </li>
    )
}

export default WordInstance;