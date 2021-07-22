import React from "react"

function Modal({ openmodal, setOpenmodal, todolist, settodolist, modalinput, setModalInput}){

    const onChangeModal=(e)=>{
        const {name, value} = e.target;
        setModalInput({
            ...modalinput,
            [name] : value
        })
    }
    const onRevise = () => {
        const inputItem = modalinput
        if(modalinput.title.length===0){
            setModalInput({ title : '', detail : ''});
        }else{
            settodolist((todolist) => {
                todolist.splice(inputItem.id, 1, inputItem)
                return todolist
            });
            setModalInput({ title : '', detail : ''});
        }
        setOpenmodal({
            modalon: false,
            modalnumber : 0
        })
    }
   

    const offModal = () => {
        setOpenmodal({
            modalon: false,
            modalnumber : 0
        })
    }
    const onRemove = () => {
        settodolist(todolist.filter(item => item.count !== openmodal.modalnumber));
        setOpenmodal({
            modalon: false,
            modalnumber : 0
        })
      };

    return(
        openmodal.modalon ? 
        <div className="modalMain">
            <h1 className="modalname">수정창</h1>
            <input 
            className="modaltitle"
            name="title"
            value={modalinput.title}
            onChange={onChangeModal}
            >
            </input>
            <input 
            className="modaldetail"
            name="detail"
            value={modalinput.detail}
            onChange={onChangeModal}
            >
            </input>
            <div className="modalbutton">
                <button onClick={()=>onRevise()}>수정</button>
                <button onClick={()=>offModal()}>취소</button>
                <button onClick={() => onRemove()}>삭제</button>
            </div>
        </div>:
         <div></div>
    )

}

export default Modal