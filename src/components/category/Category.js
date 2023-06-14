import style from "./category.module.css";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { booksCategoryId } from "../../recoil/Atoms";

export default function Category({ type, color, id }) {
  const navigate = useNavigate();
  const setBookCategory = useSetRecoilState(booksCategoryId);

  function handleClick() {
    navigate(`/categories/${id}`);
    setBookCategory(type);
  }
  return (
    <div
      className={style.container}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {type}
    </div>
  );
}
