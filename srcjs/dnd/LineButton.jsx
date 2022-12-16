import {useState} from "react";

export function LineButton({id}) {
    const [show, setShow] = useState(true);

    return <button
        style={{display: "block",cursor:"pointer"}}
        hidden={!show}
        onClick={() => {
            setShow(false)
        }}
    >{id}</button>
}
