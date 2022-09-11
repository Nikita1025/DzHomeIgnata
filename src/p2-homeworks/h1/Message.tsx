import React from 'react'
import s from './Message.module.css'

type messageData = {
    name: string
    message: string
    time: string
    avatar: string
}

export const Message = (props: messageData) => {
    return (
<div className={s.message}>
    <img src={props.avatar} alt={'avatar'} className={s.avatar}/>
    <div className={s.angel}/>
        <div className={s.content}>


            <div className={s.name}>{props.name}</div>
            <div className={s.message}>{props.message}</div>
            <div className={s.time}>{props.time}</div>


        </div>
</div>
    )
}


