// import Carousel from "../../components/homecarousel/Carousel";
import style from "./home.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={style.homeContainer}>
      <div className={style.text}>
        <h2>
          Get all the <span>books</span> <br /> that you <span>love</span>{" "}
          here...
        </h2>
        <p>
          <em>
            <strong>
              {" "}
              "Books and doors are the same thing.
              <br /> You open them, and you go through <br />
              into another world."
            </strong>
          </em>
        </p>
      </div>

      <button
        className={style.exploreBtn}
        onClick={() => navigate("/categories")}
      >
        Explore Library
        <MdKeyboardArrowRight size={35} />
      </button>
    </div>
  );
}
