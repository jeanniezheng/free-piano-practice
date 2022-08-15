import React from 'react'
import img1 from '../../Images/bass_line_notes.png'
import img2 from '../../Images/bass_space_notes.png'
import img3 from '../../Images/CMiddle.png'
import img4 from '../../Images/Middle-C-svg.svg'

// import '../Images'

const LessonReading3 = () => {
    return (
        <section className="parent">
            <section className="lesson-reading-container">
                <div className="section">

                    <h1 className="reading-main-title">Welcome to lesson 3</h1>
                    <h4 className="note">This lesson requires a connected Midi piano. Please go to the setup page to ensure you are connected!</h4>

                    <p className="reading-text">One of the first steps in learning to read music in a particular clef is memorizing where the notes are. Here are some of the most popular mnemonics used.
                    </p>

                    <h1 className='reading-title'>Treble clef</h1>



                    <h1><b>Lines</b>: <b>E</b>ating <b>G</b>reen <b>B</b>ananas <b>D</b>isgusts <b>F</b>riends</h1>

                    <img className="lesson-img" src="https://pianomusictheory.files.wordpress.com/2016/05/treble_line_notes.png" />
                    <h1 className="reading-title">Spaces: F A C E</h1>

                    <img className="lesson-img" src=" https://pianomusictheory.files.wordpress.com/2016/05/notes_above_c.png" />


                    <h1 className='reading-title'>Bass clef</h1>


                    <h1><b>Lines</b>: <b>G</b>reen <b>B</b>uses <b>D</b>rive <b>F</b>ast <b>a</b>lways</h1>

                    <img className="lesson-img" src={img1} />
                    <h1> <b>Spaces</b>: <b>A</b>ll <b>C</b>ows <b>E</b>at <b>G</b>rass</h1>

                    <img className="lesson-img" src={img2} />





                </div>



            </section>
        </section>
    )
}

export default LessonReading3