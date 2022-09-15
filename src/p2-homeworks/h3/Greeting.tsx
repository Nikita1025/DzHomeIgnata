import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void// need to fix any
    addUser: ()=> void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onPress?: (event:KeyboardEvent<HTMLInputElement>)=>void
}


// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.container}>

            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onPress}  />
            <span>{error}</span>
            <button className={s.button} onClick={addUser}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>

        </div>
    )
}

export default Greeting
