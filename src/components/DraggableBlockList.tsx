import React, { useState, useRef, useCallback } from 'react';
import { mockItems, Item, Direction } from '../constans';
import './DraggableBlockList.css';

export const DraggableBlockList: React.FC = () => {
  const [items, setItems] = useState<Item[]>(mockItems);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragEnd = useCallback(() => {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const copyItems = items.filter(
        (_, itemIndex) => itemIndex !== dragItem.current
      );

      copyItems.splice(dragOverItem.current, 0, items[dragItem.current]);
      dragItem.current = null;
      dragOverItem.current = null;
      setItems(copyItems);
    }
  }, [items]);

  const handleOnDragStart = (index: number) => {
    dragItem.current = index;
  };

  const handleOnDragEnter = (index: number) => {
    dragOverItem.current = index;
  };

  const moveItem = useCallback(
    (direction: Direction, index: number) => {
      let copyItems = [...items];
      const temp = copyItems[index];

      if (direction === 'up') {
        copyItems[index] = copyItems[index - 1];
        copyItems[index - 1] = temp;
      }
      if (direction === 'down') {
        copyItems[index] = copyItems[index + 1];
        copyItems[index + 1] = temp;
      }

      setItems(copyItems);
    },
    [items]
  );

  return (
    <div className='container'>
      {items.map((e, index) => (
        <div
          className='list'
          key={e.id}
          draggable
          onDragStart={() => handleOnDragStart(index)}
          onDragEnter={() => handleOnDragEnter(index)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => e.preventDefault()}
        >
          <p>{e.title}</p>
          <div className='buttons'>
            <button
              className='arrow'
              onClick={() => moveItem('up', index)}
              disabled={index === 0}
            >
              ▲
            </button>
            <button
              className='arrow'
              onClick={() => moveItem('down', index)}
              disabled={index === items.length - 1}
            >
              ▼
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
