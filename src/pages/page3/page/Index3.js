import React,{useContext} from 'react'
import {UserContext} from '../context/axiosContext'

function Index3(){

    const context = useContext(UserContext)
    console.log(context.users)


    const userlist = context.users.map((item)=>(
    <li className = "user-name-list">
        <p>{item.name}</p>
        <p>{item.username}</p>
        <p>{item.email}</p>
        <p>{item.phone}</p>
    </li>
    ))

    return(
        <div className="Index3Box">

            <div>
                change text color
                <br />
            </div>
            <div>
                <button>change black</button>
                <button>change white</button>
                <button>change pink</button>
            </div>
            <div>
                [USER LIST FOR jsonplaceholder]
                {userlist}
            </div>
            
        </div>
    )
}

export default Index3