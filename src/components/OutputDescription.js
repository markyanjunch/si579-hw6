const OutputDescription = (props) => {
    const { searchWord, searchType } = props;
    if (searchType === "rhy") {
        return (
            <div className="row">
                <h2 className="col">Words that rhyme with { searchWord }</h2>
            </div>
        );
    }
    else if (searchType === "syn") {
        return (
            <div className="row">
                <h2 className="col">Words with a meaning similar to { searchWord }</h2>
            </div>
        );
    }
    else {
        return (
            <div className="row">
                <h2 className="col"/>
            </div>
        );
    }
}

export default OutputDescription;