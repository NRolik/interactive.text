import {TextDropBox} from "./dnd/TextDropBox.jsx";

export function TextArea() {

    let text = "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.\n" +
        "        He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.\n" +
        "        The bedding was hardly able to cover it and seemed ready to slide off any moment.\n" +
        "        His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.\n" +
        "        \"What's happened to me?\" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.\n" +
        "        A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.\n" +
        "        It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.\n" +
        "        Gregor then turned to look out the window at the dull weather.\n" +
        "        Drops"


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
