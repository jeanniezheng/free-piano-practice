import Vex from "vexflow";
//pass in highlightednotes for bass
//pass in notes for bass 

import { useRef, useEffect } from "react";

export default function Music({
    notes = [],
    highlightedNotes = [],
    highlightedNotesbass = [],
    notesBass = [],
    width = 520,
    height = 500,
    style = {},
    ...props
}) {
    const target = useRef();


    useEffect(() => {
        if (target.current == null) return;

        target.current.innerHTML = "";
        const vf = new Vex.Flow.Factory({
            renderer: { elementId: target.current, width: width, height: height },
        });



        const score = vf.EasyScore();

        const system = vf.System();


        const vexNotes = score.notes(notes, { stem: "up" });

        const vexNotesBass = score.notes(notesBass, {
            clef: 'bass',
            stem: 'up'
        })


        highlightedNotes.forEach((index) => {
            if (vexNotes[index] != null) {
                vexNotes[index].setStyle({ strokeStyle: "green", fillStyle: "green" });
            }
        });


        system
            .addStave({
                voices: [score.voice(vexNotes)],
            })
            .addClef("treble");


        system
            .addStave({
                voices: [score.voice(vexNotesBass)],
            })
            .addClef("bass");

        vf.draw();
    }, [target, notes, width, height, highlightedNotes]);






    return <div ref={target} {...props} />;
}
