import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMusic, faFileAudio, faGear } from '@fortawesome/free-solid-svg-icons'

import MusicGenerate from '../musicGenerate'
import "../stylesheet/lessons.css"
import Music from '../Music'
import { useNavigate } from 'react-router-dom'


function LessonDisplay() {
    let navigate = useNavigate();

    return (
        <>
            <section className='center'>
                <div>
                    <button className='button' onClick={() => {
                        navigate("/setup")
                    }}> <FontAwesomeIcon className="icon" icon={faGear} size="lg" /> Setup
                    </button>
                </div>

                <div className="button-div">

                    <button className='button' onClick={() => {
                        navigate("/lesson1")
                    }}> <FontAwesomeIcon className="icon" icon={faCoffee} size="lg" /> Lesson 1
                    </button>


                </div>
                <div>

                    <button className='button' ><FontAwesomeIcon className="icon" icon={faMusic} size="lg" />THIS IS LESSON2</button>
                </div>
                <div>
                    <button className='button' ><FontAwesomeIcon className="icon" icon={faFileAudio} size="lg" />THIS IS LESSON3</button>
                </div>
                <div>

                    <button className='button'>THIS IS LESSON4</button>
                </div>
                {/* <MusicGenerate /> */}
            </section>


        </>

    )
}

export default LessonDisplay