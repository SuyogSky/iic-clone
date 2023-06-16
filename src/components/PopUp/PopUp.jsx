import React, { useState } from "react";
import './PopUp.scss'
import PopUpImg from '../../assets/Images/popup.png'
import { RxCross2 } from 'react-icons/rx'
const PopUp = () => {
    const [popup, setPopUp] = useState("flex")
    const closePopUp = () => {
        setPopUp("none");
    }
    return(
        <section className="pop-up" style={{'display': popup}}>
            <div className="img">
                <img src={PopUpImg} alt="" />
                <span onClick={()=>closePopUp()}><RxCross2/></span>
            </div>
        </section>
    )
}

export default PopUp;