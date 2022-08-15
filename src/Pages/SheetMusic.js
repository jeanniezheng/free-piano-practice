import React from 'react'
import FurElise from '../SheetMusic/FurElise'
import { useNavigate } from 'react-router-dom'

//nest a route to each piano piece

const SheetMusic = () => {
    let navigate = useNavigate();

    return (
        <div>
            <button className='button' onClick={() => {
                navigate("/sheetmusic/furelise")
            }}> FurElise - Beethoven</button>
            <button className='button' onClick={() => {
                navigate("/sheetmusic/flymetothemoon")
            }}> Fly Me To The Moon - Frank Sinatra</button>


        </div>

    )
}

export default SheetMusic