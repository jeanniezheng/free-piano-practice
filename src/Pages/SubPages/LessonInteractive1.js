import React, { useState } from 'react'
import LessonInteractiveComp from '../LessonComponents/LessonInteractiveComp';
import LessonData1 from '../Data/LessonData1';

const LessonInteractive1 = () => {
    const [active, setActive] = useState("Staff")
    console.log(active)
    return (
        <section className="center">
            <nav>
                <button onClick={() => setActive("Staff")}>Staff</button>
                <button onClick={() => setActive("Treble")}>Treble</button>
                <button onClick={() => setActive("Bass")}>Bass</button>
            </nav>
            {/* 
            <div>
                {active === "Staff" && <LessonInteractiveComp data="Staff" image="https://upload.wikimedia.org/wikipedia/commons/2/20/Music-staff.svg" />
                }

                {active === "Treble" && <LessonInteractiveComp data="Treble" image="https://upload.wikimedia.org/wikipedia/commons/f/fa/Treble_clef.svg" />
                }

                {active === "Bass" && <LessonInteractiveComp data="Bass" image="https://upload.wikimedia.org/wikipedia/commons/6/61/Bass_clef.svg" />
                }

            </div> */}

            <div>
                {active === "Staff" && <LessonInteractiveComp data={LessonData1} image="https://upload.wikimedia.org/wikipedia/commons/2/20/Music-staff.svg" index={0} />
                }

                {active === "Treble" && <LessonInteractiveComp data={LessonData1} image="https://upload.wikimedia.org/wikipedia/commons/f/fa/Treble_clef.svg" index={1} />
                }

                {active === "Bass" && <LessonInteractiveComp data={LessonData1} image="https://upload.wikimedia.org/wikipedia/commons/6/61/Bass_clef.svg" index={2} />
                }

            </div>
            <button className="button" >START QUIZ</button>
        </section>
    )
}

export default LessonInteractive1;