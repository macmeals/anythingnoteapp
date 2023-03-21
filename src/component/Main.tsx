// とりあえずanyで型付け

/** @jsxImportSource @emotion/react */

// emotionでスタイリング
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// データをインポート
// import { todoData } from "../todoData";
import { Card } from "../component/Card";

// Recoilをインポート
import { todoDataRecoil } from "../atom/todoData";
import { useRecoilState } from "recoil";

//メッセージを表示させる（react-toastifyライブラリ）
import { toast } from "react-toastify";
// react-beautiful-dnd の型をImport
import type {
  DropResult,
  DroppableProvided,
  DraggableProvided,
} from "react-beautiful-dnd";

const layoutStyle = css({
  display: "flex",
  justifyContent: "center",
});

const todoStyle = css({
  display: "flex",
  width: "920px",
  justifyContent: "space-between",
});

const todoWidth = css({
  width: "280px",
});

const Stitle = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 70px;

  > img {
    width: 40px;
    height: 40px;
    margin-right: 7px;
  }

  > div {
    font-size: 24px;
    position: relative;

    &::after {
      position: absolute;
      top: 170%;
      left: -47px;
      content: "";
      width: 280px;
      height: 1px;
      background-color: black;
    }
  }
`;

const cardStyle = css({
  width: "280px",
  height: "90px",
  border: "1px solid gray",
  boxShadow: "2px 2px 4px rgba(48, 48, 48, 0.25)",
  margin: "20px 0 20px 0",
});

const cardText = css({
  display: "flex",
  justifyContent: "space-between",
  width: "260px",
});

const btmStyle = css({
  width: "32px",
  height: "32px",
  border: "solid 1px white",
  backgroundColor: "transparent",
});

const btmImg = css({
  marginTop: "10px",
  width: "32px",
  height: "32px",
});

const title = css({
  width: "200px",
  height: "45px",
  margin: "10px",
});

const Scomplete = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 0 0 0 10px;

  > div:nth-of-type(1) {
    background-color: gray;
    color: white;
  }
`;

export const Main = () => {
  // tododataを全て受け取る ->これが大元
  // const [todo, setTodo] = useState(todoData);
  const [todos, setTodos] = useRecoilState(todoDataRecoil);

  const onDragEnd = (result: any) => {
    // 移動元と移動先の情報を受け取り、変数source, destinationへ代入
    const { source, destination } = result;

    //別のカラムにタスクが移動した時
    if (source.droppableId !== destination.droppableId) {
      // 元データのカラムのインデックスを取得。
      const sourceColIndex = todos.findIndex(
        (e: any) => e.id === source.droppableId
      );
      // 移動先のカラムのインデックスを取得。
      const destinationColIndex = todos.findIndex(
        (e: any) => e.id === destination.droppableId
      );

      // 元データのカラムの全データを取得
      const sourceCol = todos[sourceColIndex];
      // 移動先のデータのカラムの全データを取得
      const distinationCol = todos[destinationColIndex];

      // 元データのカラムのタスクを配列型で代入
      const sourceTask = [...sourceCol.task];
      // 移動先のカラムのタスクを配列型で代入
      const distinationTask = [...distinationCol.task];

      //タスクをタスク一覧から削除し、その削除したタスクを変数removedに入れる
      // [removed]の形式で入れないとオブジェクト形式に入れられないので、注意！
      const [removed] = sourceTask.splice(source.index, 1);
      console.log(removed);
      console.log(sourceTask);
      console.log(distinationTask);

      // 移動先のカラムへ移動してくるタスクを導入
      distinationTask.splice(destination.index, 0, removed);

      //対象のカラムのタスクに加工したタスクを代入（Source、Destionationのカラム）
      todos[sourceColIndex].task = sourceTask; //移動元のカラムのタスクを更新
      todos[destinationColIndex].task = distinationTask; //移動先のカラムのタスクを更新
      console.log(todos);

      //更新したtodoをState更新
      setTodos(todos);

      // 同一カラムでのタスク移動
    } else {
      // 元データのカラムのインデックスを取得。
      const sourceColIndex = todos.findIndex(
        (e: any) => e.id === source.droppableId
      );
      console.log(sourceColIndex);

      //元データのカラムのデータを取得
      const sourceCol = todos[sourceColIndex];
      console.log(sourceCol);

      //変更するタスク一覧を取得
      const sourceTask = [...sourceCol.task];
      //タスクをタスク一覧から削除し、その削除したタスクを変数removedに入れる
      // [removed]の形式で入れないとオブジェクト形式に入れられないので、注意！
      const [removed] = sourceTask.splice(source.index, 1);

      //タスクを追加
      sourceTask.splice(destination.index, 0, removed);

      //対象のカラムのタスクに加工したタスクを代入
      todos[sourceColIndex].task = sourceTask;
      //更新したtodoをState更新
      setTodos(todos);
    }
  };

  const onDeleteTodo = (itemsId: string, taskID: string) => {
    const deleteTodos = [...todos];
    // 削除対象の列のカラムの添字を取得
    const itemCol = deleteTodos.findIndex((e) => e.id === itemsId);
    // 削除対象の列のカラムのタスク一覧を取得
    const deleteTodo = deleteTodos[itemCol].task;

    // 削除対象のタスクの添字（Index番号）を取得
    const todoCol = deleteTodo.findIndex((e: any) => e.id === taskID);

    // 削除対象のタスクの添字（Index番号）の要素を削除する
    deleteTodo.splice(todoCol, 1);

    // 削除した後のタスク一覧を元のタスク一覧に入れる
    deleteTodos[itemCol].task = deleteTodo;

    // ステート更新
    setTodos(deleteTodos);
  };

  return (
    <div css={layoutStyle}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div css={todoStyle}>
          {todos.map((items: any) => (
            <Droppable key={items.id} droppableId={items.id}>
              {(provided: DroppableProvided) => (
                <div
                  css={todoWidth}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <Stitle>
                    <img src={`${process.env.PUBLIC_URL}${items.img} `} />
                    <div>{items.title}</div>
                  </Stitle>
                  <div>
                    {items.task.map((task: any, index: number) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided: DraggableProvided, snapshot) => (
                          <div
                            css={cardStyle}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot.isDragging ? "0.5" : "1",
                            }}
                          >
                            <div css={cardText}>
                              <div css={title}>
                                <Card>{task.title}</Card>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  onDeleteTodo(items.id, task.id);
                                }}
                                css={btmStyle}
                              >
                                <img
                                  css={btmImg}
                                  src={`${process.env.PUBLIC_URL}/deleteBtn.png `}
                                />
                              </button>
                            </div>
                            <Scomplete>
                              <div>完了日</div>
                              <div>{task.date}</div>
                              <a href="#">詳細</a>
                            </Scomplete>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    <button>追加</button>
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};
