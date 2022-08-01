import React, { useState, useRef } from "react";
import { useDebounce } from "../debounceFn/deBounce";
import { getSuggestions } from "./utils";
import "./style.css";

const TypeAHead = () => {

    const inputRef = useRef();
    const [suggestionList, setSuggestionList] = useState([]);

    const changeHandler = useDebounce(async ({ target: { value } }) => {
        if (value.length) {
            let sugList = await getSuggestions(value).then(res => res);
            console.log({ value, sugList });
            setSuggestionList(sugList);
        } else {
            setSuggestionList([])
        }
    }, 500);

    const updateInput = (e) => {
        let value = e.target.dataset.value;
        if (value) {
            setSuggestionList([]);
            inputRef.current.value = value;
        }
    }

    return (
        <div className="t-a-h-wrapper">
            <input onChange={changeHandler} ref={inputRef} />
            <ul className="suggestion-wrapper" onClick={updateInput}>
                {
                    suggestionList?.map((sug, i) => <li data-value={sug} key={`${i}_${sug}`}>{sug}</li>)
                }
            </ul>
        </div>
    )
}

export default TypeAHead;