import classNames from 'classnames';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styles from './DraggableList.module.scss';

/*
 * id: droppableId
 * items: array of items to be rendered
 *      item { id: str, render: () => jsx }
 * itemKey: key to lookup for each item for unique identification
 */
export default function DraggableList({
    id,
    items,
    itemKey,
    activeItemKey,
    renderItem,
    onReorder,
    onItemClick,
}) {
    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const item = items.find((i) => i[itemKey] === draggableId);
        const newItems = [...items];
        newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, item);
        onReorder(newItems);
    };

    if (!items || items.length === 0) return null;

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={id}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {items.map((item, i) => (
                            <Draggable key={item[itemKey]} draggableId={item[itemKey]} index={i}>
                                {(dragProvided) => (
                                    <div
                                        className={classNames(
                                            styles.item,
                                            activeItemKey === item[itemKey] && styles.active
                                        )}
                                        ref={dragProvided.innerRef}
                                        onClick={() => onItemClick && onItemClick(item)}
                                        {...dragProvided.draggableProps}
                                        {...dragProvided.dragHandleProps}
                                    >
                                        {renderItem(item)}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
