import React, { useState } from 'react'
import Input from '@material-ui/core/Input';
import '../../App.scss'
import Button from '@material-ui/core/Button';


const AddUserForm = props => {
console.log(props)
const initialFormState = { id: null, name: '', username: ''}
const [user, setUser] = useState(initialFormState)

const handleInputChange = event => {
  const { name, value } = event.target

  setUser({...user, [name]: value })
}

  return (
    <form id="hooks-form"
    onSubmit={event => {
      event.preventDefault()
      if(!user.name || !user.username)
       return
       props.addUser(user)
       setUser(initialFormState)
    }}
    >
      {/* <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Add new user</button>*/}
      <label>Name</label> 
      <Input name="name" id="name" onChange={handleInputChange} value={user.name} />
                <label htmlFor='about'>Username </label>
                  <Input name="username" id=""onChange={handleInputChange} value={user.username}  />
                <Button type="submit" className="user-submit-button" variant="">Add New User</Button><br />
    </form>
  )
}

export default AddUserForm;
