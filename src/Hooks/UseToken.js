
import axios from "axios";
import { useEffect, useState } from "react"
const useToken = (user) => {
    const email = user?.user?.email
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            if (email) {
                const { data } = await axios.post('https://secure-sands-19636.herokuapp.com/gettoken', { email });
                setToken(data)
                localStorage.setItem('accessToken', data)
            }
        }
        getToken()
    }, [email])
    return [token]
}
export default useToken