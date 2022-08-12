import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function LessonQuiz1() {

    const questions = [
        {
            questionText: 'A set of five horizontal lines and four spaces that each represent a different musical pitch ',
            answerOptions: [
                { answerText: 'Treble', isCorrect: false },
                { answerText: 'Clef', isCorrect: false },
                { answerText: 'Staff', isCorrect: true },
                { answerText: 'Bass', isCorrect: false },
            ],
        },
        {
            questionText: 'Used for the lower sounding notes, usually played with the left hand',
            answerOptions: [
                { answerText: 'Clef', isCorrect: false },
                { answerText: 'Bass', isCorrect: true },
                { answerText: 'Staff', isCorrect: false },
                { answerText: 'Middle C', isCorrect: false },
            ],
        },
        {
            questionText: 'The Musical alphabet consists of how many letters?',
            answerOptions: [
                { answerText: '5', isCorrect: true },
                { answerText: '7', isCorrect: false },
                { answerText: '12', isCorrect: false },
                { answerText: '15', isCorrect: false },
            ],
        },
        {
            questionText: 'When two staves are joined on the left by a brace',
            answerOptions: [
                { answerText: 'Major staff', isCorrect: false },
                { answerText: 'Main staff', isCorrect: false },
                { answerText: 'Treble clef', isCorrect: false },
                { answerText: 'Grand staff', isCorrect: true },
            ],
        },
        {
            questionText: 'The top staff clef usually play with the right hand. For higher pitched notes is called:',
            answerOptions: [
                { answerText: 'Treble clef', isCorrect: true },
                { answerText: 'Main clef', isCorrect: false },
                { answerText: 'Right hand clef', isCorrect: false },
                { answerText: 'Top clef', isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    let navigate = useNavigate()

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>

                    You scored {score} out of {questions.length}
                    <div>
                        <button onClick={() => navigate('/lesson2')} > Next Lesson</button>
                    </div>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )
            }
        </div >
    );
}
