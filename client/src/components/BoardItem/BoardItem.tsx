import { DragEventHandler, FC, useState } from "react";
import { IBoard } from "../../models/IBoard";
import { CardBody, CardItem, CardTitle } from "./styles";

interface BoardItemProps {
  boards: IBoard[];
}

const BoardItem: FC<BoardItemProps> = ({ boards }) => {
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const dragOverHandler: DragEventHandler = (event) => {
    event.preventDefault();
  };

  const dragLeaveHandler: DragEventHandler = (event) => {
    event.preventDefault();
    console.log("leave");
  };

  const dragStartHandler: DragEventHandler = (event) => {
    console.log("start");
  };

  const dragEndHandler: DragEventHandler = (event) => {
    console.log("end");
  };

  const dropHandler = (event: DragEvent) => {
    event.preventDefault();
    console.log("drop");
  };

  return (
    <>
      {boards.map((board) => (
        <CardBody>
          <CardTitle>{board.title}</CardTitle>
          <div>
            {board.items.map((item) => (
              <CardItem
                draggable
                onDragOver={dragOverHandler}
                onDragLeave={dragLeaveHandler}
                onDragStart={dragStartHandler}
                onDragEnd={dragEndHandler}
                onDrop={(event) => dropHandler(event)}
              >
                {item.title}
              </CardItem>
            ))}
          </div>
        </CardBody>
      ))}
    </>
  );
};

export default BoardItem;
