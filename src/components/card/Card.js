import { useRecoilState, useRecoilValue } from "recoil";
import cartData, { userLoginStatus } from "../../recoil/Atoms";
import style from "./card.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Card({ card, index }) {
  const [isAdded, setIsAdded] = useState(false);
  const [myBookList, setMyBookList] = useRecoilState(cartData);
  const isUserLoggedIn = useRecoilValue(userLoginStatus);
  const navigate = useNavigate();

  function handleAddItems(index) {
    if (isUserLoggedIn) {
      setIsAdded(true);
      alert(`added ${card.name} to your list`);
      setMyBookList([...myBookList, card]);
      console.log(myBookList);
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
