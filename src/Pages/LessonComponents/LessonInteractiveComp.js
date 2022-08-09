import React from 'react'
// import { MiddleC } from '..../Images/MiddleC.png'
const LessonInteractiveComp = ({ title, data, image, index }) => {
    return (

        <div >
            {data[index].map(item => {
                return <img className="lesson-img" src={item.title} />
            }

            )}

        </div>
    )
}

export default LessonInteractiveComp