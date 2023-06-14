import { currentUserAtom, userLoginStatus } from "../../recoil/Atoms";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { useSetRecoilState, useRecoilState } from "recoil";

export default function Login() {
  const inputRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const setIsUserLoggedIn = useSetRecoilState(userLoginStatus);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleLoginSubmit(event) {
    event.preventDefault();
    let holder = JSON.parse(localStorage.getItem("Details"));
    if (holder) {
      const isUserExists = holder.find(
        (user) => user.email === email && user.password === password
      );

      if (isUserExists) {
        // console.log("user exists");
        setIsUserLoggedIn(true);
        setCurrentUser({
          name: isUserExists.name,
          email: isUserExists.email,
          myBookList: {
            yetToStart: [],
            currentlyReading: [],
            finishedReading: []
          }
        });
        localStorage.setItem("Current User", JSON.stringify(currentUser));
        navigate("/");
      } else {
        console.log("user not found");
        setError("Invalid Credentials");
      }
    } else {
      alert("Create an account first");
      navigate("/signUp");
    }
  }
  return (
    <div className={style.loginContainer}>
      <form onSubmit={handleLoginSubmit} className={style.loginForm}>
        <h1>Login to your account</h1>
        {error && <span>{error}</span>}
        <input
          type="email"
          placeholder="Enter your Email Id"
          onChange={(e) => setEmail(e.target.value)}
          ref={inputRef}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={style.loginBtn}>
          Login
        </button>
        <p>
          New user <Link to={"/signUp"}>Register here</Link>
        </p>
      </form>
    </div>
  );
}
