import {useState} from "react";

export function CodeButton({id}) {
    const [show, setShow] = useState(true);

    return <button
        style={{cursor:"pointer"}}
        hidden={!show}
        onClick={() => {
            setShow(false)
        }}
    >{id}</button>
}
