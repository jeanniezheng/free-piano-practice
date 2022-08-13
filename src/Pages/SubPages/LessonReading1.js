import React from 'react'


const LessonReading1 = () => {
    return (
        <section className="parent">
            <section className="lesson-reading-container">
                <div className="section">

                    <h1 className="reading-main-title">Welcome to lesson 1</h1>

                    <p className="reading-text">THE MUSIC ALPHABET
                        Notes are the building blocks for all music. The musical alphabet consists of seven letters: <b>A, B, C, D, E, F, G</b>. Each note has a unique pitch.</p>
                </div>

                <div className="section">

                    <h2 className="reading-title">Staff</h2>
                    <p className="reading-text"> The Staff is a set of five horizontal lines and four spaces that each represent a different musical pitch.
                        Staff notation is structured around the grand staff</p>
                </div>

                <div className="section">

                    <h2 className="reading-title">Clefs</h2>
                    <p className="reading-text"> Clefs, such as the treble clef and bass clef, tell musicians what notes those lines and spaces represent.</p>
                </div>


                <div className="section">

                    <h2 className="reading-title">Treble Clef</h2>
                    <p className="reading-text"> The top staff is usually marked with a treble clef and typically played with the right hand. The treble clef is for higher-pitched notes and it contains the notes above middle C on the piano</p>
                </div>


                <div className="section">

                    <h2 className="reading-title">Bass Clef</h2>
                    <p className="reading-text"> The bottom staff is usually marked with the bass clef and typically played with the left hand. The bass clef is for lower-pitched notes and it contains the notes below middle C on the piano</p>
                </div>


                <div className="section">

                    <h2 className="reading-title">Grand staff</h2>
                    <p className="reading-text"> When the two staves are joined on the left by a brace, they are collectively called a grand staff.</p>
                </div>


                {/* <div className="section">

                    <h2 className="reading-title">Staff</h2>
                    <p className="reading-text"> The Staff is a set of five horizontal lines and four spaces that each represent a different musical pitch.
                        Staff notation is structured around the grand staff</p>
                </div> */}


            </section>
        </section>
    )
}

export default LessonReading1