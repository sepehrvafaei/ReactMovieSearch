import axios from 'axios';

export const search_movie = (text) => ((dispatch) => {
    return dispatch({
        type: 'SEARCH_MOVIE',
        payload:text
    });
});

export const fetch_movies = (text) => ((dispatch) => {
    axios.get(`http://www.omdbapi.com/?apikey=33654926&s=${text}`)
        .then(res => dispatch({
            type: 'FETCH_MOVIES',
            payload: res.data.Search
        }))
        .catch(error => { console.log(error) });
});

export const get_movie = (id) => ((dispatch) => {
    return dispatch({
        type: 'GET_MOVIE',
        payload:id
    });
});