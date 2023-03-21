import { atom } from "recoil";

// JWT認証のアクセストークンをatomで管理
export const AccessToken = atom<string>({
  key: "accessToken",
  default: "",
});
