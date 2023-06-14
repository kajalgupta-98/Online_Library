import Category from "../../components/category/Category";
import style from "./categories.module.css";

export default function Categories() {
  return (
    <div className={style.container}>
      <Category type="Fiction" color="#9022f0" id="fiction" />
      <Category type="Self-help Books" color="#fcba03" id="self_help_books" />
      <Category type="Non-Fiction" color="brown" id="non-fiction" />
      <Category type="Autobiographies" color="#47c4f5" id="autobiographies" />
      <Category type="Finance/Money" color="#f75b0c" id="finance-money" />
      <Category type="Science" color="#0732f2" id="science" />
    </div>
  );
}
