import {useDrag} from 'react-dnd'
import {ItemTypes} from './ItemTypes.jsx'

const style = {
    display: 'block',
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 0.5rem',
    marginTop:"0.5rem",
    // marginRight: '1rem',
    marginBottom: '0.5rem',
    cursor: 'move',
    textAlign:'center'
    // float: 'left',
}

export const CodeBox = function Box({name}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.CODE,
        item: {name, type: ItemTypes.CODE},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} style={{...style, opacity}} data-testid={`box`}>
            {name}
        </div>
    )
}