import React, { useState } from 'react'
import LessonInteractiveComp from '../LessonComponents/LessonInteractiveComp';
import LessonData1 from '../Data/LessonData1';

const LessonInteractive1 = () => {
    const [active, setActive] = useState("Staff")
    console.log(active)
    return (
        <section className="centerimg">
            <nav className="button-container">
                <button className="button-img" onClick={() => setActive("Staff")}>Staff</button>
                <button className="button-img" onClick={() => setActive("Treble")}>Treble</button>
                <button className="button-img" onClick={() => setActive("Bass")}>Bass</button>
                <button className="button-img" onClick={() => setActive("Grand")}>Grand</button>
                <button className="button-img" onClick={() => setActive("Middle C")}>Middle C</button>
                <button className="button-img" onClick={() => setActive("Treble Notes")}>Treble Notes-space</button>
                <button className="button-img" onClick={() => setActive("Treble Notes-Lines")}>Treble Notes-lines</button>

            </nav>

            <div>
                {active === "Staff" && <LessonInteractiveComp data={LessonData1} index={0} />
                }

                {active === "Treble" && <LessonInteractiveComp data={LessonData1} index={1} />
                }

                {active === "Bass" && <LessonInteractiveComp data={LessonData1} index={2} />
                }
                {active === "Grand" && <LessonInteractiveComp data={LessonData1} index={3} />
                }

                {active === "Middle C" && <LessonInteractiveComp data={LessonData1} index={4} />
                }
                {active === "Treble Notes" && <LessonInteractiveComp data={LessonData1} index={5} />
                }
                {active === "Treble Notes-Lines" && <LessonInteractiveComp data={LessonData1} index={6} />
                }

            </div>
            <button className="button" >START QUIZ</button>
        </section>
    )
}

export default LessonInteractive1;