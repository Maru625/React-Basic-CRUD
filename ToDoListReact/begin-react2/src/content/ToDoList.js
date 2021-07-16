import React,{useState} from "react"
import Modal from './Modal'

function ShowItem({item, settodolist, todolist, openmodal, setOpenmodal, modalinput, setModalInput}){

    const onRemove = (id) => {
        settodolist(todolist.filter(item => item.id !== id));
      };
    const onModal = (id) => {
        setOpenmodal({
            modalon: true,
            modalnumber : id
        })
        console.log("modal input before :",modalinput)
        setModalInput(() =>todolist[id])
        console.log(todolist)
        
        console.log("modal input after: ",modalinput)
    }
    

    return (
        <li>
            <div>{item.title}</div>
            <span>{item.detail}</span>
            <button onClick={() => onRemove(item.id)}>DELETE</button>
            <button onClick={() => onModal(item.id)}>
                MODAL
            </button>
            <button onClick>INPUT</button>
        </li>
    )
}

function ToDoList({todolist, settodolist}){
    const [openmodal, setOpenmodal] = useState({
        modalon : false, 
        modalnumber : 1
    })

    const [ modalinput, setModalInput ] = useState({
        id : 0,
        title : "",
        detail : ""
    });

    return(
        <ul className="listTotal">
            {todolist.map(item => (
                <ShowItem 
                item={item} 
                key={item.id} 
                todolist={todolist}
                settodolist={settodolist}
                openmodal={openmodal}
                setOpenmodal={setOpenmodal}
                modalinput={modalinput}
                setModalInput={setModalInput}
                />
            ))}
            <Modal 
            todolist={todolist}
            settodolist={settodolist}
            openmodal={openmodal}
            setOpenmodal={setOpenmodal}
            modalinput={modalinput}
            setModalInput={setModalInput}
            />
        </ul>
    );
}
export default ToDoList