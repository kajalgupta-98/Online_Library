import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import cartData, { currentUserAtom, userLoginStatus, yetToStartList } from "../../recoil/Atoms";
import style from "./card.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Card({ card, index }) {
  // const book = JSON.parse(localStorage.getItem("My Books"))
  const [isAdded, setIsAdded] = useState(false);
  const [myBookList, setMyBookList] = useRecoilState(cartData);
  const isUserLoggedIn = useRecoilValue(userLoginStatus);
  const currentUser = useRecoilValue(currentUserAtom)
  // const setYetToStartItems = useSetRecoilState(yetToStartList)
  const navigate = useNavigate();


  function handleAddItems(index) {
    if (isUserLoggedIn) {
      if (currentUser.isPremiumMember) {
        setIsAdded(true);
        // card.isAdded = true
        alert(`added ${card.name} to your list`);
        const store = [...myBookList, card]
        setMyBookList(store);
        const holder = {...currentUser}
        const newList = {...holder.myBookList, yetToStart:[...store]}
        const updated = {...holder, myBookList: newList}
        localStorage.setItem("My Books", JSON.stringify(store));
        localStorage.setItem("Current User", JSON.stringify(updated))
        console.log(myBookList);
      } else{
        alert("Take subscription today to enjoy reading books!")
        navigate("/get_library_card")
      }

    } else {
      alert("First login to your account");
      navigate("/login");
    }
  }
  return (
    <div className={style.cardContainer}>
      <img src={card.image} alt={card.name} />
      <h3>{card.name}</h3>
      <div className={style.bottom}>
        {isAdded ? (
          <button>Added</button>
        ) : (
          <button onClick={() => handleAddItems(index)}>Add</button>
        )}
      </div>
    </div>
  );
}
