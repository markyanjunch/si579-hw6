const InputBox = (props) => {
    const { keyDownHandler, textInput, setTextInput } = props;

    return (
        <input
            className="form-control"
            type="text"
            placeholder="Enter a word"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={keyDownHandler}
        />
    );
}

export default InputBox;