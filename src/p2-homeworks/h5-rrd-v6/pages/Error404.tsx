import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div>
            <div>
                <img className={s.img} src={'https://www.federacel.ru/wp-content/uploads/2018/02/404-300x226.png'}/>
            </div>
            <div className={s.text}>Page not found!!!</div>

        </div>
    )
}

export default Error404
