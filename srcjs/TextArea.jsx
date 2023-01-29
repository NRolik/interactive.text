import { TextDropBox } from "./dnd/TextDropBox.jsx";
import { useEffect, useState } from "react";

export function TextArea({ text, setWholeText }) {
    const [line, setLine] = useState(new Map());
    const [loading, setLoading] = useState(true);

    let splitedText = text.split("\n");

    function buildText() {
        let text = '';
        for (let i = 0; i < splitedText.length; i++) {
            text = text + line.get(splitedText[i]) + "\n";
        }
        setWholeText(text);
    }

    useEffect(() => {
        if (loading) {
            let temp = line;
            for (let i = 0; i < splitedText.length; i++) {
                temp.set(splitedText[i], splitedText[i]);
            }
            setLine(temp);
            setLoading(false);
            buildText()
        }
    }, [loading])

    function updateText(id, text) {
        let temp = line;
        line.set(id, text);
        setLine(temp);
        buildText();
    }


    console.log(splitedText);


    return <div className={"left"}>
        <TextDropBox id={0} text={<div>&nbsp;</div>} updateText={updateText} />
        {!loading ?
            // splitedText.map(element => <div>{element}</div>)
            splitedText.map(
                element => {
                    console.log(element.trim());
                    return <>
                        {(element.trim()).length !== 0 ? <hr /> : null}
                        <TextDropBox id={element} text={element} updateText={updateText} />
                    </>
                }
            )
            : null
        }
    </div>
}
