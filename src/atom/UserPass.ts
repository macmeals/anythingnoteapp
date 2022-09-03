import { atom } from "recoil";

// ログインID（Email)をatomで管理
export const UserPass = atom<string>({
  key: "userPass",
  default: "",
});
