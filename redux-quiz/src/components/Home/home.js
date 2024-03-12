import React, { useContext } from "react";

import Header from "../Header/header";
import './home.css'



import { useNavigate } from "react-router-dom";

import questionsData from "../../data";


import { useDispatch, useSelector } from "react-redux";
import onIncrease from "../../reduxContainer/action";
import { countUp, onLock, offLock } from "../../reduxContainer/action";


const Home = () => {
    //const {count, setCount, lock, setlock, score, setScore, questionsData} = useContext(quizState)
    
    const count = useSelector(state => state.count)
    const lock = useSelector(state => state.lock)

    const dispatch = useDispatch()


    
    
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    console.log(token)

    const onIncrement = () => {    
        
        //const dataLen = questionsData.length
        if (lock ) {
            dispatch(offLock())
            //const length = dataLen-1
            const length = 10 - 1
            if (count < length) {
                for (var i=1 ; i<5 ; i++ ) {
                    i = i.toString()
                    document.getElementById(i).classList.remove("wrong")
                    document.getElementById(i).classList.remove("correct")
                }
                dispatch(countUp())
            }
            else {
                navigate("/results")
            }
            
        }
        
        
        
    }

    const onClickoption = (e, answer) => {
        
        const {ans} = questionsData[count]
        if (lock === false) {
            if (answer === ans) {
                e.target.classList.add("correct")
                dispatch(onLock())
                dispatch(onIncrease())
            }
            else {
                e.target.classList.add("wrong")
                dispatch(onLock())
                var x = ans.toString()
                document.getElementById(x).classList.add("correct")
            }
        }
        

    }
    
        
        const {question, option1, option2, option3, option4} = questionsData[count]
        

        return (
            <div className="home-bg-container">
                <Header />
                <div className="home-page-main-holder">
                    <h1 className="welcome-headline">Welcome to My Quiz Where Knowledge Meets Excitement!</h1>
                    
                    <div className="screen-container">
                        <div className="question-container">
                            <h2 className="question">{question}</h2>
                            <hr className="hor-line"/>
                            <ul className="option-ul-container">
                                <li id="1" onClick={(e) => {onClickoption(e, 1)}} className="options-li">{option1}</li>
                                <li id="2" onClick={(e) => {onClickoption(e, 2)}} className="options-li">{option2}</li>
                                <li id="3" onClick={(e) => {onClickoption(e, 3)}} className="options-li">{option3}</li>
                                <li id="4" onClick={(e) => {onClickoption(e, 4)}} className="options-li">{option4}</li>
                            </ul>
                            <button className="next-button" onClick={onIncrement}>Next</button>
                            <div className="index">{count + 1} of 100 questions</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default Home