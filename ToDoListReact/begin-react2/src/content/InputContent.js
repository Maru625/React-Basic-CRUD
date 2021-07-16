import React, { useState } from "react"

function InputContent({todolist, settodolist}){
    const [ input, setInput ] = useState({
        title : '', detail : ''
    });
    const onChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name] : value
        });
    }

    const onClick = () => {
        const inputCount = {id : todolist.length, ...input}
        if(input.title.length===0){
            setInput({ title : '', detail : ''});
        }else{
            settodolist((todolist) => [...todolist, inputCount]);
            setInput({ title : '', detail : ''});
        }
    }

    return(
        <>
            <div className="inputtotal">
                <input
                className="titlename"
                placeholder="일정 제목을 입력하시오"
                name="title"
                value={input.title}
                onChange={onChange}
                />
                <textarea
                className="detailtext"
                placeholder="일정 내용을 입력하시오"
                name="detail"
                value={input.detail}
                onChange={onChange}
                />
            </div>
            <div className="buttonform">
                <button className="submisson" onClick={onClick}>
                    SUBMISSON
                </button>
                <button className="cancel">
                    CANCEL
                </button>
            </div>
    </>
    )
}
export default InputContent