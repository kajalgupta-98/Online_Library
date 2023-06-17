import PlanCard from "../../components/planCard/PlanCard";
// import Card from "../../components/card/Card";
import style from "./membership.module.css";

export default function Membership() {
  return (
    <div className={style.container}>
      <h1>
        Get Your <span>Library Card</span>
      </h1>
      <div className={style.allPlans}>
        <PlanCard name="The Player" books="5" days="7" fee="250"/>
        <PlanCard name="The Catharsis Seeker" books="7" days="10" fee="350"/>
        <PlanCard name="The Binge Reader" books="10" days="14" fee="500"/>
        {/* <Card /> */}
      </div>
    </div>
  );
}
