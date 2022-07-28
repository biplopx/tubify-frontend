import React from 'react';

const ListRecommendations = () => {
    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
        params: { key: '484129036', locale: 'en-US' },
        headers: {
            'X-RapidAPI-Key': 'dd48eb1fddmsha2ba36d41b878f2p1776f5jsn8127ad1988e3',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    return (
        <div>

        </div>
    );
};

export default ListRecommendations;