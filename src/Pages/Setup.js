import React from 'react'
import Music from "../Music";
import { useMIDIEvent, MIDI_KEYDOWN } from "../midi";
import { useReducer, useEffect, useState } from "react";
import "../stylesheet/setup.css"

const ACTION_KEYDOWN = "ACTION_KEYDOWN";


const Setup = () => {
    const [color, setcolor] = useState('red');
    const [piano, setpiano] = useState('nothing')

    useMIDIEvent((input, event) => {
        if (event.type === MIDI_KEYDOWN) {
            setcolor("green")
            setpiano(input.name)
        }
    });


    return (
        <div>
            <h1 >Press a key</h1>
            <div style={{ backgroundColor: `${color}` }} className='check-box'></div>
            <h1>{`you are currently connected to ${piano}`}</h1>


        </div >
    )

}

export default Setup