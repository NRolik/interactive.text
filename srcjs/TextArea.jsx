import {TextDropBox} from "./dnd/TextDropBox.jsx";

export function TextArea({text}) {

    let splitedText = text.split("\n");


    return <div className={"left"}>
            <TextDropBox text={<div>&nbsp;</div>}/>
        {
            // splitedText.map(element => <div>{element}</div>)
            splitedText.map(
                element => <>
                    <TextDropBox text={element}/>
                </>
            )
        }
    </div>
}
