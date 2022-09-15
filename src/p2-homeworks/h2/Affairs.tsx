import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>,
    setFilter: Dispatch<SetStateAction<FilterType>>,
    deleteAffairCallback: (id:number)=> void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a.id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className={s.someClass}>

            {mappedAffairs}
    <div className={s.butt2}>
            <button  className={s.butt3} onClick={setAll}>All</button>
            <button  className={s.butt3} onClick={setHigh}>High</button>
            <button  className={s.butt3} onClick={setMiddle}>Middle</button>
            <button  className={s.butt3} onClick={setLow}>Low</button>
    </div>
        </div>
    )
}

export default Affairs
