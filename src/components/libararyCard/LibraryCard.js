import React from 'react'
import style from "./librarycard.module.css"
import { RiAccountCircleFill } from "react-icons/ri"
import { useRecoilValue } from "recoil"
import { currentUserAtom } from '../../recoil/Atoms'
import cartData from '../../recoil/Atoms'
import { FaBookReader } from "react-icons/fa";


const LibraryCard = () => {
    const currentUser = useRecoilValue(currentUserAtom);
    const myBookList = useRecoilValue(cartData)

    return (
        <div className={style.libraryCardContainer}>
            <div className={style.libraryCard}>
               
                    <FaBookReader size={40}/>
                    <h1>My Library Card</h1>

               
                <div className={style.myDetails}>
                    <div className={style.profileInfo}>
                        <div className={style.profileIcon}>
                            <RiAccountCircleFill size={150} />
                        </div>
                        <div className={style.contactDetails}>
                            <h1>{currentUser.name}</h1>
                            <h3>{currentUser.email}</h3>
                            <h3>{currentUser.planName}</h3>

                        </div>
                    </div>
                    <div className={style.myBooks}>
                        <h3>My Books</h3>
                        <ul>
                            {myBookList.map((book, index) =>
                                <li key={index}>{book.name}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibraryCard
