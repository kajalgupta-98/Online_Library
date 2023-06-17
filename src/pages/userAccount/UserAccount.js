import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentlyReadingList,
  currentUserAtom,
  finishedReadingList,
  userLoginStatus,
  yetToStartList
} from "../../recoil/Atoms";
import style from "./userAccount.module.css";
import { RiAccountCircleFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

export default function UserAccount() {
  const currentUser = useRecoilValue(currentUserAtom);
  const yetToStartItems = useRecoilValue(yetToStartList);
  const currentlyReadingItems = useRecoilValue(currentlyReadingList);
  const finishedReadingItems = useRecoilValue(finishedReadingList);
  const setIsUserLoggedIn = useSetRecoilState(userLoginStatus);
  const navigate = useNavigate();
  const user = {...currentUser}
  function handleLogOut() {
    const confirmation = window.confirm("Do you want to logout?")
    if (confirmation) {
      setIsUserLoggedIn(false);
      const loginStatus = false
      localStorage.setItem("isUserLoggedIn", JSON.stringify(loginStatus));
      localStorage.setItem("Current User", JSON.stringify({}));
      navigate("/login");
    }

  }
  return (
    <div className={style.accountContainer}>
      <div className={style.profileInfo}>
        <div className={style.profileIcon}>
          <RiAccountCircleFill size={150} />
        </div>
        <div className={style.contactDetails}>
          <h1>{currentUser.name}</h1>
          <h3>{currentUser.email}</h3>
          {currentUser.isPremiumMember && <h3>{currentUser.planName}</h3>}
          {currentUser.isPremiumMember && <button className={style.libaraycardBtn} onClick={() => navigate("/my_library_card")}>My Library Card</button>}
        </div>
      </div>
      {/* <div className={style.otherInfo}>
        <div className={style.booksInfo}>
          <h3>Books you haven't started reading yet</h3>
          {user.myBookList.yetToStart.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
        <div className={style.booksInfo}>
          <h3>Books That You're currently reading</h3>
          {currentlyReadingItems.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
        <div className={style.booksInfo}>
          <h3>Books That you've finished reading</h3>
          {finishedReadingItems.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      </div> */}
      <button className={style.logoutBtn} onClick={handleLogOut}>
        Log Out
        <FiLogOut color="white" />
      </button>
    </div>
  );
}
