import React, {useState} from 'react';
import AddUserForm from './add-user-form';
import Movies from './playing';

import '../App.scss';

function AddUser() {
  const usersData = [
    { id: 1, name: 'Joseph', username: 'Flipnoggin' },
    { id: 2, name: 'Ajay', username: 'Node Master' },
    { id: 3, name: 'John', username: 'Jonny' },
  ]
  const [state, setState] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1
    setState([...state, user])
  }

const users = state.map(user => <li>{user.id}. {user.name} - {user.username}</li>)


  return (
    <>  
       <div className="container">
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
    <h1> {users}</h1>
    <Movies />
            </div>
    
    </>
  );
}

export default AddUser;
