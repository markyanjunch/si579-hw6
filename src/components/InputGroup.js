import {useState} from "react";

import InputBox from "./InputBox";
import RhyButton from "./RhyButton";
import SynButton from "./SynButton";

const InputGroup = (props) => {
    const { setSearchWord, setSearchType } = props;
    const [textInput, setTextInput] = useState('');

    const rhy_search_trigger = () => {
        setSearchType("rhy");
        setSearchWord(textInput);
    }

    const syn_search_trigger = () => {
        setSearchType("syn");
        setSearchWord(textInput);
    }

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            rhy_search_trigger();
        }
    }

    return (
        <div className="row">
            <div className="input-group col">
                <InputBox
                    keyDownHandler={keyDownHandler}
                    textInput={textInput}
                    setTextInput={setTextInput}
                />
                <RhyButton search_trigger={rhy_search_trigger} />
                <SynButton search_trigger={syn_search_trigger} />
            </div>
        </div>
    );
}

export default InputGroup;