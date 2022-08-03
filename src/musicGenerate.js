import React from 'react'
import Music from "./Music";
import { useMIDIEvent, MIDI_KEYDOWN, MIDI_KEYUP } from "./midi";
import { useReducer } from "react";
import "./stylesheet/musicGenerate.css"
import "./App.css"

const notesToEasyScore = (notes) =>
    [notes[0] + "/q", ...notes.slice(1)].join(", ");

const ACTION_KEYDOWN = "ACTION_KEYDOWN";

/*
The events will be encoded as:
{
  type: ACTION_KEYDOWN,
  key: "C4"
}
*/

function reducer(state, action) {
    switch (action.type) {
        case ACTION_KEYDOWN:
            console.log("action dispatched:", action);

            const expectedNote = state.toPlay[state.position];
            console.log("expected note:", expectedNote);
            if (expectedNote !== action.key) {
                console.log("Wrong note!");
                return state;
            }

            if (state.position + 1 == state.toPlay.length) {
                // if this was the last note
                return {
                    ...state,
                    toPlay: generateRandom(), // TODO: generate the notes randomly
                    position: 0,
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

function MusicGenerate() {
    const [state, dispatch] = useReducer(reducer, {
        toPlay: generateRandom(),
        position: 0,
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
        <div >
            <h1>Please Connect Piano</h1>
            <Music className="staff"
                notes={notesToEasyScore(state.toPlay)}
                highlightedNotes={[...Array(state.position).keys()]}
            />
        </div>

    )
}

export default MusicGenerate