import React, { useState , useEffect} from "react"

import Header from "../../src/content/Header"
import style from "../../src/css/Todo.css"
import InputContent from "../content/InputContent"
import ToDoList from "../content/ToDoList"

function Index(){
    const [todolist, settodolist] = useState(
        ()=>JSON.parse(window.localStorage.getItem("todolist")) || [
            {   
                id : 0,
                title : "첫번째 할 일",
                detail : "청소"
            },
            {
                id :1,
                title : "두번째 할 일",
                detail : "식사 준비"
            }]
        
    )
    
    useEffect( ()=> {window.localStorage.setItem("todolist", JSON.stringify(todolist));}, [todolist]);
    
    
    return(
        <div className="total">
            <div className="header">
                <Header/>
            </div>
            <div className="inputcontent">
                <InputContent 
                todolist={todolist} 
                settodolist={settodolist}/>
            </div>
            <div className="todoList">
                <ToDoList 
                todolist={todolist}
                settodolist={settodolist}
                />
            </div>
            
        </div>
    )
}
export default Index