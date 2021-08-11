import React,{createContext, useState, useEffect} from "react"
import axios from 'axios'

export const UserContext = createContext();

function UsersStore(props){

    const [users, setUsers] = useState(null); //요청의 결과
    const [loading, setLoading] = useState(false); //로딩 상태
    const [error, setError] = useState(null); //에러
    
    useEffect(() => {
        const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };
    
        fetchUsers();
    }, []);
    
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;



    const Users = {
        users,
        loading,
        error
    }

    return (
    <UserContext.Provider value={Users}>
        {props.children}
    </UserContext.Provider>
    )
}
export default UsersStore;