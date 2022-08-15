import React from 'react'
import Music from "../../Music";
import { useMIDIEvent, MIDI_KEYDOWN, MIDI_KEYUP } from "../../midi";
import { useReducer } from "react";


const ACTION_KEYDOWN = "ACTION_KEYDOWN";


const reducer = (state, action) => {
    switch (action.type) {
        //if action.type is action_keydown, then expectedNote = current toPlay[position]
        case ACTION_KEYDOWN:
            console.log("action dispatched:", action);

            const expectedNote = state.toPlay[0];
            console.log("expected note:", expectedNote);
            if (expectedNote !== action.key) {
                console.log("Wrong note!");

                return {
                    ...state,
                    fontColor: "Red"
                };
            }

            else {
                return {
                    ...state,
                    fontColor: "Black",
                    toPlay: generateRandom()
                    // toPlay: setTimeout(generateRandom, 3000)
                }

            }

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}


const generateRandom = () => {
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const num = ["4", "5"]

    const new_note = notes[Math.floor(Math.random() * notes.length)] + num[Math.floor(Math.random() * num.length)];



    return new_note

}

const LessonInteractive2 = () => {

    const [state, dispatch] = useReducer(reducer, {
        toPlay: 'C4',
        fontColor: 'Black'
    });

    useMIDIEvent((input, event) => {
        if (event.type === MIDI_KEYDOWN) {
            dispatch({
                type: ACTION_KEYDOWN,
                key: event.key[0],
            });
        }
    });

    //have a class name called red. if bahbahbah then red else green

    return (
        <section className="parent">

            <div className='lesson-reading-container section' >
                <h1 className="reading-title">Please Connect Piano</h1>
                <h3>On your keyboard, press the note:</h3>
                <h2 className={`${state.fontColor} piano-note`}> {state.toPlay[0]}</h2>
                {state.fontColor === "Red" && <h1>Wrong Note, try again</h1>}
                {/* <Music className="staff"
                notes={notesToEasyScore(state.toPlay)}
            /> */}
            </div>
        </section>

    )
}

export default LessonInteractive2