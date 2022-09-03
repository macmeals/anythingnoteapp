import { atom } from "recoil";

// JWT認証のアクセストークンをatomで管理
export const AcceeToken = atom<string>({
  key: "accessToken",
  default: "",
});
