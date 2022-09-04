// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

// emotionでスタイリング
import { css } from "@emotion/react";
import styled from "@emotion/styled";

// アイコンのイメージを取り出す
import todoicon from "../../img/todoicon.png";

// Recoil(グローバルState)をインポート
import { useRecoilValue } from "recoil";
// atomをインポート
import { UserEmail } from "../../atom/UserEmail";
import { UserPass } from "../../atom/UserPass";
import { ErrMessage } from "../../atom/ErrMessage";

// カスタムHookをインポート
import { useSignIn } from "../../hook/useSignIn";

const contentBackgroud = css({
  background: [
    "linear-gradient(180deg, rgba(0, 128, 118, 0.25) 0%, rgba(0, 74, 128, 0.25) 100%)",
  ],
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
  borderRadius: "10px",
  filter: "drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2))",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const textBox = css({
  width: 339,
  height: 46,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const fontSize = css({
  fontSize: "32px",
});

const StodoIconGroup = styled("div")`
  margin: 25px 0 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

const todoIcon = css({
  width: 100,
  height: 100,
});

const signStyle = css({
  fontSize: "32px",
  marginBottom: "10px",
});

const formStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: 360,
  height: 150,
});

const inputStyle = css({
  width: 360,
  height: 46,
});

const signInButton = css({
  width: 360,
  height: 46,
  background: ["linear-gradient(180deg, #728D8B 0%, #25618C 100%)"],
  border: "1px solid #414141",
  color: "white",
  fontSize: "24px",
});

export const TopPage = () => {
  //各atomよりvalue、値を取り出す。
  const userEmail = useRecoilValue<string>(UserEmail);
  const userPass = useRecoilValue<string>(UserPass);
  const errMessage = useRecoilValue<string>(ErrMessage);
  // カスタムHook（useSignIn)から各種関数をインポート
  const { onUserEmail, onUserPass, signInUser } = useSignIn();

  return (
    <div>
      <div css={contentBackgroud}>
        <div css={loginCard}>
          <p css={textBox}>
            できるのは<span css={fontSize}>『これだけ』</span>です
          </p>
          <StodoIconGroup>
            <p>やること</p>
            <p>管理</p>
            <img src={todoicon} css={todoIcon} alt="todoのアイコン" />
          </StodoIconGroup>
          <p css={signStyle}>サインイン</p>
          <form css={formStyle}>
            <input
              onChange={onUserEmail}
              value={userEmail}
              css={inputStyle}
              type="text"
              placeholder="ID"
            />
            <input
              onChange={onUserPass}
              value={userPass}
              css={inputStyle}
              type="password"
              placeholder="PASSWORD"
            />
            <input
              onClick={() => {
                signInUser();
              }}
              css={signInButton}
              type="submit"
              value="サインイン"
            />
          </form>
          <button
            onClick={() => {
              signInUser();
            }}
          >
            JWT取得
          </button>
          {
            errMessage && <p>パスワードもしくはIDが違います。</p> // エラーがあった場合、エラー文言{errMassage}を表示する
          }
          <p>※サインインできない方は管理者にお問い合わせ下さい。</p>
        </div>
      </div>
    </div>
  );
};
