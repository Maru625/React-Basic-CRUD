import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import style from "../pages/page1/css/Todo.scss"
import Index from './page1/page/Index'
import Index2 from './page2/page/Index2'
import Index3 from './page3/page/Index3'
import UsersStore from './page3/context/axiosContext'


function Root(){

    return(
        <BrowserRouter>
            <UsersStore>
                <ul className="headerMenu">
                    <li><Link to="/">TO DO LIST</Link></li>
                    <li><Link to="/about">AXIOS</Link></li>
                    <li><Link to="/about/foo">Context COLOR</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={Index}/>
                <Route exact path="/about" component={Index2}/>
                <Route exact path="/about/foo" component={Index3}/>
            </UsersStore>
        </BrowserRouter>
    )
}
export default Root