import {useDrop} from 'react-dnd'
import {ItemTypes} from './ItemTypes.jsx'
import {useState} from "react";
import {CodeButton} from "./CodeButton.jsx";

const style = {}

export const TextDropBox = ({text}) => {
    const [codeElements, setCodeElements] = useState([]);
    const [lineElement, setLineElement] = useState([]);


    const [, drop] = useDrop(() => ({
        accept: [ItemTypes.CODE, ItemTypes.LINE],
        collect: (monitor) => ({
            isActive: monitor.canDrop() && monitor.isOver(),
        }),
        drop: (item, monitor) => {
            if (item.type === ItemTypes.CODE) {
                let  temp = codeElements;

                    temp.push(
                        <CodeButton key={item.name}
                                    id={item.name}/>

                    );

                    setCodeElements(temp);


            } else {
                let temp = lineElement;

                    temp.push(
                        <CodeButton key={item.name} id={item.name}/>

                    );

                    setLineElement(temp);

            }
        },
    }
    ))

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
