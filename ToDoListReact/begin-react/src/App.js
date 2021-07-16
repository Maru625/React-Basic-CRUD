import {useRef, useState} from "react"
import ShowList from "./ShowList"
import ShowTime from "./ShowTime"
import AddList from "./AddList"

function App() {
  
  const [inputs, setInputs] = useState({
    listname: '',
    dotime: ''
  });
  const { listname, dotime } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      listname: '해야 할 일을 입력하시오',
      dotime: '07:10'
    }
  ]);
  const nextId = useRef(2);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      listname,
      dotime
    };
    setUsers(users.concat(user));

    setInputs({
      listname: '',
      dotime: ''
    });
    nextId.current += 1;
  };

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  return (
    <div className="App">
      <ShowTime/>
      <h1>To Do List</h1>
      <ShowList/>
      <AddList
      listname={listname}
      dotime={dotime} 
      onCreate={onCreate} 
      onChange={onChange}
      />
    </div>
  );
}

export default App;
