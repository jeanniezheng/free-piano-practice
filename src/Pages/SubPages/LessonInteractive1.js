import React, { useState, } from 'react'
import LessonInteractiveComp from '../LessonComponents/LessonInteractiveComp';
import LessonData1 from '../Data/LessonData1';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import LessonQuiz1 from './LessonQuiz1';



const LessonInteractive1 = () => {
    const [active, setActive] = useState("Staff")
    console.log(active)
    let navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            {/* <button onClick={() => { navigate("/lessonquiz1") }} className="button" >START QUIZ</button> */}
            <div>

                <Button className="modal-button" variant='second' onClick={handleShow}>
                    Take Quiz
                </Button>

                <Modal aria-labelledby="contained-modal-title-vcenter"
                    centered show={show} onHide={handleClose} animation={true}>
                    <Modal.Header className="modal-header" closeButton>
                        Quiz
                        {/* <Modal.Title className="modal-header">Quiz</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body><LessonQuiz1 /></Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        </section>
    )
}

export default LessonInteractive1;