import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id:number)=> void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair.id)
    }// need to fix

    return (
        <div>

            <div>
                {props.affair.name}


            </div>
            <div>{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
