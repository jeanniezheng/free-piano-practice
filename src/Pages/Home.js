import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GenerateQuote from '../components/GenerateQuote'
import Lesson1 from './Lesson1'
import { useNavigate } from 'react-router-dom'
import "../stylesheet/lessons.css"
import "../stylesheet/home.css"



function Home() {
    return (
        <div>
            <div className="welcome">Welcome to freePianoPractice.com</div>

            <GenerateQuote className="quote" />
            <Lesson1 className="lesson-one" />
            <FontAwesomeIcon icon={('user-secret')} />

        </div>

    )
}

export default Home