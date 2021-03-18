import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchUsers = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState(null);
    const BASE_URL = 'https://dummyapi.io/data/api';
    const APP_ID = '604e97f2fa012b6375b37f20'


    useEffect(() => {
        setLoading(true)

        const callApi = () => {
            axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then((data) => setUsers(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        callApi();
        return () => callApi
    }, [])

    return { loading, users }
}

export default useFetchUsers;