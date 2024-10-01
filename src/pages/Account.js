import { useState, useEffect } from 'react';
import { useAuth } from '../AuthProvider';
import axios from 'axios';

function Account() {
    const [ account , setAccount] = useState([])
    const { user} = useAuth()
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedPicture, setEditedPicture] = useState(null)
    const [showModal, setShowModal] = useState(false);
    
    const getAccount = () => {
        axios.get("http://localhost:4000/account", {
            headers : {
        Authorization: `Bearer ${user.token}`
      }
    }).then(res => {
      setAccount(res.data)
      setEditedName(res.data[0]?.name || '');
      setEditedEmail(res.data[0]?.email || '');
      setEditedPicture(res.data[0]?.picture || '');
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect( () => {
    getAccount();
  },[user.token])
    return ( 
    <>
        <h1>Account</h1>
        {JSON.stringify(account)}
    </>    
     );
}
export default Account;