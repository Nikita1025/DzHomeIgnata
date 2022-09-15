import React from 'react'

import Error404 from "./pages/Error404";
import {Route, Navigate, Routes} from "react-router-dom";
import PreJunior from './pages/PreJunior';
import Junior from "./Junior";
import JuniorPlus from "./JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORPLUS: '/junior+'

}

function Pages() {
    return (
        <div>
            {/*          Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*  в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={'/'} element={<Navigate to={PATH.JUNIOR}/>}/>
                <Route path={'/'} element={<Navigate to={PATH.JUNIORPLUS}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIORPLUS} element={<JuniorPlus/>}/>

                {/*   //add route

                он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
