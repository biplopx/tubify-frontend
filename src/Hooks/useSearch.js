import { useEffect, useState } from 'react';
const useSearch = ({ search }) => {
    const [searchSong, setSearchSong] = useState([]);
    useEffect(() => {
        fetch(`https://tubifybd.herokuapp.com/song/song-by-name/${search}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                setSearchSong(data)
            })
    }, [search])
    return [searchSong]
}

export default useSearch;