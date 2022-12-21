import {useDrop} from 'react-dnd'
import {ItemTypes} from './ItemTypes.jsx'
import {useState} from "react";
import {CodeButton} from "./CodeButton.jsx";
import {LineButton} from "./LineButton.jsx";


export const TextDropBox = ({id, text, updateText}) => {
    const [codeElements, setCodeElements] = useState([]);
    const [lineElement, setLineElement] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState(new Map());


    const [, drop] = useDrop(() => ({
            accept: [ItemTypes.CODE, ItemTypes.LINE],
            collect: (monitor) => ({
                isActive: monitor.canDrop() && monitor.isOver(),
            }),
            drop: (item, monitor) => {
                if (item.type === ItemTypes.CODE) {
                    let temp = codeElements;

                    temp.push(
                        <CodeButton key={item.name}
                                    id={item.name}
                                    disableId={item.name + temp.length}
                                    disableButton={disableButton}
                        />
                    );

                    setCodeElements(temp);
                    newText();

                } else {
                    let temp = lineElement;

                    temp.push(
                        <LineButton key={item.name}
                                    id={item.name}
                                    disableId={item.name + temp.length}
                                    disableButton={disableButton}
                        />
                    );

                    setLineElement(temp);
                    newText();
                }
            },
        }
    ))

    function disableButton(disableId) {
        disabledButtons.set(disableId, true);
        setDisabledButtons(disabledButtons);
        newText();
    }


    function newText() {
        let allCodes = " ";
        for (let i = 0; i < codeElements.length; i++) {
            if (!disabledButtons.has(codeElements[i].props.disableId))
                allCodes = allCodes + codeElements[i].key + " ";
        }
        let allLines = "";
        for (let i = 0; i < lineElement.length; i++) {
            if (!disabledButtons.has(lineElement[i].props.disableId))
                allLines = allLines + "\n" + lineElement[i].key;
        }

        let joinedText;
        if (id === 0) {
            joinedText = allLines;
        } else {
            joinedText = text + allCodes + allLines;
        }

        updateText(id, joinedText)
    }

    return (
        <>
            <div ref={drop}>
                <div>
                    {text}
                    {codeElements.map(element => element)}
                </div>
            </div>
            <div style={{display: "block"}}>
                {lineElement.map(element => element)}
            </div>
        </>
    )
}
