import React from 'react'


type messageData = {
    name: string
    message: string
    time: string
    avatar: string
}

export const Message = (props: messageData) => {
    return (
        <div>
            <div>{props.message}</div>
            <div>{props.time}</div>
            <div>{props.name}</div>
            <img src={props.avatar}/>

        </div>
    )
}


