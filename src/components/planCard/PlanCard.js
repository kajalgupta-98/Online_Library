import React from 'react'
import style from "./planCard.module.css"
import { useRecoilValue, useRecoilState } from "recoil"
import { userLoginStatus, currentUserAtom } from "../../recoil/Atoms"
import { useNavigate } from "react-router-dom"

const PlanCard = ({ name, books, days, fee }) => {
  const isUserLoggedIn = useRecoilValue(userLoginStatus)
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom)

  function handleSubscription() {
    const confirmation = window.confirm("Do you want purchase this plan?")
    if (confirmation) {
      alert(`Congratulations! You're now a ${name}'s club member`)
      const store = { ...currentUser, isPremiumMember: true, planName: name }
      setCurrentUser(store)
      localStorage.setItem("Current User", JSON.stringify(store));
      navigate("/my_library_card")
    }
  }

  function handlePayment() {
    if (!isUserLoggedIn) {
      alert("Login to your account")
      navigate("/login")
    } else {
      if (currentUser.isPremiumMember) {
        alert(`you are already in ${currentUser.planName} club`)
        const confirmChangePlan = window.confirm("Do you want to change the plan?")
        if (confirmChangePlan) {
          handleSubscription();
        }
      } else {
        handleSubscription();
      }

    }
  }
  return (
    <div className={style.container}>
      <h2 className={style.planName}>{name}</h2>
      <ul className={style.planFeatures}>
        <li>Get {books} books issued simultaneously</li>
        <li>{days} days return or reissue</li>
        <li>24x7 access to library room</li>
      </ul>
      <h2 className={style.fees}>₹{fee}/-</h2>
      <button className={style.continueBtn} onClick={handlePayment}>Continue</button>
    </div>
  )
}

export default PlanCard
