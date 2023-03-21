//
import { v4 as uuidv4 } from "uuid";

import { atom } from "recoil";

// type TodoDatas = [
//   {
//     id: string;
//     title: string;
//     img: string;
//     task: [
//       {
//         id: string;
//         title: string;
//         category: string;
//         description: string;
//         date: string;
//         mark_div: number;
//       }
//     ];
//   },
//   {
//     id: string;
//     title: string;
//     img: string;
//     task: [
//       {
//         id: string;
//         title: string;
//         category: string;
//         description: string;
//         date: string;
//         mark_div: number;
//       }
//     ];
//   },
//   {
//     id: string;
//     title: string;
//     img: string;
//     task: [
//       {
//         id: string;
//         title: string;
//         category: string;
//         description: string;
//         date: string;
//         mark_div: number;
//       }
//     ];
//   }
// ];

//todoData全体を管理する。
export const todoDataRecoil = atom<any>({
  key: "todoDatas",
  default: [
    {
      id: uuidv4(),
      title: "未着手",
      img: "pending.png",
      task: [
        {
          id: uuidv4(),
          title: "植木の水遣りを行う", //タイトル
          category: "未着手", //ステータス
          description: "庭の花壇と家庭菜園に日に３回ホースで水やりを行う。", //Todo
          date: "2022/10/2", //Todo作成日
          mark_div: 0,
        },
      ],
    },
    {
      id: uuidv4(),
      title: "対応中",
      img: "doing.png",
      task: [
        {
          id: uuidv4(),
          title: "Reactの学習中", //タイトル
          category: "対応中", //ステータス
          description: "庭の花壇と家庭菜園に日に３回ホースで水やりを行う。", //Todo
          date: "2022/10/2", //Todo作成日
          mark_div: 0,
        },
      ],
    },
    {
      id: uuidv4(),
      title: "完了",
      img: "complete.png",
      task: [
        {
          id: uuidv4(),
          title: "JavaScript", //タイトル
          category: "完了", //ステータス
          description: "庭の花壇と家庭菜園に日に３回ホースで水やりを行う。", //Todo
          date: "2022/10/2", //Todo作成日
          mark_div: 0,
        },
      ],
    },
  ],
});
