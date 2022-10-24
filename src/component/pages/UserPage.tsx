// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

// emotionでスタイリング
import { css } from "@emotion/react";

//Mainの雛形を取得
import { Main } from "../Main";

const contentBackgroud = css({
  background: [
    "linear-gradient(180deg, rgba(0, 128, 118, 0.25) 0%, rgba(0, 74, 128, 0.25) 100%)",
  ],
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const todoCard = css({
  width: "70vw",
  minHeight: "80vh",
  backgroundColor: "white",
});

export const UserPage = () => {
  return (
    <div>
      <div css={contentBackgroud}>
        <p>こんにちはユーザさん</p>
        <div css={todoCard}>
          <Main />
        </div>
      </div>
    </div>
  );
};
