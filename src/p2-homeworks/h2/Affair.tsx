import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair.id)
    }// need to fix

    return (

        <div >
            <table>


                <td className={s.one}>

                    {props.affair.name}

                </td>



                <td className={s.two}>{props.affair.priority}</td>


                <td className={s.thee}><button className={s.butt} onClick={deleteCallback}>X</button></td>

            </table>
        </div>
    )
}

export default Affair
