const RhyButton = (props) => {
    const { search_trigger } = props;

    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => search_trigger()}
        >
            Show rhyming words
        </button>
    );
}

export default RhyButton;