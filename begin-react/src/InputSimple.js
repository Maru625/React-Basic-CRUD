import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState(
        {
            name:'',
            ID:''
        }
    );

    const nameInput = useRef();
    const {name, ID} = inputs;

    const onChange = e => {
        const {value, name} = e.target;
        setInputs(
            {
                ...inputs,
                [name] : value
            }
        );
    };
    const onReset=()=>{
        setInputs(
            {
                name:'',
                ID:''
            }
        );
        nameInput.current.focus();
    };


  return (
    <div>
      <input 
        name="name" 
        placeholder="이름" 
        onChange={onChange} 
        value={name}
        ref={nameInput}
        />
      <input 
      name="ID" 
      placeholder="ID" 
      onChange={onChange} 
      value={ID}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({ID})
      </div>
    </div>
  );
}

export default InputSample;