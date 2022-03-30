const SavedListing = (props) => {
    const { savedWordsArray } = props;

    if (!savedWordsArray.length) {
        return (
            <div className="row">
                <div className="col">
                    Saved words: (none)
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="row">
                <div className="col">
                    Saved words: <span>{ savedWordsArray.join(', ') }</span>
                </div>
            </div>
        );
    }
};

export default SavedListing;