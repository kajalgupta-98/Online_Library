import { useRecoilValue } from "recoil";
import { booksCategoryId } from "../../recoil/Atoms";
import style from "./books.module.css";
import {
  autobiographies,
  selfHelp,
  nonFiction,
  fiction,
  finance,
  science
} from "../../Data";
import Card from "../../components/card/Card";

export default function Books() {
  const bookCategory = useRecoilValue(booksCategoryId);
  // const image =
  //   "url(https://hips.hearstapps.com/hmg-prod/images/index-climate-1-643ee51098aec.jpg)";

  const styles =
    bookCategory === "Fiction"
      ? {
          backgroundImage: `url("https://hips.hearstapps.com/hmg-prod/images/index-climate-1-643ee51098aec.jpg")`
        }
      : bookCategory === "Non-Fiction"
      ? {
          backgroundImage: `url("https://womensprizeforfiction.co.uk/wp-content/uploads/Non-Fic-UGC.jpg")`
        }
      : bookCategory === "Self-help Books"
      ? {
          backgroundImage: `url("https://m.media-amazon.com/images/G/01/seo/siege-lists/best-self-help-audiobooks-social.jpg")`
        }
      : bookCategory === "Finance/Money"
      ? {
          backgroundImage: `url("https://www.york.ac.uk/media/business-society/about/finance-at-york/Finance-at-York-banner-1200x600.jpg")`
        }
      : bookCategory === "Science"
      ? {
          backgroundImage: `url("https://t4.ftcdn.net/jpg/02/49/84/63/360_F_249846382_p4VKaPTzoeVKIvQvzgDwrAq2lY3J3oni.jpg")`,
          color: "white"
        }
      : null;
  return (
    <div className={style.booksContainer} style={styles}>
      <h1>{bookCategory}</h1>
      <div className={style.books}>
        {bookCategory === "Autobiographies"
          ? autobiographies.map((item, index) => (
              <Card card={item} index={index} key={index} />
            ))
          : bookCategory === "Non-Fiction"
          ? nonFiction.map((item, index) => <Card card={item} index={index} />)
          : bookCategory === "Self-help Books"
          ? selfHelp.map((item, index) => <Card card={item} index={index} />)
          : bookCategory === "Fiction"
          ? fiction.map((item, index) => <Card card={item} index={index} />)
          : bookCategory === "Finance/Money"
          ? finance.map((item, index) => <Card card={item} index={index} />)
          : bookCategory === "Science"
          ? science.map((item, index) => <Card card={item} index={index} />)
          : null}
      </div>
    </div>
  );
}
