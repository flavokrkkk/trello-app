import { IBoard } from "../models/IBoard";

export const trelloBoard = <IBoard[]>[
  {
    id: 1,
    title: "Проект",
    items: [
      { id: 1, title: "Развернуть проект" },
      { id: 2, title: "Развернуть проект" },
      { id: 3, title: "Развернуть проект" },
    ],
  },
  {
    id: 1,
    title: "Готово",
    items: [
      { id: 1, title: "Развернуть проект" },
      { id: 2, title: "Развернуть проект" },
      { id: 3, title: "Развернуть проект" },
    ],
  },
  {
    id: 1,
    title: "На ревью",
    items: [
      { id: 1, title: "Развернуть проект" },
      { id: 2, title: "Развернуть проект" },
      { id: 3, title: "Развернуть проект" },
    ],
  },
];
