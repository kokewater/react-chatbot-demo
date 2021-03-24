import React from 'react'
import {Answer} from './index'

const AnswersList = () => {
    return(
        <div className="c-grid__answer">
            {props.answers.map((value, index) => {
                return <Answer content={value.content}/>
            })}
        </div>
    )

}

 export default AnswersList