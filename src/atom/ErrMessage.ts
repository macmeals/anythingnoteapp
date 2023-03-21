import { atom } from "recoil";

// JWT認証のエラーメッセージをState管理

export const ErrMessage = atom<string>({
  key: "errMessage",
  default: "",
});
