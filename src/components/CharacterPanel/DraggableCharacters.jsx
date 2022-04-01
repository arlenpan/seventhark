import { CloseOutlined } from '@ant-design/icons';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function DraggableCharacters({ characters, onDelete, onReorder }) {
    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const character = characters.find((c) => c.name === draggableId);
        const newCharacters = [...characters];
        newCharacters.splice(source.index, 1);
        newCharacters.splice(destination.index, 0, character);
        onReorder(newCharacters);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable-characters">
                {(provided) => {
                    return (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {characters.map((char, i) => (
                                <Draggable key={char.name} draggableId={char.name} index={i}>
                                    {(dragProvided) => {
                                        return (
                                            <div
                                                className="d-flex-center justify-between mb-s"
                                                ref={dragProvided.innerRef}
                                                {...dragProvided.draggableProps}
                                                {...dragProvided.dragHandleProps}
                                            >
                                                <div className="d-flex-column">
                                                    <span>Name: {char.name}</span>
                                                    <span>Item Level: {char.ilvl}</span>
                                                </div>
                                                <CloseOutlined onClick={() => onDelete(char)} />
                                            </div>
                                        );
                                    }}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    );
                }}
            </Droppable>
        </DragDropContext>
    );
}
