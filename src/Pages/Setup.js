import React from 'react'
import Music from "../Music";
import { useMIDIEvent, MIDI_KEYDOWN, MIDI_KEYUP } from "../midi";
import { useReducer, useEffect, useState } from "react";
import "../stylesheet/setup.css"


// TODO: support different amount of notes than 4
const notesToEasyScore = (notes) =>
    [notes[0] + "/q", ...notes.slice(1)].join(", ");

const ACTION_KEYDOWN = "ACTION_KEYDOWN";

/*
The events will be encoded as:
{
  type: ACTION_KEYDOWN,
  keys: {"C4", "C3", "C4"}
}
*/

function reducer(state, action) {
    switch (action.type) {
        //if action.type is ACTION_KEYDOWN then expected Note = current position
        case ACTION_KEYDOWN:
            console.log("action dispatched:", action);

            // const expectedNote = state.toPlay[state.position];
            // console.log("expected note:", expectedNote);
            // if (expectedNote !== action.key) {
            //     console.log("Wrong note!");
            //     console.log(state)
            //     return state;
            // }

            // if (state.position + 1 === state.toPlay.length) {
            //     // if this was the last note
            //     return {
            //         ...state,
            //         toPlay: generateRandom(), // TODO: generate the notes randomly
            //         position: 0,
            //     };
            // }

            // otherwise, advance the position
            const pass = "Pass"
            const fail = "Fail"
            return pass;

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}










const Setup = () => {
    const [color, setcolor] = useState('red');
    const [piano, setpiano] = useState('nothing')

    // const [state, dispatch] = useReducer(reducer, {
    //     // toPlay: ["D5", "D4", "D4", "D4"],
    //     // [["C4, C6"], ["C3"], [] ]
    //     //Update storage
    //     toPlay: generateRandom(),

    //     position: 0,
    // });

    //DISPATCH is putting in the 'action' in reducer

    let inputName = ""
    useMIDIEvent((input, event) => {
        if (event.type === MIDI_KEYDOWN) {
            // console.log(passing)
            console.log("PASS")
            setcolor("green")
            setpiano(input.name)
            console.log(piano)
        }

    });
    let passing = "black"


    return (
        <div>
            <h1 >Press a key</h1>
            <div style={{ backgroundColor: `${color}` }} className='check-box'></div>
            <h1>{`you are currently connected to ${piano}`}</h1>
            <button onChange={() => (setcolor('red'))} className='restart-button'>restart</button>
            {/* <Music
                //notes = note key letters ? "D3" 
                notes={notesToEasyScore(state.toPlay)}
                //Highlightednotes = index values that are correct
                highlightedNotes={[...Array(state.position).keys()]}
            /> */}
        </div >
    )

}

export default Setup