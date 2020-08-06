import React from 'react';

const Keyboard =props=>{

    const shownote=e=>{
        console.log(e.target.value)
    }

    return(
        <div>
            <button value="a" className="note" onClick={(e)=>shownote(e)}>A</button>
            <button value="as" classsName="note" onClick={(e) => shownote(e)}>A#/Bb</button>
            <button value="b" className="note" onClick={(e) => shownote(e)}>B</button>
            <button value="c" className="note" onClick={(e) => shownote(e)}>C</button>
            <button value="cs" className="note" onClick={(e) => shownote(e)}>C#/Db</button>
            <button value="d" className="note" onClick={(e) => shownote(e)}>D</button>
            <button value="ds" className="note" onClick={(e) => shownote(e)}>D#/Cb</button>
            <button value="e" className="note" onClick={(e) => shownote(e)}>E</button>
            <button value="f" className="note" onClick={(e) => shownote(e)}>F</button>
            <button value="fs" className="note" onClick={(e) => shownote(e)}>F#/Gb</button>
            <button value="g" className="note" onClick={(e) => shownote(e)}>G</button>
            <button value="gs" className="note" onClick={(e) => shownote(e)}>G#/Ab</button>
        </div>
    )

}

export default Keyboard