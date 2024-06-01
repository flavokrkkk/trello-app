import { useState } from "react";
import { trelloBoard } from "../../utils/mockData";
import BoardItem from "../../components/BoardItem/BoardItem";
import { BoardContainer } from "./styles";

const BoardPage = () => {
  const [boards, setBoards] = useState(trelloBoard);

  return (
    <BoardContainer>
      <BoardItem boards={boards} />
    </BoardContainer>
  );
};

export default BoardPage;
