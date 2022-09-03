import { atom } from "recoil";

// ログインID（Email)をatomで管理
export const UserEmail = atom<string>({
  key: "userEmail",
  default: "",
});
