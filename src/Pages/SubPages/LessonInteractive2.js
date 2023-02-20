import { React, useReducer } from 'react'
import Music from "../../Music";
import { useMIDIEvent, MIDI_KEYDOWN, MIDI_KEYUP } from "../../midi";


const ACTION_KEYDOWN = "ACTION_KEYDOWN";

// If action.type === action_keydown and action.key === expectedNote, then expectedNote should be red. Else, the expectedNote should be black and new expectedNote should be rendered
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_KEYDOWN:
            console.log("action dispatched:", action);
            const expectedNote = state.toPlay[0];
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
                }
            }
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

//Generate random random piano notes(expectedNote) from octive 4 to 5
const generateRandom = () => {
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const num = ["4", "5"]
    const new_note = notes[Math.floor(Math.random() * notes.length)] + num[Math.floor(Math.random() * num.length)];
    return new_note

}

// Renders the note needed to be played, listens to the MIDIEvent and rerenders depending on note played
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

    return (
        <section className="parent">
            <div className='lesson-reading-container section' >
                <h1 className="reading-title">Please Connect Piano</h1>
                <h3>On your keyboard, press the note:</h3>
                <h2 className={`${state.fontColor} piano-note`}> {state.toPlay.slice()}</h2>
                {state.fontColor === "Red" && <h1>Wrong Note, try again</h1>}
            </div>
        </section>
    )
}
export default LessonInteractive2