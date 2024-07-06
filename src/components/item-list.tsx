import cx from 'clsx';
import { Box, Group, Stack, Text, rem } from "@mantine/core";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import DragVerticalIcon from 'src/assets/icons/drag-vertical.svg';
import useListItems from 'src/hooks/use-list-items';
import { forwardRef, useImperativeHandle } from 'react';
import { useLang } from 'src/i18n';
import ItemName from './item-name';

import classes from "./style.module.scss";
import ItemRequiredBy from './item-required-by';

export interface ItemListRef {
  resetOrder: () => void;
}

const ItemList = forwardRef<ItemListRef>((_, ref) => {
  const [items, handlers] = useListItems();
  const lang = useLang();

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
                      <Stack gap="xs" flex={1}>
                        <Group gap="md" justify='space-between'>
                          <ItemName name={item.name} icon={item.icon} link />

                          {item.requiredBy?.length && (
                            <ItemRequiredBy requiredBy={item.requiredBy} />
                          )}

                        </Group>
                        {item.source && (
                          <Text size='sm'>{item.source[lang]}</Text>
                        )}
                      </Stack>
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
