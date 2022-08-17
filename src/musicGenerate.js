import React from 'react'
import Music from "./Music";
import { useMIDIEvent, MIDI_KEYDOWN, MIDI_KEYUP } from "./midi";
import { useReducer } from "react";
import "./stylesheet/musicGenerate.css"
import "./App.css"

const notesToEasyScore = (notes) =>
    [notes[0] + "/q", ...notes.slice(1)].join(", ");

const ACTION_KEYDOWN = "ACTION_KEYDOWN";

const reducer = (state, action) => {
    switch (action.type) {
        //if action.type is action_keydown, then expectedNote = current toPlay[position]
        case ACTION_KEYDOWN:
            console.log("action dispatched:", action);

            const expectedNote = state.toPlay[state.position];
            console.log("expected note:", expectedNote);
            if (expectedNote !== action.key) {
                console.log("Wrong note!");
                return {
                    ...state,
                    correctNote: false
                };
            }

            if (state.position + 1 == state.toPlay.length) {
                // if this was the last note
                return {
                    ...state,
                    toPlay: generateRandom(), // TODO: generate the notes randomly
                    position: 0,
                    correctNote: true
                };
            }

            // otherwise, advance the position
            return {
                ...state,
                position: state.position + 1,
            };

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

const generateRandom = () => {
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const num = ["4", "5"]

    const new_note_list = []
    while (new_note_list.length < 4) {
        const new_note = notes[Math.floor(Math.random() * notes.length)] + num[Math.floor(Math.random() * num.length)];
        new_note_list.push(new_note)
    }

    return new_note_list

}

const MusicGenerate = () => {

    const [state, dispatch] = useReducer(reducer, {
        toPlay: generateRandom(),
        position: 0,
        correctNote: true
    });

    useMIDIEvent((input, event) => {
        if (event.type === MIDI_KEYDOWN) {
            dispatch({
                type: ACTION_KEYDOWN,
                key: event.key,
            });
        }
    });

    return (
        <div className='parent'>

            <div className='lesson-reading-container section'>
                <h1>On your Piano, press the note:</h1>
                <Music className="staff"
                    notes={notesToEasyScore(state.toPlay)}
                    highlightedNotes={[...Array(state.position).keys()]}
                />
            </div>
        </div>

    )
}

export default MusicGenerate