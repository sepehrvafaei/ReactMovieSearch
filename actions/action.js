export const search_movie = (text) => ((dispatch) => {
    return dispatch({
        type: 'SEARCH_MOVIE',
        payload:text
    });
});