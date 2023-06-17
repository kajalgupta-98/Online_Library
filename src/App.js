import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/signUp";
import Categories from "./pages/Categories/Categories";
import MyBooks from "./pages/myBooks/MyBooks";
import Navbar from "./components/navbar/Navbar";
import Membership from "./pages/membership/Membership";
import { useRecoilValue } from "recoil";
import { userLoginStatus } from "./recoil/Atoms";
import Books from "./pages/books/Books";
import UserAccount from "./pages/userAccount/UserAccount";
import LibraryCard from "./components/libararyCard/LibraryCard";

export default function App() {
  const isUserLoggedIn = useRecoilValue(userLoginStatus);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={isUserLoggedIn ? <Navigate to={"/"} /> : <Login />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Books />} />
          {/* </Route> */}
          <Route path="/my_books" element={<MyBooks />} />
          <Route path="/get_library_card" element={<Membership />} />
          <Route path="/myaccount" element={<UserAccount />} />
          <Route path ="/my_library_card" element={<LibraryCard/>}/>
          <Route path="/*" element={<>ERROR</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
