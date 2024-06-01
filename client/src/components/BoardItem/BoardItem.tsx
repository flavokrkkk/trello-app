import { FC } from "react";
import { IBoard } from "../../models/IBoard";
import { CardBody, CardItem, CardTitle } from "./styles";

interface BoardItemProps {
  boards: IBoard[];
}

const BoardItem: FC<BoardItemProps> = ({ boards }) => {
  return (
    <>
      {boards.map((board) => (
        <CardBody>
          <CardTitle>{board.title}</CardTitle>
          <div>
            {board.items.map((item) => (
              <CardItem>{item.title}</CardItem>
            ))}
          </div>
        </CardBody>
      ))}
    </>
  );
};

export default BoardItem;
