import { IBoardItem } from "./IBoardItem";

export interface IBoard {
  id: number;
  title: string;
  items: IBoardItem[];
}
