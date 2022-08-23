import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Artist = () => {
    const {  data,  refetch } = useQuery(['artist'], () =>
  fetch(`http://localhost:5000/artist/all-artist`)
    .then(res => res.json())
)
console.log(data)

// vai all artist gula show koren and card e dekhan 


    return (
        <div>
            all artist 
        </div>
    );
};

export default Artist;