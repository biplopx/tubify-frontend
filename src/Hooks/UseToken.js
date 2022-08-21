import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;

        const currentUser = {
            email: email,
        };
        if (email) {
            fetch(`https://tubifybd.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const userToken = data.accessToken;
                    localStorage.setItem('accessToken', userToken)
                    setToken(userToken)
                })
        }
    }, [user])

    return [token]
}
export default useToken