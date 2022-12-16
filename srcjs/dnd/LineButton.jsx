import {useState} from "react";

export function LineButton({id}) {
    const [visible, setVisible] = useState(true);
    const styleView = visible ? "visible" : "hidden"

    const style = {
        display: "block",
        cursor: "pointer",
        visibility: styleView
    }

    return <button
        hidden={!visible}
        style={style}
        onClick={() => {
            setVisible(false)
        }}
    >{id}</button>
}
