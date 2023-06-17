import style from "./myBookComponent.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

export default function MyBookComponent({ item, index }) {
  const [starred, setStarred] = useState(false);
  return (
    <div key={item.id} className={style.myBook}>
      <div className={style.top}>
        <div className={style.book}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
        <div className={style.star}>
          <p onClick={() => setStarred(!starred)}>
            {starred ? (
              <AiFillStar size={30} color="rgba(124, 9, 9, 0.801)" />
            ) : (
              <AiOutlineStar size={30} color="rgba(124, 9, 9, 0.801)" />
            )}
          </p>
        </div>
      </div>

      <div className={style.bottom}>
        <button>Return</button>
        <button>ReIssue</button>
        {/* <select>
          <option>Yet to start</option>
          <option>Currently reading</option>
          <option>Finished reading</option>
        </select> */}
      </div>
    </div>
  );
}
