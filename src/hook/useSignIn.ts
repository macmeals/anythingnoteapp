import { useRecoilState, useSetRecoilState } from "recoil";
import { UserEmail } from "../atom/UserEmail";
import { UserPass } from "../atom/UserPass";
import { AccessToken } from "../atom/AccessToken";
import { ErrMessage } from "../atom/ErrMessage";

import axios from "axios";

import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  // フックは関数コンポーネントの直下に！
  const [userEmail, setUserEmail] = useRecoilState<string>(UserEmail);
  const [userPass, setUserPass] = useRecoilState<string>(UserPass);
  const setAccessToken = useSetRecoilState(AccessToken);
  const setErrMessage = useSetRecoilState(ErrMessage);

  //入力したID(Email)をState保存
  const onUserEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserEmail(e.target.value);

  //入力したpasswordをState保存
  const onUserPass = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserPass(e.target.value);

  // こちらも関数コンポーネントの直下におかないとNG！
  const navigate = useNavigate();

  const signInUser = async () => {
    //JWT情報を取得する。
    try {
      const JWT = await axios.post(
        "https://raisetech-memo-api.herokuapp.com/api/login",
        { email: userEmail, password: userPass },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //LocalStorageに保存する為、JWT情報をJSON文字列に変換する
      const token = JWT.data.access_token;

      //作成した際の時刻の時間を取得(ミリ秒から時間)
      const nowTime = new Date().getTime() / 1000 / 60 / 60;

      //JWTtokenのオブジェクトを作成（トークンと作成日時のオブジェクト）
      const jwtToken = { Token: token, NowTime: nowTime };

      // LocalStorageにアクセストークンと作成日時を保存(Json文字列に変換)
      localStorage.setItem("AccessToken", JSON.stringify(jwtToken));

      // stateにアクセストークンを保存
      setAccessToken(token);

      // todosへリダイレクト
      navigate("/todos");

      //型をunknown型からany型に変更
    } catch (error: any) {
      setErrMessage(error.message);
      console.log(error.message);
    }
  };

  return { onUserEmail, onUserPass, signInUser };
};
