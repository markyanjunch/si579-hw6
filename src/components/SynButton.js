const SynButton = (props) => {
    const { search_trigger } = props;

    return (
        <button
            type="button"
            className="btn btn-secondary"
            onClick={(e) => search_trigger()}
        >
            Show synonyms
        </button>
    );
}

export default SynButton;