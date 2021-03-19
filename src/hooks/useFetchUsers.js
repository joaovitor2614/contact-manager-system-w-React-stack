import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchUsers = () => {
   
    const [users, setUsers] = useState(null);
   


    useEffect(() => {
      

        const callApi = async () => {
            await axios.get('https://6042ac307f50e000173ac863.mockapi.io/api/contacts/contacts')
            .then((data) => setUsers(data.data[0].contacts))
            .catch(err => console.log(err))
           
        }
       
        return () => callApi
    }, [])
    console.log(users)
    return users

 
}

export default useFetchUsers;