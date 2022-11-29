import {useDrag} from 'react-dnd'
import {ItemTypes} from './ItemTypes.jsx'

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}

export const CodeBox = function Box({name}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.CODE,
        item: {name, type:ItemTypes.CODE},
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