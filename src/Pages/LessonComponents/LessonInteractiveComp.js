import React from 'react'
// import { MiddleC } from '..../Images/MiddleC.png'
const LessonInteractiveComp = ({ title, data, image, index }) => {
    return (
        // <div>

        //     <p>{data}</p>
        //     <img src={image} height={300} width={500} alt="MiddleC" />

        //     {/* {data[Index].map(item => {
        //         <div>
        //             <p>{ }</p>

        //         </div>

        //     })} */}
        // </div>
        <div>
            {data[index].map(item => {
                return <img src={item.title} height={300} width={500} />
            }

            )}
            {/* <p>{data[0].title}</p> */}

            {/* <p>{data}</p>
            <img src={image} height={300} width={500} alt="MiddleC" />

            {/* {data[Index].map(item => {
                <div>
                    <p>{ }</p>

                </div>

            })} */}
        </div>
    )
}

export default LessonInteractiveComp