import React from 'react'
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