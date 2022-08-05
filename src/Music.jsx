import Vex from "vexflow";

import { useRef, useEffect } from "react";
import "./stylesheet/musicGenerate.css"


export default function Music({
    notes = [],
    highlightedNotes = [],
    width = 520,
    height = 300,
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

        // const bassvf = new Vex.Flow.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q" })
        // const scorebass = bassvf.EasyScore();
        // const systembass = bassvf.System();

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
                voices: [score.voice(score.notes('(C4 E4 G4 Bb4)/w')),
                ],
            })
            .addClef("bass");

        vf.draw();
    }, [target, notes, width, height, highlightedNotes]);

    return <div className="staff" ref={target} {...props} style={{ width, height, ...style }} />;
}