import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix an
        // setName(e.currentTarget.name)
        setName(e.currentTarget.value.trim())
      setError('')

    }
    const onKeyPress=(event:KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === "Enter"){
            addUser()
        }
    }
    const addUser = () => {
        if(name.trim() !== ''){
            addUserCallback(name)
            setName('')
            alert(`Hello ${name}!`)
        }else {
            setError('Error')
        }

    }

    const totalUsers = users.length

    return (
        <Greeting
            onPress={onKeyPress}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
