// import PlanCard from "../../components/plans/PlanCard";
// import Card from "../../components/card/Card";
import style from "./membership.module.css";

export default function Membership() {
  return (
    <div className={style.container}>
      <h1>
        Get Your <span>Library Card</span>
      </h1>
      <div className={style.allPlans}>
        {/* <PlanCard name="plan 1" />
        <PlanCard name="plan 2" />
        <PlanCard name="plan 3" /> */}
        {/* <Card /> */}
      </div>
    </div>
  );
}
