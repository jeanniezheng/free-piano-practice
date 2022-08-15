import Music from "../Music";
import "../App.css"
import MusicBass from "../MusicBass"

import { useMIDIEvent, MIDI_KEYDOWN, MIDI_KEYUP } from "../midi";
import { useReducer } from "react";

const notesToEasyScore = (notes) =>
    [notes[0] + "/q", ...notes.slice(1)].join(", ");


const ACTION_KEYDOWN = "ACTION_KEYDOWN";

function reducer(state, action) {
    switch (action.type) {
        case ACTION_KEYDOWN:
            console.log("action dispatched:", action);

            //current position of note that needs to be played 
            const expectedNote = state.toPlay[state.position];
            console.log("expected note:", expectedNote);

            //if that note is NOT to the key action PRESSED 
            if (expectedNote !== action.key) {
                console.log("Wrong note!");
                return state;
            }
            let counter = 0


            if (state.position + 1 == state.toPlay.length) {
                // if this was the last note
                console.log("generate random")
                console.log("NOTESTOEASY", notesToEasyScore(state.toPlay))
                return {
                    ...state,
                    toPlay: generateRandom(musicNote),
                    toPlayBass: generateRandomBass(musicNoteBass),
                    toPlayMuse: generateRandomMuse(musicNoteEasyScore),  // TODO: generate the notes randomly
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



let musicNote = [
    [2], ['F4', 'G4', 'A4', 'C5'],
    [3], ['B4', "A4", "G4", "F4"],
    [4], ["E4"],
    [5], ['A4', "G4", "F4", 'E4'],
    [6], ['D4', "E4", "F4", "A4"],
    [7], ['G#4', "F4", 'E4', 'D4'],
    [8], ["C4"],
    [9], ["E4", "C5", "B4", "A4"],
    [10], ["E4", "E5", "D#5", "E5"],
    [11], ["E4", "E5", "D#5", "E5"],
    [12], ["D#5", "E5", "B5", "D5"],
    [13], ["F5", "F5", "F5", "F5"],
    [14], ["E5", "B4", "D5", "C5"], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"]]

let musicNoteEasyScore = [
    [2], ['F4/q', 'G4', 'A4', 'C5'],
    [3], ['B4/q', "A4", "G4", "F4"],
    [4], ["E4/w"],
    [5], ['A4/q', "G4", "F4", 'E4'],
    [6], ['D4/q', "E4", "F4", "A4"],
    [7], ['G#4/q', "F4", 'E4', 'D4'],
    [8], ["C4/w"],
    [9], ["E4/q", "C5", "B4", "A4"],
    [10], ["D#5/q", "E5", "B5", "D5"],
    [11], ["E5", "B4", "D5", "C5"],
    [12], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"]]

let musicNoteBass = [
    [1], ["(D3 F3 A3)/w"],
    [2], ["(G3 B3 D4)/w"],
    [3], ["(C3 E3 G3)/w"],
    [4], ["(F3 A3 C4)/w"],
    [5], ["(B2 D3 F3)/w"],
    [6], ["(E3 G#3 B3)/w"],
    [7], ['A1/q', 'E2/q', 'A2/h'],
    [8], ["C3/q", "C3", "C3", "C3"],
    [9], ["C3/q", "C3", "C3", "C3"], ["C3/q", "C3", "C3", "C3"], ["C3/q", "C3", "C3", "C3"], ["C3", "C3", "C3", "C3"], ["C3", "C3", "C3", "C3"], ["C3", "C3", "C3", "C3"], ["C3", "C3", "C3", "C3"], ["C5", "C5", "C5", "C5"], ["C5", "C5", "C5", "C5"], ["C5", "C5", "C5", "C5"], ["C5", "C5", "C5", "C5"], ["C5", "C5", "C5", "C5"], ["C5", "C5", "C5", "C5"], ["C5", "C5", "C5", "C5"], ["C5", "C5", "C5", "C5"], ["C5", "C5", "C5", "C5"],
    [], ["E5", "B4", "D5", "C5"], ["E5", "B4", "D5", "C5"], ["E5", "B4", "D5", "C5"], ["E5", "B4", "D5", "C5"], ["F5", "F5", "F5", "F5"], ["E5", "B4", "D5", "C5"], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"], ["E5", "D#5", "E5", "D#5"]]



const generateRandom = () => {

    let notetoReturn = musicNote[0][0]
    let removed = musicNote.shift()
    console.log("removed", removed)
    console.log(musicNote)


    return removed
}

const generateRandomMuse = (musicNoteEasyScore) => {


    console.log(musicNoteEasyScore)

    let notetoReturn = musicNoteEasyScore[0][0]
    let removed = musicNoteEasyScore.shift()
    console.log("removed", removed)

    return removed
}

const generateRandomBass = (musicNoteBass) => {


    console.log(musicNoteBass)

    let notetoReturn = musicNoteBass[0][0]
    let removed = musicNoteBass.shift()
    console.log("removed", removed)

    return removed
}




function FlyMeToTheMoon() {
    const [state, dispatch] = useReducer(reducer, {
        toPlay: ['C5', "B4", "A4", 'G4'],
        toPlayBass: ["(A3 C4 E4)/w"],
        toPlayMuse: ['C5/q', "B4", "A4", 'G4'],
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
        <div className="App">
            <div className="Music">

                <h1>Fly Me To The Moon - Frank Sinatra</h1>
                <MusicBass
                    // notes={(state.toPlay)}
                    notes={state.toPlayMuse.toString()}
                    highlightedNotes={[...Array(state.position).keys()]}
                    notesBass={(state.toPlayBass.toString())}
                />
            </div>

            {/* {JSON.stringify(state)} */}
        </div>
    );
}

export default FlyMeToTheMoon;
