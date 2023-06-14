import { useRecoilValue } from "recoil";
import MyBookComponent from "../../components/myBookComponent/MyBookComponent";
import cartData from "../../recoil/Atoms";
import style from "./cart.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function MyBooks() {
  const myBooks = useRecoilValue(cartData);
  const navigate = useNavigate();

  return (
    <div className={style.cartContainer}>
      {/* {myBooks === null ? ( */}
      {myBooks && (
        <div className={style.addBooks}>
          <h2>Add books to your list</h2>
          <button
            className={style.exploreBtn}
            onClick={() => navigate("/categories")}
          >
            Explore Library
            <MdKeyboardArrowRight size={35} />
          </button>
        </div>
      )}
      <div className={style.myBooksContainer}>
        {myBooks.map((item, index) => (
          <MyBookComponent item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
