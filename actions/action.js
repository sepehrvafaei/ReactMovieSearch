import axios from 'axios';

export const search_movie = (text) => ((dispatch) => {
    return dispatch({
        type: 'SEARCH_MOVIE',
        payload:text
    });
});

export const fetch_movies = (text) => ((dispatch) => {
    axios.get(`http://www.omdbapi.com/?apikey=33654926&s=${text}`)
        .then(res => {
            if (res.data.Response==='True') {
                return dispatch({
                    type: 'FETCH_MOVIES',
                    payload: res.data.Search
                });
            } else {
                return dispatch({
                    type: 'FETCH_MOVIES',
                    payload:[]
                });
            }
        })
        .catch(error => { console.log(error) });
});

export const fetch_movie = (id) => ((dispatch) => {
    axios.get(`http://www.omdbapi.com/?apikey=33654926&i=${id}`)
        .then(res => dispatch({
            type: 'FETCH_MOVIE',
            payload: res.data
        }))
        .catch(error => { console.log(error) });
});

export const set_loading = () => {
    return {type:'SET_LOADING'};
}