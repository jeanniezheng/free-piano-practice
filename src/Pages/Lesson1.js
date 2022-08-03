import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMusic, faFileAudio, faGear } from '@fortawesome/free-solid-svg-icons'

import MusicGenerate from '../musicGenerate'
import "../stylesheet/lessons.css"
import Music from '../Music'
import { useNavigate } from 'react-router-dom'


function Lesson1() {
    let navigate = useNavigate();

    return (
        <>
            <section className='center'>
                <div>
                    <button onClick={() => {
                        navigate("/setup")
                    }}> <FontAwesomeIcon className="icon" icon={faGear} size="lg" /> Setup
                    </button>
                </div>

                <div className="button-div">

                    <button onClick={() => {
                        navigate("/profile")
                    }}> <FontAwesomeIcon className="icon" icon={faCoffee} size="lg" /> Sheet Music
                    </button>


                </div>
                <div>

                    <button><FontAwesomeIcon className="icon" icon={faMusic} size="lg" />THIS IS LESSON2</button>
                </div>
                <div>
                    <button><FontAwesomeIcon className="icon" icon={faFileAudio} size="lg" />THIS IS LESSON3</button>
                </div>
                <div>

                    <button>THIS IS LESSON4</button>
                </div>
                {/* <MusicGenerate /> */}
            </section>


        </>

    )
}

export default Lesson1