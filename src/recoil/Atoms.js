import { atom } from "recoil";

const cartData = atom({
  key: "cart data",
  default: []
});

export const currentlyReadingList = atom({
  key: "currently reading books",
  default: []
});
export const finishedReadingList = atom({
  key: "finished reading books",
  default: []
});
export const yetToStartList = atom({
  key: "yet to start reading books",
  default: []
});

export const userLoginStatus = atom({
  key: " user login status",
  default: false
});
export const booksCategoryId = atom({
  key: "book id",
  default: ""
});
export const currentUserAtom = atom({
  key: "current user",
  default: {}
});
export default cartData;
