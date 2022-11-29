import {useState} from "react";

export function CodeButton({id}) {
    const [show, setShow] = useState(true);

    return <button
        hidden={!show}
        onClick={() => {
            setShow(false)
        }}
    >{id}</button>
}
