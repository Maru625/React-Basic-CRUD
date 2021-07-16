import React from 'react'

function List({user, onRemove}){
    return (
        <div>
          <b>{user.username}</b> <span>({user.email})</span>
          <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
      );
}
function ShowList({listname, onRemove}){
    return (
        <div>
          {users.map(user => (
            <User user={user} key={user.id} onRemove={onRemove} />
          ))}
        </div>
      );
}

export default ShowList