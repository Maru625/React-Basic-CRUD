import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Index from './page1/page/Index'
import Index2 from './page2/page/Index2'

function Root(){
    return(
        <BrowserRouter>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/foo">About Foo</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Index}/>
            <Route path="/about" component={Index2}/>
        </BrowserRouter>
    )
}
export default Root