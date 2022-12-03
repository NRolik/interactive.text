import {useDrop} from 'react-dnd'
import {ItemTypes} from './ItemTypes.jsx'
import {useState} from "react";
import {CodeButton} from "./CodeButton.jsx";

const style = {}

export const TextDropBox = ({id, text, updateText}) => {
    const [codeElements, setCodeElements] = useState([]);
    const [lineElement, setLineElement] = useState([]);


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
                                    id={item.name}/>
                    );

                    setCodeElements(temp);
                    newText();

                } else {
                    let temp = lineElement;

                    temp.push(
                        <CodeButton key={item.name} id={item.name}/>
                    );

                    setLineElement(temp);
                    newText();
                }
            },
        }
    ))


    function newText() {
        let allCodes = " ";
        for (let i = 0; i < codeElements.length; i++) {
            allCodes = allCodes + codeElements[i].key + " ";
        }
        let allLines = "";
        for (let i = 0; i < lineElement.length; i++) {
            allLines = allLines + "\n" +lineElement[i].key;
        }

        let joinedText;
        if (id === 0) {
            joinedText = allLines;
        } else {
            joinedText = text + allCodes + allLines;
        }

        updateText(id,joinedText)
    }

    return (
        <>
            <div ref={drop}>
                <div>
                    {text}
                    {codeElements.map(element => element)}
                </div>
            </div>
            {lineElement.map(element => element)}
        </>
    )
}
