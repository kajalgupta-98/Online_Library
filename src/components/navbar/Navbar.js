import style from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { userLoginStatus } from "../../recoil/Atoms";
import ToolTip from "@mui/material/Tooltip";

export default function Navbar() {
  const isUserLoggedIn = useRecoilValue(userLoginStatus);
  const navigate = useNavigate();

  return (
    <div className={style.navbar}>
      <h1 className={style.logo} onClick={() => navigate("/")}>
        <FaBookReader size={40} color="brown " />
      </h1>
      <ul>
        {!isUserLoggedIn && <Link to={"/"}>Home</Link>}
        <Link to={"/categories"}>Categories</Link>
        {isUserLoggedIn && <Link to={"/my_books"}>My Books</Link>}
        <Link to={"/get_library_card"}>Membership</Link>
        {isUserLoggedIn && (
          <ToolTip title="Join the library room">
            <h2>
              <a href={"https://zoom.us/"} target="_main">
                <MdOutlineMeetingRoom color="brown" />
              </a>
            </h2>
          </ToolTip>
        )}
        {isUserLoggedIn ? (
          <h2 onClick={() => navigate("/myaccount")}>
            <RiAccountCircleFill size={40} />
          </h2>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </ul>
    </div>
  );
}
