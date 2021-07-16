import React, {useRef} from 'react'

function AddList({listname, dotime, onCreate, onChange}){
    return(
        <>
            <input
            name="ToDoList"
            placeholder="해야 할 일"
            onChange={onChange}
            value={listname}
            />
            <input
            name="Time"
            placeholder="시간"
            onChange={onChange}
            value={dotime}
            />
            <button onClick={onCreate}>등록</button>
        </>
    )
}

export default AddList