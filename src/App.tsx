// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import originLogo from "../src/img/logo.png";
import "./App.css";

// 画面変移の為のReactRouterDomを
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

// リセットCSSの為、Globalコンポーネントをインポート
// cssコンポーネントもインポート
import { Global, css } from "@emotion/react";

// リセットCSSを適応する(emotion-reset)
import resetCSS from "emotion-reset";

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

function App() {
  return (
    <div>
      {/* emotion-resetを適応する */}
      <Global
        styles={css`
          ${resetCSS}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />

      <header css={appStyle}>
        <div css={headerContent}>
          <img src={originLogo} css={logoStyle} alt="logo" />
        </div>
      </header>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
