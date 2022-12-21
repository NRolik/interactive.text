import {useState} from "react";

export function LineButton({id,disableId,disableButton}) {
    const [visible, setVisible] = useState(true);
    const display = visible ? "block" : "none";
    if(!visible){
        id="";
    }

    const style = {
        display,
        cursor: "pointer",
    }

    return <button
        hidden={!visible}
        style={style}
        onClick={() => {
            setVisible(false)
            disableButton(disableId);
        }}
    >{id}</button>
}
