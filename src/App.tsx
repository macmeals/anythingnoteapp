// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import React from "react";
import originLogo from "../src/img/logo.png";
import todoicon from "../src/img/todoicon.png";
import "./App.css";

// emotionでスタイリング
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const logoStyle = css({
  width: 200,
  height: 40,
});

const headerContent = css({
  width: 920,
  backgroundColor: "white",
});

const appStyle = css({
  height: 100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const contentBackgroud = css({
  // background: "red",
  background: ["linear-gradient(#008076, #004A80)"],
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const loginCard = css({
  width: 520,
  height: 600,
  backgroundColor: "white",
});

const fontSize = css({
  fontSize: "32px",
});

// 改行の為のCSS
const textNewLine = css({
  whiteSpace: "pre-wrap",
});

function App() {
  return (
    <div>
      <header css={appStyle}>
        <div css={headerContent}>
          <img src={originLogo} css={logoStyle} alt="logo" />
        </div>
      </header>
      <div css={contentBackgroud}>
        <div css={loginCard}>
          <p>
            できるのは<span css={fontSize}>『これだけ』</span>です
          </p>
          <p css={textNewLine}>{`やること\n管理`}</p>
          <img src={todoicon} alt="todoのアイコン" />
        </div>
      </div>
    </div>
  );
}

export default App;
