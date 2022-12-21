import {useState} from "react";

export function CodeButton({id,disableId,disableButton}) {
    const [show, setShow] = useState(true);

    return <button
        style={{cursor:"pointer"}}
        hidden={!show}
        onClick={() => {
            setShow(false)
            disableButton(disableId);
        }}
    >{id}</button>
}
