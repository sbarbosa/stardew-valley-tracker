import cx from 'clsx';
import { Box, Group, rem } from "@mantine/core";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

import DragVerticalIcon from 'src/assets/icons/drag-vertical.svg';

import classes from "./style.module.scss";
import useListItems from 'src/hooks/use-list-items';
// import { useTranslation } from 'react-i18next';
import ItemName from './item-name';
import { forwardRef, useImperativeHandle } from 'react';

export interface ItemListRef {
  resetOrder: () => void;
}

const ItemList = forwardRef<ItemListRef>((_, ref) => {
  const [items, handlers] = useListItems();
  // const { i18n } = useTranslation();

  useImperativeHandle(ref, () => ({
    resetOrder: () => handlers.resetOrder(),
  }));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>

            {
              items.map((item, index) => (
                <Draggable key={item.id} index={index} draggableId={item.id}>
                  {(provided, snapshot) => (
                    <Box
                      className={cx(classes.item, {
                        [classes.item_dragging]: snapshot.isDragging,
                        [classes.hidden]: !!item.hidden
                      })}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <Group>
                        <ItemName name={item.name} icon={item.icon} link />
                      </Group>
                      <Box {...provided.dragHandleProps} className={classes.drag_handle}>
                        <DragVerticalIcon style={{ width: rem(30), height: "auto" }} stroke="1.5" />
                      </Box>
                    </Box>
                  )}
                </Draggable>
              ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>

  );
});

export default ItemList;
