const initialState = {
    text:'',
    movies: [],
    loading: false,
    movie: {}
};

export default function (state = initialState,action) {
    switch (action.type) {
        case 'SEARCH_MOVIE':
            return {
                ...state,
                text: action.payload,
                loading:false
            }
        case 'FETCH_MOVIES':
            return {
                ...state,
                movies:action.payload
            }
        case 'GET_MOVIE':
            const wanted = state.movies.find(x => x.imdbID === action.payload);
            return {
                ...state,
                movie:wanted
            }
        default:
            return state;
    }
}