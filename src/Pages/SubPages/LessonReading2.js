import React from 'react'
import img1 from '../../Images/black-white-keys.png'
import img2 from '../../Images/C-position.png'
import img3 from '../../Images/CMiddle.png'
import img4 from '../../Images/Middle-C-svg.svg'

// import '../Images'

const LessonReading2 = () => {
    return (
        <section className="parent">
            <section className="lesson-reading-container">
                <div className="section">

                    <h1 className="reading-main-title">Welcome to lesson 2</h1>
                    <h4 className="note">This lesson requires a connected Midi piano. Please go to the setup page to ensure you are connected!</h4>

                    <p className="reading-text">Middle-C or C4 is very important in understanding music theory and playing almost any instrument. In this lesson, we will identify Middle C and the rest of the musical alphabet on the piano.</p>
                    <h2>Move onto the activity to identify Middle C on your keyboard</h2>
                    <img src="https://hellomusictheory.com/wp-content/uploads/2019/01/4.2a-1024x214.png.webp" />
                </div>
                <div className="section">
                    <h1 className="reading-title">Piano Keys</h1>

                    <p className="reading-text">The piano keys are organized into groups of two and three black keys.</p>
                    <img src={img1} />
                </div>
                <div className="section">
                    <h1 className="reading-title">Finding C</h1>

                    <p className="reading-text">the ‘C’ key lives just to the left side of the group of two black keys.</p>
                    <img src={img2} height={200} width={600} />
                </div>
                <div className="section">
                    <h1 className="reading-title">Finding Middle C</h1>

                    <p className="reading-text">The first note most piano students learn to read is Middle C. The key is right in the middle of the instrument, and generally separates the two hands  </p>
                    <img src={img4} height={200} width={700} />
                </div>

            </section>
        </section>
    )
}

export default LessonReading2