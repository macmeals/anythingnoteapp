import { v4 as uuidv4 } from "uuid";

export const todoData = [
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
      {
        id: uuidv4(),
        title: "React✖️TypeScriptアプリ開発を行う", //タイトル
        category: "未着手", //ステータス
        description:
          "なんでもメモアプリをAPI連携しつつReact✖️TypeScriptアプリ開発を行う", //Todo
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
        title: "Next.jsの勉強を行う", //タイトル
        category: "対応中", //ステータス
        description: "Next.jsを利用してReactで作成したアプリを再作成する", //Todo
        date: "2022/10/5", //Todo作成日
        mark_div: 0,
      },
      {
        id: uuidv4(),
        title: "TypeScriptの見直しを行う", //タイトル
        category: "対応中", //ステータス
        description: "TypeScript化を考慮して対応する。", //Todo
        date: "2022/10/5", //Todo作成日
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
        title: "Reactの基本方法を学ぶ", //タイトル
        category: "完了", //ステータス
        description: "Reactの基本的な概念のStateとPropsを理解する", //Todo
        date: "2022/10/5", //Todo作成日
        mark_div: 0,
      },
      {
        id: uuidv4(),
        title: "JSVanilaを学ぶ", //タイトル
        category: "完了", //ステータス
        description: "JavaScriptの基本的な考え方（Map関数等）を理解する", //Todo
        date: "2022/10/5", //Todo作成日
        mark_div: 0,
      },
    ],
  },
];
